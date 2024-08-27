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

追加したTodoオブジェクト、追加に失敗した場合はundefinedを返す

#### Example

```typescript
const todoList1: TodoList = new TodoList("今日のTodo");
const todo1: Todo = new Todo("テスト駆動開発を読む");
todoList1.add(todo1);
```

#### Defined in

TodoList.ts:36

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

```typescript
const todoList1: TodoList = new TodoList("今日のTodo");
const todo1: Todo = new Todo("テスト駆動開発を読む");
todoList1.add(todo1);
todoList1.delete(todo1.id);
console.log(todoList1.get(todo1.id).todo);  // undefined
```

#### Defined in

TodoList.ts:94

***

### get()

> **get**(`queryid`): [`Todo`](../../Todo/classes/Todo.md)

Todo取出しメソッド IDをキーにTodoを取り出す

#### Parameters

• **queryid**: `string`

取り出すTodoID

#### Returns

[`Todo`](../../Todo/classes/Todo.md)

取出したTodoオブジェクト、取出しに失敗した場合はundefinedを返す

#### Example

```typescript
const todoList1: TodoList = new TodoList("今日のTodo");
const todo1: Todo = new Todo("テスト駆動開発を読む");
todoList1.add(todo1);
console.log(todoList1.get(todo1.id).todo);  // テスト駆動開発を読む
```

#### Defined in

TodoList.ts:52

***

### list()

> **list**(): [`Todo`](../../Todo/classes/Todo.md)[]

Todoオブジェクト一覧を返すメソッド

#### Returns

[`Todo`](../../Todo/classes/Todo.md)[]

Todo[]

#### Example

```typescript
const todoList: TodoList = new TodoList();
todoList.add(new Todo("Todo1"));
todoList.add(new Todo("Todo2"));
console.log(todoList.list());  // Todoオブジェクト "Todo1", "Todo2"
```

#### Defined in

TodoList.ts:112

***

### update()

> **update**(`queryid`, `todo`): [`Todo`](../../Todo/classes/Todo.md)

Todo更新メソッド IDをキーにTodoを更新する

#### Parameters

• **queryid**: `string`

更新するTodoのTodoID

• **todo**: `string`

更新するTodo情報（null 有）

#### Returns

[`Todo`](../../Todo/classes/Todo.md)

更新したTodoオブジェクト、取出しに失敗した場合はundefinedを返す

#### Example

```typescript
const todoList1: TodoList = new TodoList("今日のTodo");
const todo1: Todo = new Todo("テスト駆動開発を読む");
todoList1.add(todo1);
todoLiat1.update(todo1.id, "エリック・エヴァンスのドメイン駆動設計を読む");
console.log(todoList1.get(todo1.id).todo);  // エリック・エヴァンスのドメイン駆動設計を読む
```

#### Defined in

TodoList.ts:73
