# Typescript + TDD 入門

参考: [書籍「テスト駆動開発」の内容でTypeScriptとJestを使ってTDD（テスト駆動開発）をしてみる](https://zenn.dev/ryosuketter/scraps/ba8fae7d2f0651)

参考: [Jestでテスト駆動開発（TDD）を実践してみよう](https://tech.uzabase.com/entry/2021/03/17/165008)

参考: [書籍「テスト駆動開発」をTypeScriptで勉強するときのつまづきポイント](https://zenn.dev/yuma_ito_bd/articles/1612b1f0c92cf4)


### 環境構築: Typescript

```log
node ➜ /workspace $ mkdir tdd-typescript
node ➜ /workspace $ cd tdd-typescript/
node ➜ /workspace/tdd-typescript $ ls
node ➜ /workspace/tdd-typescript $ yarn init
yarn init v1.22.22
question name (tdd-typescript): 
question version (1.0.0): 
question description: 
question entry point (index.js): 
question repository url: 
question author: 
question license (MIT): 
question private: 
success Saved package.json
Done in 15.80s.
node ➜ /workspace/tdd-typescript $ yarn add -D typescript @types/node
yarn add v1.22.22
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 3 new dependencies.
info Direct dependencies
├─ @types/node@22.1.0
└─ typescript@5.5.4
info All dependencies
├─ @types/node@22.1.0
├─ typescript@5.5.4
└─ undici-types@6.13.0
Done in 4.36s.
node ➜ /workspace/tdd-typescript $ tsc --init

Created a new tsconfig.json with:                                                                                  
                                                                                                                TS 
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
node ➜ /workspace/tdd-typescript $ 
```

### 環境構築: jest

- jest インストール

```log
node ➜ /workspace/tdd-typescript $ yarn add -D jest ts-jest @types/jest
yarn add v1.22.22
[1/4] Resolving packages...
warning jest > jest-cli > jest-config > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning jest > @jest/core > jest-runtime > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning jest > @jest/core > @jest/reporters > glob@7.2.3: Glob versions prior to v9 are no longer supported
warning jest > jest-cli > jest-config > glob > inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
warning jest > @jest/core > @jest/transform > babel-plugin-istanbul > test-exclude > glob@7.2.3: Glob versions prior to v9 are no longer supported
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
success Saved 201 new dependencies.
info Direct dependencies
├─ @types/jest@29.5.12
├─ jest@29.7.0
└─ ts-jest@29.2.4
info All dependencies
├─ @ampproject/remapping@2.3.0
├─ @babel/compat-data@7.25.2
├─ @babel/core@7.25.2
├─ @babel/helper-compilation-targets@7.25.2
├─ @babel/helper-module-imports@7.24.7
├─ @babel/helper-module-transforms@7.25.2
├─ @babel/helper-simple-access@7.24.7
├─ @babel/helper-string-parser@7.24.8
├─ @babel/helper-validator-option@7.24.8
├─ @babel/helpers@7.25.0
├─ @babel/highlight@7.24.7
├─ @babel/parser@7.25.3
├─ @babel/plugin-syntax-async-generators@7.8.4
├─ @babel/plugin-syntax-bigint@7.8.3
├─ @babel/plugin-syntax-class-properties@7.12.13
├─ @babel/plugin-syntax-import-meta@7.10.4
├─ @babel/plugin-syntax-json-strings@7.8.3
├─ @babel/plugin-syntax-jsx@7.24.7
├─ @babel/plugin-syntax-logical-assignment-operators@7.10.4
├─ @babel/plugin-syntax-nullish-coalescing-operator@7.8.3
├─ @babel/plugin-syntax-numeric-separator@7.10.4
├─ @babel/plugin-syntax-object-rest-spread@7.8.3
├─ @babel/plugin-syntax-optional-catch-binding@7.8.3
├─ @babel/plugin-syntax-optional-chaining@7.8.3
├─ @babel/plugin-syntax-top-level-await@7.14.5
├─ @babel/plugin-syntax-typescript@7.24.7
├─ @babel/template@7.25.0
├─ @bcoe/v8-coverage@0.2.3
├─ @istanbuljs/load-nyc-config@1.1.0
├─ @jest/globals@29.7.0
├─ @jest/reporters@29.7.0
├─ @jest/source-map@29.6.3
├─ @jest/test-sequencer@29.7.0
├─ @jridgewell/resolve-uri@3.1.2
├─ @jridgewell/set-array@1.2.1
├─ @jridgewell/sourcemap-codec@1.5.0
├─ @sinclair/typebox@0.27.8
├─ @sinonjs/commons@3.0.1
├─ @sinonjs/fake-timers@10.3.0
├─ @types/babel__generator@7.6.8
├─ @types/babel__template@7.4.4
├─ @types/babel__traverse@7.20.6
├─ @types/graceful-fs@4.1.9
├─ @types/istanbul-lib-coverage@2.0.6
├─ @types/istanbul-lib-report@3.0.3
├─ @types/istanbul-reports@3.0.4
├─ @types/jest@29.5.12
├─ @types/stack-utils@2.0.3
├─ @types/yargs-parser@21.0.3
├─ @types/yargs@17.0.32
├─ ansi-regex@5.0.1
├─ ansi-styles@4.3.0
├─ anymatch@3.1.3
├─ argparse@1.0.10
├─ async@3.2.5
├─ babel-jest@29.7.0
├─ babel-plugin-jest-hoist@29.6.3
├─ babel-preset-jest@29.6.3
├─ brace-expansion@1.1.11
├─ braces@3.0.3
├─ browserslist@4.23.3
├─ bs-logger@0.2.6
├─ bser@2.1.1
├─ buffer-from@1.1.2
├─ callsites@3.1.0
├─ camelcase@6.3.0
├─ caniuse-lite@1.0.30001649
├─ chalk@4.1.2
├─ char-regex@1.0.2
├─ cjs-module-lexer@1.3.1
├─ cliui@8.0.1
├─ co@4.6.0
├─ color-convert@2.0.1
├─ color-name@1.1.4
├─ concat-map@0.0.1
├─ create-jest@29.7.0
├─ cross-spawn@7.0.3
├─ debug@4.3.6
├─ dedent@1.5.3
├─ deepmerge@4.3.1
├─ detect-newline@3.1.0
├─ diff-sequences@29.6.3
├─ ejs@3.1.10
├─ electron-to-chromium@1.5.5
├─ emoji-regex@8.0.0
├─ error-ex@1.3.2
├─ escalade@3.1.2
├─ escape-string-regexp@2.0.0
├─ esprima@4.0.1
├─ execa@5.1.1
├─ expect@29.7.0
├─ fb-watchman@2.0.2
├─ filelist@1.0.4
├─ fill-range@7.1.1
├─ find-up@4.1.0
├─ fs.realpath@1.0.0
├─ function-bind@1.1.2
├─ gensync@1.0.0-beta.2
├─ get-caller-file@2.0.5
├─ get-package-type@0.1.0
├─ get-stream@6.0.1
├─ glob@7.2.3
├─ globals@11.12.0
├─ hasown@2.0.2
├─ html-escaper@2.0.2
├─ human-signals@2.1.0
├─ imurmurhash@0.1.4
├─ inflight@1.0.6
├─ inherits@2.0.4
├─ is-arrayish@0.2.1
├─ is-core-module@2.15.0
├─ is-fullwidth-code-point@3.0.0
├─ is-generator-fn@2.1.0
├─ is-number@7.0.0
├─ is-stream@2.0.1
├─ isexe@2.0.0
├─ istanbul-lib-instrument@6.0.3
├─ istanbul-lib-source-maps@4.0.1
├─ istanbul-reports@3.1.7
├─ jake@10.9.2
├─ jest-changed-files@29.7.0
├─ jest-circus@29.7.0
├─ jest-cli@29.7.0
├─ jest-docblock@29.7.0
├─ jest-each@29.7.0
├─ jest-leak-detector@29.7.0
├─ jest-pnp-resolver@1.2.3
├─ jest-resolve-dependencies@29.7.0
├─ jest-util@29.7.0
├─ jest@29.7.0
├─ js-tokens@4.0.0
├─ js-yaml@3.14.1
├─ jsesc@2.5.2
├─ json-parse-even-better-errors@2.3.1
├─ kleur@3.0.3
├─ leven@3.1.0
├─ lines-and-columns@1.2.4
├─ locate-path@5.0.0
├─ lodash.memoize@4.1.2
├─ lru-cache@5.1.1
├─ make-dir@4.0.0
├─ make-error@1.3.6
├─ makeerror@1.0.12
├─ mimic-fn@2.1.0
├─ minimatch@3.1.2
├─ ms@2.1.2
├─ natural-compare@1.4.0
├─ node-int64@0.4.0
├─ node-releases@2.0.18
├─ normalize-path@3.0.0
├─ npm-run-path@4.0.1
├─ onetime@5.1.2
├─ p-locate@4.1.0
├─ p-try@2.2.0
├─ parse-json@5.2.0
├─ path-exists@4.0.0
├─ path-is-absolute@1.0.1
├─ path-key@3.1.1
├─ path-parse@1.0.7
├─ picocolors@1.0.1
├─ picomatch@2.3.1
├─ pirates@4.0.6
├─ pkg-dir@4.2.0
├─ pretty-format@29.7.0
├─ prompts@2.4.2
├─ pure-rand@6.1.0
├─ react-is@18.3.1
├─ require-directory@2.1.1
├─ resolve-cwd@3.0.0
├─ resolve.exports@2.0.2
├─ resolve@1.22.8
├─ shebang-command@2.0.0
├─ shebang-regex@3.0.0
├─ signal-exit@3.0.7
├─ sisteransi@1.0.5
├─ source-map-support@0.5.13
├─ source-map@0.6.1
├─ sprintf-js@1.0.3
├─ string-width@4.2.3
├─ strip-bom@4.0.0
├─ strip-final-newline@2.0.0
├─ strip-json-comments@3.1.1
├─ supports-preserve-symlinks-flag@1.0.0
├─ test-exclude@6.0.0
├─ tmpl@1.0.5
├─ to-fast-properties@2.0.0
├─ to-regex-range@5.0.1
├─ ts-jest@29.2.4
├─ type-detect@4.0.8
├─ type-fest@0.21.3
├─ update-browserslist-db@1.1.0
├─ v8-to-istanbul@9.3.0
├─ walker@1.0.8
├─ which@2.0.2
├─ wrap-ansi@7.0.0
├─ write-file-atomic@4.0.2
├─ y18n@5.0.8
├─ yallist@3.1.1
├─ yargs-parser@21.1.1
├─ yargs@17.7.2
└─ yocto-queue@0.1.0
Done in 38.70s.
node ➜ /workspace/tdd-typescript $ 
```

- `package.json` にスクリプト追加

```json
  "scripts": {
    "lint": "eslint \"{src,apps,libs,test}/**/*.ts\" --fix",
    "test": "jest"
  }
```

### 環境構築: フォルダ追加

フォルダ `src/`, `test/` を追加

### テスト駆動開発　

書籍に沿って、淡々と進める。Typescriptでのテスト駆動開発の進め方はおおよそOK。

[元に戻る](../../ReadMe.md)