import { test, expect } from 'vitest'
import { formatPackageJson } from '..'

test('Sort can be disabled with option.', async () => {
  const packageContents = `{
  "description": "Hello world",
  "name": "sorting"
}
`

  const resultingContentsSorted = `{
  "name": "sorting",
  "description": "Hello world"
}
`

  const resultingContentsNotSorted = `{
  "description": "Hello world",
  "name": "sorting"
}
`

  expect(await formatPackageJson(packageContents, { sort: false })).toEqual(
    resultingContentsNotSorted
  )

  expect(await formatPackageJson(packageContents, { sort: true })).toEqual(resultingContentsSorted)

  expect(await formatPackageJson(packageContents, {})).toEqual(resultingContentsSorted)
})
