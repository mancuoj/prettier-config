#!/usr/bin/env node
import path from 'node:path'
import fsp from 'node:fs/promises'
import process from 'node:process'
import c from 'picocolors'
import { installPackage } from '@antfu/install-pkg'
import { isPackageExists, getPackageInfoSync } from 'local-pkg'

async function ensurePackages() {
  const missingPkgs = ['prettier', '@mancuoj/prettier-config'].filter(
    (pkg) => !isPackageExists(pkg),
  )
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

    await ensurePackages()

    pkgJson.scripts = {
      ...pkgJson.scripts,
      format: 'prettier -w .',
    }
    pkgJson.devDependencies = {
      ...pkgJson.devDependencies,
      prettier: getPackageInfoSync('prettier').version,
      '@mancuoj/prettier-config': getPackageInfoSync('@mancuoj/prettier-config').version,
    }
    pkgJson.prettier = '@mancuoj/prettier-config'

    await fsp.writeFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2))
    console.log(c.green('✔ Prettier setup successfully!'))
  } catch (err) {
    console.error(c.red(`✘ ${String(err)}`))
  }
}

main()
