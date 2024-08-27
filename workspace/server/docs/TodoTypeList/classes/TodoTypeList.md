[**server**](../../README.md) • **Docs**

***

[server](../../README.md) / [TodoTypeList](../README.md) / TodoTypeList

# Class: TodoTypeList

TodoTypeListクラス
 TodoTypeList

## Constructors

### new TodoTypeList()

> **new TodoTypeList**(): [`TodoTypeList`](TodoTypeList.md)

コンストラクタ

#### Returns

[`TodoTypeList`](TodoTypeList.md)

#### Example

```Typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
```

#### Defined in

TodoTypeList.ts:17

## Methods

### add()

> **add**(`todoType`): [`TodoType`](../../TodoType/classes/TodoType.md)

TodoTypeオブジェクトを追加するメソッド

#### Parameters

• **todoType**: [`TodoType`](../../TodoType/classes/TodoType.md)

追加するTodoTypeオブジェクト

#### Returns

[`TodoType`](../../TodoType/classes/TodoType.md)

追加したTodoTypeオブジェクト、TodoTypeのType情報が既存のTodoTypeと重複した場合はundefinedを返す

#### Example

```typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
const todoType: TodoType = new TodoType("Today");
todoTypeList.add(todoType);
console.log(todoTypeList.get(todoType.id));  // Today
```

#### Defined in

TodoTypeList.ts:63

***

### delete()

> **delete**(`queryid`): `boolean`

TodoTypeオブジェクト削除メソッド queryidをキーにTodoTypeオブジェクトを削除する

#### Parameters

• **queryid**: `string`

削除するTodoTypeID

#### Returns

`boolean`

true: 削除済、false: 削除失敗

#### Example

```typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
const todoType: TodoType = new TodoType("Today");
todoTypeList.add(todoType);
todoTypeList.delete(todoType.id);
console.log(todoTypeList.get(todoType.id));  // undefined
```

#### Defined in

TodoTypeList.ts:104

***

### get()

> **get**(`queryid`?): [`TodoType`](../../TodoType/classes/TodoType.md)

標準TodoTypeを返すメソッド

#### Parameters

• **queryid?**: `string`

取り出すTodoTypeID

#### Returns

[`TodoType`](../../TodoType/classes/TodoType.md)

1. TodoTypeIDをキーに取出したTodoTypeオブジェクト。TodoTypeIDがない場合はundefinedを返す
2. 取り出すTodoTypeIDの指定がない場合：標準TodoTypeオブジェクト（inbox）

#### Example

```typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
const todoType: TodoType = new TodoType("Today");
todoTypeList.add(todoType);
console.log(todoTypeList.get(todoType.id));  // Today
```
```typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
const todoType: TodoType = todoTypeList.get();
console.log(todoType.type);  // inbox
```

#### Defined in

TodoTypeList.ts:40

***

### list()

> **list**(): [`TodoType`](../../TodoType/classes/TodoType.md)[]

TodoType一覧を返すメソッド

#### Returns

[`TodoType`](../../TodoType/classes/TodoType.md)[]

TodoType[]

#### Example

```typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
const todoType: TodoType = new TodoType("Today");
todoTypeList.add(todoType);
console.log(todoTypeList.list());  // TodoTypeオブジェクト "inbox", "Today"
```

#### Defined in

TodoTypeList.ts:121

***

### update()

> **update**(`queryid`, `todoTypeOfTyoe`): [`TodoType`](../../TodoType/classes/TodoType.md)

TodoTypeオブジェクトを更新するメソッド

#### Parameters

• **queryid**: `string`

更新するTodoTypeのTodoTypeId

• **todoTypeOfTyoe**: `string`

更新するTodoType情報

#### Returns

[`TodoType`](../../TodoType/classes/TodoType.md)

更新済TodoTypeオブジェクト、queryidが見つからない場合、todoTypeがnull/emptyの場合はundefinedを返す
todoTypeOfTyoeが既存のTodoTypeと重複した場合はundefinedを返す

#### Example

```typescript
const todoTypeList: TodoTypeList = new TodoTypeList();
const todoType: TodoType = new TodoType("Today");
todoTypeList.add(todoType);
todoTypeList.update(todoType.id, "This Week");
console.log(todoTypeList.get(todoType.id));  // This Week
```

#### Defined in

TodoTypeList.ts:83
