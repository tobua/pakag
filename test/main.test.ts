import { test, expect } from 'vitest'
import { formatPackageJson } from '..'

test('Indents to 2 spaces.', async () => {
  const packageContents = `{
    "name": "indentation"
}
`

  const resultingContents = `{
  "name": "indentation"
}
`

  expect(await formatPackageJson(packageContents)).toEqual(resultingContents)
  expect(await formatPackageJson(packageContents)).not.toEqual(packageContents)
})

test('Sorts properties.', async () => {
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

  expect(await formatPackageJson(packageContents)).toEqual(resultingContents)
})
