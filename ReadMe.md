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

### 環境構築

サーバーは Docker (VSCode Devcontainer)を使う。

- プロジェクト作成: `nest new --skip-git server` パッケージマネージャーは npm を選択

```log
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
```log
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

### データベース構築

データベースは MySQL を利用。

- ログイン: 

~~~log
node ➜ /workspace $ mysql -u root -p -h mysql
Enter password: 
Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MySQL connection id is 9
Server version: 8.0.39 MySQL Community Server - GPL

Copyright (c) 2000, 2018, Oracle, MariaDB Corporation Ab and others.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

MySQL [(none)]> 
~~~

- データベース作成: 

~~~log
MySQL [(none)]> CREATE DATABASE tododb;
Query OK, 1 row affected (0.017 sec)

MySQL [(none)]> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| tododb             |
+--------------------+
5 rows in set (0.002 sec)

MySQL [(none)]> 
~~~

- ユーザー作成と権限付与: 

~~~log
MySQL [(none)]> CREATE USER todouser IDENTIFIED BY 'passowrd';
Query OK, 0 rows affected (0.028 sec)

MySQL [(none)]> GRANT ALL ON *.* TO 'todouser'@'%';
Query OK, 0 rows affected (0.013 sec)

MySQL [(none)]> ALTER USER todouser IDENTIFIED WITH mysql_native_password by 'password';
Query OK, 0 rows affected (0.009 sec)

MySQL [(none)]> 
~~~

- TypeORMモジュールインストール: `npm i @nestjs/typeorm typeorm mysql2`

- TypeOrm MySQL 接続確認: `app.module.ts` を修正後、`npm run start` を実行しエラーが出力されずに起動することを確認する

`app.module.ts`
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql',
      port: 3306,
      database: 'tododb',
      username: 'todouser',
      password: 'password',
      entities: [__dirname + '/**/*.model{.ts,.js}'],
      migrations: [__dirname + '/migration/**/*.js'],
      synchronize: true,
      logging: true,
    }),
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
```

```log
node ➜ /workspace/server $ npm run start

> server@0.0.1 start
> nest start

[Nest] 34939  - 08/05/2024, 3:07:07 AM     LOG [NestFactory] Starting Nest application...
[Nest] 34939  - 08/05/2024, 3:07:07 AM     LOG [InstanceLoader] AppModule dependencies initialized +347ms
[Nest] 34939  - 08/05/2024, 3:07:07 AM     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
query: SELECT VERSION() AS `version`
query: START TRANSACTION
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'tododb' AND `TABLE_NAME` = 'typeorm_metadata'
query: COMMIT
[Nest] 34939  - 08/05/2024, 3:07:07 AM     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +184ms
[Nest] 34939  - 08/05/2024, 3:07:07 AM     LOG [NestApplication] Nest application successfully started +19ms
^C
node ➜ /workspace/server $ 
```

### TypeORM によるデータベースマイグレーション

データベースマイグレーションとは「DB の変更内容をファイルに記録し、その内容を実行して DB のスキーマを更新していく手法」のこと。

参照：[【初心者向け🔰】DB の「スキーマ」「ORM」「マイグレーション」とは何か](https://qiita.com/to3izo/items/7b8d44021cb386de2ef7)　より

マイグレーションを利用しない場合、データベースの構成とプログラムの構成のアンマッチが発生する可能性があります。また、マイグレーションがあればテーブルを操作するSQLを作ってくれるので助かります。僕はできるだけ使いたいと思っている。NestJSはTypeORMを含んでいるので今回はTypeORMを使います。

今回インストールした TypeORM のバージョンは 0.3.20。どうやらバージョン 0.3系は色々変更があったようで慌てました。

参考：[TypeORM 0.3系のマイグレーション](https://qiita.com/Aurum64/items/f5962bd2a643447dbef9)

- エンティティ（テーブル定義）ファイル作成: `src/entities/` に書くテーブルのエンティティ定義を作成する。 `todos`, `tags`, `tagMaps` を作成した。

参考：[TypeORMを使用して、TypeScriptでMySQLのマイグレーション、接続を管理する](https://qiita.com/hedrall/items/4297ae0a92ce577b835f)

- データソースファイル作成: `src/config/ormconfig.ts` 

```typescript
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'mysql',
    port: 3306,
    database: 'tododb',
    username: 'todouser',
    password: 'Todos%8832',
    entities: ['src/entities/*.model{.ts,.js}'],
    migrations: ['migrations/*.ts'],
    synchronize: true,
    logging: true,
    subscribers: [],
});
```

- スクリプト登録: `package.json`に実行スクリプトを登録

```json
    "typeorm": "npx typeorm-ts-node-commonjs",
    "migration:create": "npx typeorm migration:create migrations/${npm_config_name}",
    "migration:generate": "npx typeorm-ts-node-commonjs migration:generate migrations/${npm_config_name} -d src/config/ormconfig.ts",
    "migration:run": "npx typeorm-ts-node-commonjs migration:run -d src/config/ormconfig.ts"
```

- スクリプト実行: 
    - `create`: 空のマイグレーションファイル作成
    - `generate`: entityからのマイグレーションファイル作成
    - `run`: マイグレーション実行

```log
node ➜ /workspace/server $ npm run migration:create --name=TodoMigration

> server@0.0.1 migration:create
> npx typeorm migration:create migrations/${npm_config_name}

Migration /workspace/server/migrations/1722839821400-TodoMigration.ts has been generated successfully.
node ➜ /workspace/server $ npm run migration:generate --name=TodoMigration

> server@0.0.1 migration:generate
> npx typeorm-ts-node-commonjs migration:generate migrations/${npm_config_name} -d src/config/ormconfig.ts

query: SELECT VERSION() AS `version`
query: SELECT DATABASE() AS `db_name`
query: SELECT `TABLE_SCHEMA`, `TABLE_NAME`, `TABLE_COMMENT` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA` = 'tododb' AND `TABLE_NAME` = 'todos' UNION SELECT `TABLE_SCHEMA`, `TABLE_NAME`, `TABLE_COMMENT` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA` = 'tododb' AND `TABLE_NAME` = 'tag_maps' UNION SELECT `TABLE_SCHEMA`, `TABLE_NAME`, `TABLE_COMMENT` FROM `INFORMATION_SCHEMA`.`TABLES` WHERE `TABLE_SCHEMA` = 'tododb' AND `TABLE_NAME` = 'tags'
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'tododb' AND `TABLE_NAME` = 'typeorm_metadata'
Migration /workspace/server/migrations/1722839828657-TodoMigration.ts has been generated successfully.
node ➜ /workspace/server $ npm run migration:run --name=TodoMigration

> server@0.0.1 migration:run
> npx typeorm-ts-node-commonjs migration:run -d src/config/ormconfig.ts

query: SELECT VERSION() AS `version`
query: SELECT * FROM `INFORMATION_SCHEMA`.`COLUMNS` WHERE `TABLE_SCHEMA` = 'tododb' AND `TABLE_NAME` = 'migrations'
query: CREATE TABLE `migrations` (`id` int NOT NULL AUTO_INCREMENT, `timestamp` bigint NOT NULL, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB
query: SELECT * FROM `tododb`.`migrations` `migrations` ORDER BY `id` DESC
0 migrations are already loaded in the database.
2 migrations were found in the source code.
2 migrations are new migrations must be executed.
query: START TRANSACTION
query: INSERT INTO `tododb`.`migrations`(`timestamp`, `name`) VALUES (?, ?) -- PARAMETERS: [1722839821400,"TodoMigration1722839821400"]
Migration TodoMigration1722839821400 has been  executed successfully.
query: CREATE TABLE `todos` (`id` varchar(255) NOT NULL, `title` varchar(255) NOT NULL, `todo` varchar(255) NOT NULL, `createDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `closeDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `isClose` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB
query: CREATE TABLE `tag_maps` (`id` varchar(255) NOT NULL, `todoId` varchar(255) NOT NULL, `tagId` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB
query: CREATE TABLE `tags` (`id` varchar(255) NOT NULL, `tag` varchar(255) NOT NULL, `createDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `deleteDate` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `isDelete` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB
query: INSERT INTO `tododb`.`migrations`(`timestamp`, `name`) VALUES (?, ?) -- PARAMETERS: [1722839828657,"TodoMigration1722839828657"]
Migration TodoMigration1722839828657 has been  executed successfully.
query: COMMIT
node ➜ /workspace/server $ 
```

- データベース確認: MySQL に作成されたテーブルを確認

```log
MySQL [(none)]> connect tododb;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Connection id:    29
Current database: tododb

MySQL [tododb]> show tables;
+------------------+
| Tables_in_tododb |
+------------------+
| migrations       |
| tag_maps         |
| tags             |
| todos            |
+------------------+
4 rows in set (0.002 sec)

MySQL [tododb]> DESCRIBE todos;
+------------+--------------+------+-----+----------------------+-------------------+
| Field      | Type         | Null | Key | Default              | Extra             |
+------------+--------------+------+-----+----------------------+-------------------+
| id         | varchar(255) | NO   | PRI | NULL                 |                   |
| title      | varchar(255) | NO   |     | NULL                 |                   |
| todo       | varchar(255) | NO   |     | NULL                 |                   |
| createDate | datetime(6)  | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
| closeDate  | datetime(6)  | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
| isClose    | tinyint      | NO   |     | NULL                 |                   |
+------------+--------------+------+-----+----------------------+-------------------+
6 rows in set (0.003 sec)

MySQL [tododb]> DESCRIBE tabs;
ERROR 1146 (42S02): Table 'tododb.tabs' doesn't exist
MySQL [tododb]> DESCRIBE tags;
+------------+--------------+------+-----+----------------------+-------------------+
| Field      | Type         | Null | Key | Default              | Extra             |
+------------+--------------+------+-----+----------------------+-------------------+
| id         | varchar(255) | NO   | PRI | NULL                 |                   |
| tag        | varchar(255) | NO   |     | NULL                 |                   |
| createDate | datetime(6)  | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
| deleteDate | datetime(6)  | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED |
| isDelete   | tinyint      | NO   |     | NULL                 |                   |
+------------+--------------+------+-----+----------------------+-------------------+
5 rows in set (0.004 sec)

MySQL [tododb]> DESCRIBE tag_maps;
+--------+--------------+------+-----+---------+-------+
| Field  | Type         | Null | Key | Default | Extra |
+--------+--------------+------+-----+---------+-------+
| id     | varchar(255) | NO   | PRI | NULL    |       |
| todoId | varchar(255) | NO   |     | NULL    |       |
| tagId  | varchar(255) | NO   |     | NULL    |       |
+--------+--------------+------+-----+---------+-------+
3 rows in set (0.002 sec)

MySQL [tododb]> 
```
