import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join } from 'path'
import { formatPackageJson } from './index'

console.log(typeof Bun)

const packageJsonPath = join(process.cwd(), 'package.json')

if (!existsSync(packageJsonPath)) {
  console.error(`Error: No package.json found in ${packageJsonPath}.`)
  process.exit(1)
}

const packageContents = readFileSync(packageJsonPath, 'utf8')

const formattedContents = await formatPackageJson(packageContents)

writeFileSync(packageJsonPath, formattedContents)

console.log(`Formatted package.json in ${packageJsonPath}.`)
