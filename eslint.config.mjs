import eslint from '@eslint/js'
import { getGlobals } from 'common-es'
import tseslint from 'typescript-eslint'
import { defineConfig } from 'eslint/config'

const { __dirname } = getGlobals(import.meta.url)

export default defineConfig([
  { ignores: ['dist/**'] },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
])
