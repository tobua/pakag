import prettier from 'prettier'
import sortPackageJson from 'sort-package-json'

const defaultOptions = {
  sort: true,
  // Customize sort order for this package.
  sortOrder: [
    'name',
    'description',
    'version',
    'private',
    'repository',
    'homepage',
    'bugs',
    'license',
    'author',
    'contributors',
    'scripts',
    'papua',
    'padua',
    'dependencies',
    'peerDependencies',
    'type',
    'main',
    'umd:main',
    'browser',
    'module',
    'unpkg',
    'esmodule',
    'bin',
    'source',
    'types',
    'typings',
    'files',
    'keywords',
    'devDependencies',
    'prettier',
    'eslintConfig',
    'tsconfig',
    'jsconfig',
    'jest',
    'os',
    'engines',
  ],
}

export default (packageContents, userOptions = {}) => {
  const options = { ...defaultOptions, ...userOptions }
  let newContents = packageContents

  if (options.sort) {
    newContents = sortPackageJson(packageContents, {
      sortOrder: options.sortOrder,
    })
  }

  return prettier.format(newContents, {
    // Same config as npm uses for formatting upon install.
    trailingComma: 'es5',
    tabWidth: 2,
    singleQuote: true,
    parser: 'json',
    // Workaround to make sure line break applies for eslintConfig.
    printWidth: 2,
  })
}
