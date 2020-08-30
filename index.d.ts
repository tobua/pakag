// Reference: https://www.typescriptlang.org/play
interface IOptions {
  sort?: boolean
}

declare const _default: (
  packageContents: string,
  userOptions?: IOptions
) => string
export default _default
