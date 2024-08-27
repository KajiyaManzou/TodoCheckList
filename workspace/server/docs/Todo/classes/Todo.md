[**server**](../../README.md) • **Docs**

***

[server](../../README.md) / [Todo](../README.md) / Todo

# Class: Todo

Todoクラス

## Constructors

### new Todo()

> **new Todo**(`todo`): [`Todo`](Todo.md)

コンストラクタ

#### Parameters

• **todo**: `string`

Todo情報

#### Returns

[`Todo`](Todo.md)

#### Defined in

Todo.ts:22

### new Todo()

> **new Todo**(`todo`, `todoClass`?): [`Todo`](Todo.md)

#### Parameters

• **todo**: `string`

• **todoClass?**: `string`

#### Returns

[`Todo`](Todo.md)

#### Defined in

Todo.ts:23

### new Todo()

> **new Todo**(`todo`, `todoClass`?, `tag`?): [`Todo`](Todo.md)

#### Parameters

• **todo**: `string`

• **todoClass?**: `string`

• **tag?**: `string`

#### Returns

[`Todo`](Todo.md)

#### Defined in

Todo.ts:24

## Accessors

### createDate

> `get` **createDate**(): `Date`

作成日付 アクセサ

#### Returns

`Date`

開始日付

#### Defined in

Todo.ts:62

***

### id

> `get` **id**(): `string`

TodoID アクセサ

#### Returns

`string`

TodoID

#### Defined in

Todo.ts:54

***

### isClose

> `get` **isClose**(): `boolean`

完了/未完フラグ サクセサ

#### Returns

`boolean`

true: 完了、false: 未完

#### Defined in

Todo.ts:46

***

### todo

> `get` **todo**(): `string`

Todo情報 アクセサ

#### Returns

`string`

Todo情報

#### Defined in

Todo.ts:38

## Methods

### close()

> **close**(): `void`

Todoオブジェクト完了メソッド

#### Returns

`void`

#### Example

```typescript
const todo1:Todo = new odo("テスト駆動開発を読む");
todo1.close();
```

#### Defined in

Todo.ts:112

***

### import()

> **import**(`todoObj`): `void`

Todoオブジェクト取り込みメソッド（todoObj の情報を自身に取り込む）

#### Parameters

• **todoObj**: [`Todo`](Todo.md)

取り込む Todo オブジェクト

#### Returns

`void`

#### Example

```typescript
const todo1: Todo = new Todo("テスト駆動開発を読む");
...
const todo2: Todo = new Todo("dummy");
todo2.import(todo1);
console.log(todo2.todo);  // テスト駆動開発を読む
```

#### Defined in

Todo.ts:93

***

### update()

> **update**(`todo`): [`Todo`](Todo.md)

Todo更新メソッド  オブジェクトを更新する

#### Parameters

• **todo**: `string`

Todo情報（null 有）

#### Returns

[`Todo`](Todo.md)

更新後Todo、todoがnull/emptyの場合はundefinedを返す

#### Example

```typescript
todo.update("変更したTodo");
```

#### Defined in

Todo.ts:74
