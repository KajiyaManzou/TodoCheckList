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

- ブラウザで `http://localhost:3000` を開いて Hello World! を表示すればOK.
![初期画面](./docs/initialView.png)