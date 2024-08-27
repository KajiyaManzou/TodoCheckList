[**server**](../../README.md) • **Docs**

***

[server](../../README.md) / [TodoType](../README.md) / TodoType

# Class: TodoType

TodoType クラス Todoの区分/所属/分類分けする

## Constructors

### new TodoType()

> **new TodoType**(`todoType`?): [`TodoType`](TodoType.md)

コンストラクタ

#### Parameters

• **todoType?**: `string`

区分名

#### Returns

[`TodoType`](TodoType.md)

#### Example

```typescript
const todoType: TodoType = new TodoType("Today");
console.log(todoType.type);  // Today
```

#### Defined in

TodoType.ts:21

## Accessors

### createDate

> `get` **createDate**(): `Date`

作成日付アクセサ

#### Returns

`Date`

作成日付

#### Defined in

TodoType.ts:39

***

### id

> `get` **id**(): `string`

Todo区分ID アクセサ

#### Returns

`string`

Todo区分ID

#### Defined in

TodoType.ts:46

***

### type

> `get` **type**(): `string`

区分名アクセサ

#### Returns

`string`

区分名

#### Defined in

TodoType.ts:32

## Methods

### import()

> **import**(`todoType`): `void`

TodoTypeオブジェクト取り込みメソッド（todoTypeObj の情報を自身に取り込む）

#### Parameters

• **todoType**: [`TodoType`](TodoType.md)

取り込むTodoTypeオブジェクト

#### Returns

`void`

#### Example

```typescript
const todoType1: TodoType = new TodoTyoe("Today");
...
const todoType2: TodoType = new TodoType("dummy");
todoType2.import(todoType1);
console.log(todoType2.type);  // Today
```

#### Defined in

TodoType.ts:82

***

### update()

> **update**(`todoType`): [`TodoType`](TodoType.md)

TodoType更新メソッド

#### Parameters

• **todoType**: `string`

更新するTodoType情報

#### Returns

[`TodoType`](TodoType.md)

更新後TodoType、todoTypeがnull/emptyの場合はundefinedを返す

#### Example

```typescript
const todoType: TodoType = new TodoType("Today");
console.log(todoType.type);  // Today
todoType.update("this week");
console.log(todoType.type);  // this week
todoType.update("  ");
console.log(todoType.type);  // this week
```

#### Defined in

TodoType.ts:63
