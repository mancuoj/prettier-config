#!/usr/bin/env node
import { isPackageExists } from 'local-pkg'
import { installPackage } from '@antfu/install-pkg'
import path from 'node:path'
import fsp from 'node:fs/promises'
import process from 'node:process'
import c from 'picocolors'

async function ensurePackages(packages) {
  const missingPkgs = packages.filter((p) => !isPackageExists(p))
  if (missingPkgs.length > 0) {
    console.log(c.cyan(`Installing required packages: ${missingPkgs.join(', ')}`))
    await installPackage(missingPkgs, { dev: true })
  }
}

async function main() {
  try {
    await ensurePackages(['prettier', '@mancuoj/prettier-config'])
    const cwd = process.cwd()
    const pathPackageJSON = path.join(cwd, 'package.json')
    const pkgContent = await fsp.readFile(pathPackageJSON, 'utf-8')
    const pkg = JSON.parse(pkgContent)
    pkg.scripts = {
      ...pkg.scripts,
      format: 'prettier --cache --write .',
    }
    pkg.prettier = '@mancuoj/prettier-config'
    await fsp.writeFile(pathPackageJSON, JSON.stringify(pkg, null, 2))
    console.log(c.green(`✔ Prettier setup successfully!`))
  } catch (err) {
    console.error(c.red(`✘ ${String(err)}`))
  }
}

main()
