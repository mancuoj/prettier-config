/** @type {import('prettier').Options} */
module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: [
        '**/node_modules/**',
        '**/dist/**',
        '**/output/**',
        '**/coverage/**',
        '**/temp/**',
        '**/.idea/**',
        '**/.github/**',
        '**/.output/**',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/package-lock.json',
        '**/pnpm-lock.yaml',
      ],
      options: {
        requirePragma: true,
      },
    },
  ],
}
