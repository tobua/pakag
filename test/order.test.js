import { test, expect } from 'vitest'
import formatPackageJson from '..'

test('Sorts according to custom sort order for this package.', () => {
  const packageContents = `{
    "tsconfig": {
        "compilerOptions": {
            "baseUrl": "."
        }
    },
    "devDependencies": {
        "jest": "latest"
    },
    "eslintConfig": {
        "extends": "..."
    },
    "dependencies": {
        "react": "latest"
    },
    "papua": {
        "typescript": false
    },
    "scripts": {
        "build": "webpack",
        "start": "webpack-dev-server",
        "test": "jest"
    },
    "name": "sorting",
    "description": "Hello world"
  }
  `

  const resultingContents = `{
  "name": "sorting",
  "description": "Hello world",
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server",
    "test": "jest"
  },
  "papua": {
    "typescript": false
  },
  "dependencies": {
    "react": "latest"
  },
  "devDependencies": {
    "jest": "latest"
  },
  "eslintConfig": {
    "extends": "..."
  },
  "tsconfig": {
    "compilerOptions": {
      "baseUrl": "."
    }
  }
}
`

  expect(formatPackageJson(packageContents)).toEqual(resultingContents)
})

test('Sort order can be customized.', () => {
  const packageContents = `{
    "tsconfig": {
        "compilerOptions": {
            "baseUrl": "."
        }
    },
    "devDependencies": {
        "jest": "latest"
    },
    "eslintConfig": {
        "extends": "..."
    },
    "dependencies": {
        "react": "latest"
    },
    "papua": {
        "typescript": false
    },
    "scripts": {
        "build": "webpack",
        "start": "webpack-dev-server",
        "test": "jest"
    },
    "name": "sorting",
    "description": "Hello world"
  }
  `

  const resultingContents = `{
  "devDependencies": {
    "jest": "latest"
  },
  "name": "sorting",
  "description": "Hello world",
  "scripts": {
    "build": "webpack",
    "start": "webpack-dev-server",
    "test": "jest"
  },
  "eslintConfig": {
    "extends": "..."
  },
  "dependencies": {
    "react": "latest"
  },
  "papua": {
    "typescript": false
  },
  "tsconfig": {
    "compilerOptions": {
      "baseUrl": "."
    }
  }
}
`

  expect(
    formatPackageJson(packageContents, {
      sortOrder: ['devDependencies'],
    })
  ).toEqual(resultingContents)
})
