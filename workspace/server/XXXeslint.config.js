
import js from '@eslint/js';
import typeScriptESLint from '@typescript-eslint/eslint-plugin';
import typeScriptESLintParser from '@typescript-eslint/parser';

const compat = new FlatCompat();

export default [
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('plugin:node/recommended', 'plugin:@typescript-eslint/eslint-recommended'),
  {
    plugins: {
      typeScriptESLint
    },
    languageOptions: {
      parser: typeScriptESLintParser,
    }
  }
];

/*
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ]
}
*/
//import { FlatCompat } from '@eslint/eslintrc';
//import eslintConfigPrettier from 'eslint-config-prettier';
//import html from 'eslint-plugin-html';
//import markdown from 'eslint-plugin-markdown';