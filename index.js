import prettier from 'prettier'
import sortPackageJson from 'sort-package-json'

const defaultOptions = {
  sort: true,
}

export default (packageContents, userOptions = {}) => {
  const options = { ...defaultOptions, ...userOptions }
  let newContents = packageContents

  if (options.sort) {
    newContents = sortPackageJson(packageContents)
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
