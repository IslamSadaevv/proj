// @ts-check

import eslint from '@eslint/js'
import tsEslint from 'typescript-eslint'
import reactPlugin from 'eslint-plugin-react'
import reactPluginHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'
import nextPlugin from '@next/eslint-plugin-next'
import {defineConfig} from 'eslint/config'

export default defineConfig({
  extends: [
    eslint.configs.recommended,
    tsEslint.configs.recommendedTypeChecked,
    {
      languageOptions: {
        parserOptions: {
          ecmaVersion: 'latest',
          projectService: true,
          // project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'], 
          tsconfigRootDir: import.meta.dirname,
        },
      },
    },
    {
      files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
      ...reactPlugin.configs.flat.recommended,
      // Required when using React 17+.
      ...reactPlugin.configs.flat['jsx-runtime'],
      languageOptions: {
        ...reactPlugin.configs.flat.recommended.languageOptions,
        globals: {
          ...globals.serviceworker,
          ...globals.browser,
        },
      },
      rules: {
        //   de allerstrengste regels uit zette omda tshadcn 
        // soms 'any' nodig heeft om te werken.
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unused-vars': 'warn', 
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        
        // Standaard regels
        'jsx-quotes': ['error', 'prefer-double'],
        'react/jsx-curly-brace-presence': 'off', 
        '@typescript-eslint/consistent-type-imports': 'warn',
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
    {
      plugins: {
        'react-hooks': reactPluginHooks,
      },
      rules: {
        ...reactPluginHooks.configs.recommended.rules,
      },
    },
    {
      plugins: {
        '@next/next': nextPlugin,
      },
      rules: {
        ...nextPlugin.configs.recommended.rules,
        ...nextPlugin.configs['core-web-vitals'].rules,
      },
    },
    {
      ignores: [
        'tailwind.config.js', 
        'postcss.config.js', 
        'eslint.config.mjs', 
        '.next/*',
        'src/generated/**/*',      // NEGEER PRISMA CLIENT
        'src/components/ui/**/*'   // NEGEER UI COMPONENTS 
      ],
    },
  ],
})