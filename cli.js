#!/usr/bin/env node
import path from 'node:path'
import fsp from 'node:fs/promises'
import process from 'node:process'
import c from 'picocolors'
import { installPackage } from '@antfu/install-pkg'
import { isPackageExists, getPackageInfo } from 'local-pkg'

const PRETTIER_CONFIG_NAME = '@mancuoj/prettier-config'
const REQUIRED_PACKAGES = ['prettier', PRETTIER_CONFIG_NAME]

try {
  const missingPkgs = REQUIRED_PACKAGES.filter((pkg) => !isPackageExists(pkg))

  if (missingPkgs.length > 0) {
    console.log(c.cyan(`🚀 Installing required packages: ${missingPkgs.join(', ')}`))
    await installPackage(missingPkgs, { dev: true })
    console.log(c.green('✅ Packages installed.'))
  }

  console.log(c.cyan('📝 Updating package.json...'))
  const pkgJsonPath = path.join(process.cwd(), 'package.json')

  let pkgJson
  try {
    const pkgContent = await fsp.readFile(pkgJsonPath, 'utf-8')
    pkgJson = JSON.parse(pkgContent)
  } catch {
    throw new Error('package.json not found in the current directory.')
  }

  pkgJson.scripts = pkgJson.scripts || {}
  pkgJson.devDependencies = pkgJson.devDependencies || {}

  pkgJson.scripts.format = 'prettier -w .'
  pkgJson.prettier = PRETTIER_CONFIG_NAME

  for (const pkgName of REQUIRED_PACKAGES) {
    const pkgInfo = await getPackageInfo(pkgName)
    if (pkgInfo) {
      pkgJson.devDependencies[pkgName] = `^${pkgInfo.version}`
    }
  }

  await fsp.writeFile(pkgJsonPath, JSON.stringify(pkgJson, null, 2) + '\n')

  console.log(c.green('✅ Prettier setup successfully!'))
} catch (error) {
  console.error(c.red(`\n❌ Error: ${error.message}`))
  process.exit(1)
}
