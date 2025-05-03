import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    ignores: ['.eslintrc.js'],
    languageOptions: {
      parserOptions: {
        project: 'tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
        sourceType: 'module',
      },
      globals: {
        node: true,
        jest: true,
      },
    },
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'all',
        },
      ],
    },
  },
);
