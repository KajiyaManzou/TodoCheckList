[**server**](../../README.md) • **Docs**

***

[server](../../README.md) / [TodoList](../README.md) / TodoList

# Class: TodoList

TodoListクラス Todo集合をまとめる

## Constructors

### new TodoList()

> **new TodoList**(): [`TodoList`](TodoList.md)

コンストラクタ

#### Returns

[`TodoList`](TodoList.md)

#### Defined in

TodoList.ts:15

## Methods

### add()

> **add**(`todo`): [`Todo`](../../Todo/classes/Todo.md)

Todo追加メソッド TodoListにTodoを追加する

#### Parameters

• **todo**: [`Todo`](../../Todo/classes/Todo.md)

追加するTodoオブジェクト

#### Returns

[`Todo`](../../Todo/classes/Todo.md)

追加したTodoオブジェクト。追加に失敗した場合はundefinedを返す。

#### Example

```ts

```

#### Defined in

TodoList.ts:31

***

### delete()

> **delete**(`queryid`): `boolean`

Todo削除メソッド IDをキーにTodoを削除する

#### Parameters

• **queryid**: `string`

削除するTodoのTodoID

#### Returns

`boolean`

true: 削除済、false: 削除失敗

#### Example

```ts

```

#### Defined in

TodoList.ts:67

***

### get()

> **get**(`queryid`): [`Todo`](../../Todo/classes/Todo.md)

Todo取出しメソッド IDをキーにTodoを取り出す

#### Parameters

• **queryid**: `string`

取り出すTodoID

#### Returns

[`Todo`](../../Todo/classes/Todo.md)

取出したTodoオブジェクト。取出しに失敗した場合はundefinedを返す。

#### Example

```ts

```

#### Defined in

TodoList.ts:41

***

### update()

> **update**(`queryid`, `todo`): [`Todo`](../../Todo/classes/Todo.md)

Todo更新メソッド IDをキーにTodoを更新する

#### Parameters

• **queryid**: `string`

更新するTodoのTodoID

• **todo**: `string`

更新するTodo情報

#### Returns

[`Todo`](../../Todo/classes/Todo.md)

更新したTodoオブジェクト。取出しに失敗した場合はundefinedを返す。

#### Example

```ts

```

#### Defined in

TodoList.ts:55
