export default {
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  printWidth: 100,
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
