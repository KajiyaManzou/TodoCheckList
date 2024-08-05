# TodoCheckList アプリ

自分用に Todo + CHeckList アプリがあるといいなと言う事でを作る事にした。
独学用に NestJS(nodeJs + Typescript) + DB(MySQL + Rdis) & Flutter で作ってみることにした。

## システム構成

### 開発環境

Mac にて。エディタは VSCode。

### サーバーサイド

NestJS が面白そうなので採用。Zenn にある [NestJSの本一覧](https://zenn.dev/topics/nestjs?tab=books)を参考に。

### クライアントサイド

採用試験で落選した時に、Flutterを知った。面白そうなのでクライアントはFlutterで。情報収集はこれから。

## サーバーサイド

サーバーは Docker (VSCode Devcontainer)を使う。

- プロジェクト作成: `nest new --skip-git server` パッケージマネージャーは npm を選択

```
node ➜ /workspace $ nest new --skip-git server
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
CREATE server/.eslintrc.js (663 bytes)
CREATE server/.prettierrc (51 bytes)
CREATE server/README.md (3340 bytes)
CREATE server/nest-cli.json (171 bytes)
CREATE server/package.json (1945 bytes)
CREATE server/tsconfig.build.json (97 bytes)
CREATE server/tsconfig.json (546 bytes)
CREATE server/src/app.controller.ts (274 bytes)
CREATE server/src/app.module.ts (249 bytes)
CREATE server/src/app.service.ts (142 bytes)
CREATE server/src/main.ts (208 bytes)
CREATE server/src/app.controller.spec.ts (617 bytes)
CREATE server/test/jest-e2e.json (183 bytes)
CREATE server/test/app.e2e-spec.ts (630 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project server
👉  Get started with the following commands:

$ cd server
$ npm run start

                                         
                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.
                                         
                                         
               🍷  Donate: https://opencollective.com/nest
                                         
node ➜ /workspace $ cd server
node ➜ /workspace/server $ npm run start

> server@0.0.1 start
> nest start

[Nest] 2540  - 08/04/2024, 10:26:26 AM     LOG [NestFactory] Starting Nest application...
[Nest] 2540  - 08/04/2024, 10:26:26 AM     LOG [InstanceLoader] AppModule dependencies initialized +45ms
[Nest] 2540  - 08/04/2024, 10:26:26 AM     LOG [RoutesResolver] AppController {/}: +34ms
[Nest] 2540  - 08/04/2024, 10:26:26 AM     LOG [RouterExplorer] Mapped {/, GET} route +12ms
[Nest] 2540  - 08/04/2024, 10:26:26 AM     LOG [NestApplication] Nest application successfully started +9ms
^C
node ➜ /workspace/server $ 
```

- サーバー起動確認: ブラウザで `http://localhost:3000` を開いて Hello World! を表示すればOK.
![初期画面](./docs/initialView.png)

- フォルダ構成: 初心者なので、[簡易TODOウェブアプリの開発-Next.js×NestJS(REST・TypeORM)](https://zenn.dev/engineerhikaru/books/0a615c1248a2ea) をそのまま使わせていただきます。dto フォルダは entities に変更、マイグレーション用フォルダ migrations を追加。

```
./
├── dist/
├── migrations/
├── node_modules/
├── src/
│   ├── config/
│   ├── constants/
│   ├── controllers/
│   ├── entities/
│   ├── models/
│   ├── modules/
│   ├── services/
│   ├── app.controller.spec.ts
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts
│   └── jest-e2e.json
├── .eslintrc.js
├── .prettierrc
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json
```

- セットアップ: こちらも、「[簡易TODOウェブアプリの開発-Next.js×NestJS(REST・TypeORM)](https://zenn.dev/engineerhikaru/books/0a615c1248a2ea) 」をそのまま使わせていただきます。

  - コード整形(ESLint,Prettier)の設定
    - ~~`.eslintrc.js` を `.eslintrc.json` に変更: 今後 `.eslintrc.js` は廃止されていくようなのですが、移行先は `.eslint.config.js` らしいのですが、その件は後で。「[ESLint を eslintrc から Flat Config に移行する、ハマりポイントを添えて。](https://qiita.com/Shilaca/items/c494e4dc6b536a5231de)」~~
    - `.eslintrc.js` を `eslint.config.mjs` に変更：　今回構築した環境では設定ファイルが新版に変わっていた。コマンド `npm create @eslint/config` で作成。実行は `eslint ソースファイル名` でOK
    - `.prettierrc` を `.prettierrc.json` に変更: `rc` ファイルより `json` を優先するらしい。「[Prettier Configuration File](https://prettier.io/docs/en/configuration.html)」
    - `workspace` 直下に `.vscode` フォルダを作成し、その直下に`settings.json` を作成: VSCode用設定ファイル

`npm create @eslint/config` を実行
```
node ➜ /workspace/server $  npm create @eslint/config

> server@0.0.1 npx
> create-config

@eslint/create-config: v1.2.0

✔ How would you like to use ESLint? · syntax
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · none
✔ Does your project use TypeScript? · typescript
✔ Where does your code run? · browser
The config that you've selected requires the following dependencies:

eslint@9.x, globals, typescript-eslint
✔ Would you like to install them now? · No / Yes
✔ Which package manager do you want to use? · npm
☕️Installing...

...

found 0 vulnerabilities
A config file was generated, but the config file itself may not follow your linting rules.
Note that some plugins currently do not support ESLint v9 yet.
You may need to use '--force' when installing, or add the following to your package.json: 
"overrides": { "eslint": "^9.8.0" } 
node ➜ /workspace/server $ 
```

メッセージにあるように `package.json` に `"overrides": { "eslint": "^9.8.0" } ` を追加

eslint.config.mjs
~~~javascript
import globals from "globals";
import tseslint from "typescript-eslint";


export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser }},
  ...tseslint.configs.recommended,
];
~~~

.prettierrc.json
~~~json
{
  "printWidth": 120,
  "trailingComma": "all",
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "endOfLine": "lf",
  "parser": "typescript"
}
~~~

.vscode/settings.json
~~~json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
~~~

- インポートのエイリアス化: ファイルをインポートする時の可読性をよくするためにインポートのエイリアス化をする

tsconfig.json
~~~json
- "noFallthroughCasesInSwitch": false
+ "noFallthroughCasesInSwitch": false,
+ "paths": {
+   "@/*": ["./src/*"]
+ }
}
~~~

