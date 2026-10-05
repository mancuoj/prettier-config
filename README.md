# @mancuoj/prettier-config

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Opinionated [Prettier](https://prettier.io) config — usable as a shareable config or via a one-command CLI setup.

> Requires Node.js `>=20.6`.

## Usage

Set up a project in one command (run it in your project root):

```sh
pnpm dlx @mancuoj/prettier-config
# or: npx @mancuoj/prettier-config
```

It installs `prettier` and `@mancuoj/prettier-config` as dev dependencies, then adds the `format` script and the `prettier` field to your `package.json`. Run `pnpm format` to format your project.

<details>
<summary>Manual install</summary>

```sh
pnpm i -D prettier @mancuoj/prettier-config
```

Add the following to your `package.json`:

```json
{
  "scripts": {
    "format": "prettier -w ."
  },
  "prettier": "@mancuoj/prettier-config"
}
```

</details>

## Features

- 2 spaces, no semicolons, single quotes
- Trailing commas, 100 print width
- Ignores common build output and lockfiles (`dist`, `.next`, `pnpm-lock.yaml`, …)

## License

[MIT](https://github.com/mancuoj/prettier-config/blob/main/LICENSE) License © 2024-PRESENT [Mancuoj](https://github.com/mancuoj)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/@mancuoj/prettier-config?style=flat&colorA=18181b&colorB=1f6feb
[npm-version-href]: https://npmjs.com/package/@mancuoj/prettier-config
[npm-downloads-src]: https://img.shields.io/npm/dm/@mancuoj/prettier-config?style=flat&colorA=18181b&colorB=1f6feb
[npm-downloads-href]: https://npmjs.com/package/@mancuoj/prettier-config
[license-src]: https://img.shields.io/github/license/mancuoj/prettier-config.svg?style=flat&colorA=18181b&colorB=1f6feb
[license-href]: https://github.com/mancuoj/prettier-config/blob/main/LICENSE
