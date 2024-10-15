#!/usr/bin/env node
import { installPackage } from '@antfu/install-pkg'
import path from 'node:path'
import fsp from 'node:fs/promises'
import process from 'node:process'
import c from 'picocolors'

function isPackageExists(pkg, pkgJson) {
  const dependencies = pkgJson.dependencies || {}
  const devDependencies = pkgJson.devDependencies || {}
  return dependencies.hasOwnProperty(pkg) || devDependencies.hasOwnProperty(pkg)
}

async function ensurePackages(pkgJson) {
  const missingPkgs = ['prettier', '@mancuoj/prettier-config'].filter((pkg) => !isPackageExists(pkg, pkgJson))
  if (missingPkgs.length > 0) {
    console.log(c.cyan(`Installing required packages: ${missingPkgs.join(', ')}`))
    await installPackage(missingPkgs, { dev: true })
  }
}

async function main() {
  try {
    const pkgJsonPath = path.join(process.cwd(), 'package.json')
    const pkgContent = await fsp.readFile(pkgJsonPath, 'utf-8')
    const pkgJson = JSON.parse(pkgContent)

    await ensurePackages(pkgJson)

    pkgJson.scripts = {
      ...pkgJson.scripts,
      format: 'prettier --cache --write .',
    }
    pkgJson.devDependencies = {
      ...pkgJson.devDependencies,
      prettier: pkgJson.devDependencies.prettier || 'latest',
      '@mancuoj/prettier-config': pkgJson.devDependencies['@mancuoj/prettier-config'] || 'latest',
    }
    pkgJson.prettier = '@mancuoj/prettier-config'

    await fsp.writeFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2))
    console.log(c.green('✔ Prettier setup successfully!'))
  } catch (err) {
    console.error(c.red(`✘ ${String(err)}`))
  }
}

main()
