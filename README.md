# pakag

Format package.json contents when working with it in node.

## Features

- Compatible with npm formatting
- Sorts properties

## Installation and Usage

```
npm i pakag
```

and then use it like this

```js
import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'
import formatPackageJson from 'pakag'

const packageJsonPath = join(process.cwd(), 'package.json')

const packageContents = readFileSync(packageJsonPath, 'utf8')

const formattedContents = formatPackageJson(packageContents)

writeFileSync(packageJsonPath, formattedContents)
```

## Options

Options can be provided as the second parameter.

```js
formatPackageJson(packageContents, {
  // Sort properties using sort-package-json, default true.
  sort: false,
  // Customize sort order for package.json keys, default order see index.js.
  sortOrder: ['version'],
})
```
