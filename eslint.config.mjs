// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//   baseDirectory: __dirname,
// });

// const eslintConfig = [...compat.extends("next/core-web-vitals")];

// export default eslintConfig;

import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import js from '@eslint/js';
import nextjs from '@next/eslint-plugin-next';

export default [
  js.configs.recommended, // Base ESLint recommended rules
  {
    // Enable React and Next.js-specific rules
    plugins: {
      'react': eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      '@next/next': nextjs,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js 13+
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX parsing
        },
      },
    },
  },
  {
    // Apply to JS/JSX files
    files: ['**/*.{js,jsx}'],
    rules: {
      '@next/next/no-img-element': 'warn', // Warn about using <img> instead of Next.js Image
    },
  },
  {
    // Apply to TS/TSX files (if using TypeScript)
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript-specific rules
    },
  },
];