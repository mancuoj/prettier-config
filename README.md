# @mancuoj/prettier-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

## Usage

A CLI tool to help you set up your project with prettier.

```sh
pnpm dlx @mancuoj/prettier-config
```

<details>
<summary>Manual Install</summary>

```sh
pnpm i -D prettier @mancuoj/prettier-config
```

And add the following to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier --write ."
  },
  "prettier": "@mancuoj/prettier-config"
}
```

</details>

## Features

- 2 spaces
- No semicolons
- Single quotes
- Trailing commas
- 100 print width
- Ignore common files

## License

[MIT](https://github.com/mancuoj/prettier-config/blob/main/LICENSE) License © 2024-PRESENT [Mancuoj](https://github.com/mancuoj)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@mancuoj/prettier-config?style=flat&colorA=18181b&colorB=1f6feb
[npm-version-href]: https://npmjs.com/package/@mancuoj/prettier-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@mancuoj/prettier-config?style=flat&colorA=18181b&colorB=1f6feb
[npm-downloads-href]: https://npmjs.com/package/@mancuoj/prettier-config
[license-src]: https://img.shields.io/github/license/mancuoj/prettier-config.svg?style=flat&colorA=18181b&colorB=1f6feb
[license-href]: https://github.com/mancuoj/prettier-config/blob/main/LICENSE
