import formatPackageJson from '..'

test('Indents to 2 spaces.', () => {
  const packageContents = `{
    "name": "indentation"
}
`

  const resultingContents = `{
  "name": "indentation"
}
`

  expect(formatPackageJson(packageContents)).toEqual(resultingContents)
  expect(formatPackageJson(packageContents)).not.toEqual(packageContents)
})

test('Sorts properties.', () => {
  const packageContents = `{
  "description": "Hello world",
  "name": "sorting"
}
`

  const resultingContents = `{
  "name": "sorting",
  "description": "Hello world"
}
`

  expect(formatPackageJson(packageContents)).toEqual(resultingContents)
})
