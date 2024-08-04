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

- プロジェクト作成: `nest new --skip-git todoserver` パッケージマネージャーは npm を選択

```
node ➜ /workspace $ nest new --skip-git todoserver
⚡  We will scaffold your app in a few seconds..

? Which package manager would you ❤️  to use? npm
CREATE todoserver/.eslintrc.js (663 bytes)
CREATE todoserver/.prettierrc (51 bytes)
CREATE todoserver/README.md (3340 bytes)
CREATE todoserver/nest-cli.json (171 bytes)
CREATE todoserver/package.json (1949 bytes)
CREATE todoserver/tsconfig.build.json (97 bytes)
CREATE todoserver/tsconfig.json (546 bytes)
CREATE todoserver/src/app.controller.ts (274 bytes)
CREATE todoserver/src/app.module.ts (249 bytes)
CREATE todoserver/src/app.service.ts (142 bytes)
CREATE todoserver/src/main.ts (208 bytes)
CREATE todoserver/src/app.controller.spec.ts (617 bytes)
CREATE todoserver/test/jest-e2e.json (183 bytes)
CREATE todoserver/test/app.e2e-spec.ts (630 bytes)

✔ Installation in progress... ☕

🚀  Successfully created project todoserver
👉  Get started with the following commands:

$ cd todoserver
$ npm run start

                                         
                          Thanks for installing Nest 🙏
                 Please consider donating to our open collective
                        to help us maintain this package.
                                         
                                         
               🍷  Donate: https://opencollective.com/nest
                                         
node ➜ /workspace $ cd todoserver/
node ➜ /workspace/todoserver (master) $ npm run start

> todoserver@0.0.1 start
> nest start

[Nest] 6847  - 08/04/2024, 5:01:12 AM     LOG [NestFactory] Starting Nest application...
[Nest] 6847  - 08/04/2024, 5:01:12 AM     LOG [InstanceLoader] AppModule dependencies initialized +12ms
[Nest] 6847  - 08/04/2024, 5:01:12 AM     LOG [RoutesResolver] AppController {/}: +13ms
[Nest] 6847  - 08/04/2024, 5:01:12 AM     LOG [RouterExplorer] Mapped {/, GET} route +7ms
[Nest] 6847  - 08/04/2024, 5:01:12 AM     LOG [NestApplication] Nest application successfully started +5ms
^C
node ➜ /workspace/todoserver (master) $ 
```

- ブラウザで `http://localhost:3000` を開いて Hello World! を表示すればOK.
![初期画面](./docs/initialView.png)