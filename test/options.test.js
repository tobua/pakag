import { test, expect } from 'vitest'
import formatPackageJson from '..'

test('Sort can be disabled with option.', () => {
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

  expect(formatPackageJson(packageContents, { sort: false })).toEqual(
    resultingContentsNotSorted
  )

  expect(formatPackageJson(packageContents, { sort: true })).toEqual(
    resultingContentsSorted
  )

  expect(formatPackageJson(packageContents, {})).toEqual(
    resultingContentsSorted
  )
})
