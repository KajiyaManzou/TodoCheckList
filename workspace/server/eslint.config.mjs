import js from '@eslint/js';
import globals from "globals";
import tseslint from "typescript-eslint";
import jsdoc from "eslint-plugin-jsdoc";
import eslintConfigPrettier from 'eslint-config-prettier';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
  js.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('plugin:@typescript-eslint/eslint-recommended', 'prettier'),
  // configuration included in plugin
  //jsdoc.configs['flat/recommended-typescript-error'],
  jsdoc.configs['flat/requirements-typescript-error'],
  //jsdoc.configs['flat/contents-typescript-error'],
  //jsdoc.configs['flat/logical-typescript-error'],
  //jsdoc.configs['flat/stylistic-typescript-error'],
  // other configuration objects...
  {
    plugins: {
      jsdoc: jsdoc
    },
    rules: {
      'jsdoc/require-throws': 'warn'
    }
  }
];