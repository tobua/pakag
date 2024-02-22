import { format } from 'prettier'
import sortPackageJson from 'sort-package-json'

const defaultOptions = {
  sort: true,
  // Customize sort order for this package.
  sortOrder: [
    '$schema',
    'name',
    'productName', // electron app name
    'description',
    'version',
    'private',
    'repository',
    'homepage',
    'bugs',
    'funding',
    'license',
    'author',
    'contributors',
    'scripts',
    'papua',
    'padua',
    'squak',
    'numic',
    'build', // electron-builder
    'workspaces',
    'dependencies',
    'localDependencies',
    'devDependencies',
    'bundleDependencies',
    'peerDependencies',
    'peerDependenciesMeta',
    'optionalDependencies',
    'trustedDependencies', // Run postinstall with Bun
    'overrides',
    'type',
    'sideEffects',
    'main',
    'exports',
    'module',
    'umd:main',
    'browser',
    'unpkg',
    'esmodule',
    'bin',
    'source',
    'types',
    'typings',
    'files',
    'browserslist',
    'keywords',
    'prettier',
    'eslintConfig',
    'stylelint',
    'tsconfig',
    'jsconfig',
    'metro',
    'jest',
    'babel',
    'detox',
    'publishConfig',
    'release',
    'os',
    'cpu',
    'engines',
  ],
}

export function formatPackageJson(packageContents, options = {}) {
  const userOptions = { ...defaultOptions, ...options }
  let newContents = packageContents

  if (userOptions.sort) {
    newContents = sortPackageJson(packageContents, {
      sortOrder: userOptions.sortOrder,
    })
  }

  return format(newContents, {
    // Same config as npm uses for formatting upon install.
    trailingComma: 'es5',
    tabWidth: 2,
    singleQuote: true,
    parser: 'json',
    // Workaround to make sure line break applies for eslintConfig.
    printWidth: 2,
  })
}
