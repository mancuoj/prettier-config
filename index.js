// @ts-check
import { fileURLToPath } from 'node:url'

/** @type {import('prettier').Config} */
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
        '**/coverage/**',
        '**/temp/**',
        '**/.vitepress/cache/**',
        '**/.nuxt/**',
        '**/.next/**',
        '**/.turbo/**',
        '**/.react-router/**',
        '**/.vercel/**',
        '**/.changeset/**',
        '**/.idea/**',
        '**/.output/**',
        '**/.vite-inspect/**',

        // root directory
        'output/**',

        '**/CHANGELOG*.md',
        '**/*.min.*',
        '**/LICENSE*',
        '**/__snapshots__',
        '**/auto-import?(s).d.ts',
        '**/components.d.ts',
        '**/typed-router.d.ts',
        '**/package-lock.json',
        '**/pnpm-workspace.yaml',
        '**/pnpm-lock.yaml',
        '**/yarn.lock',
        '**/bun.lockb',
        '**/bun.lock',
        '**/deno.lock',
      ],
      options: {
        requirePragma: true,
      },
    },
  ],
  plugins: [fileURLToPath(import.meta.resolve('@prettier/plugin-oxc'))],
}
