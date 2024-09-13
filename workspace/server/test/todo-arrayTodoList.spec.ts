import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Todo } from "../src/dto/Todo";
import { TodoList } from "../src/modules/array/TodoList";

test("create TodoList object", () => {
    const todoList = new TodoList();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    //todo: string, box: string, tag: string, expirationDate: Date
    const todo1: Todo = todoList.createTodo("テスト駆動開発を読む", "inbox", "読書", expirationDate);

    expect(todoList.getTodo(todo1.id).todo).toBe(todo1.todo);
    expect(todoList.getTodo(todo1.id).box).toBe(todo1.box);
    expect(todoList.getTodo(todo1.id).tags).toBe(todo1.tags);
    expect(todoList.getTodo(todo1.id).expirationDate).toBe(todo1.expirationDate);

    const todo2: Todo = todoList.createTodo("映画「ラストマイル」を観る", "Someday", "映画", null);

    expect(todoList.getTodo(todo2.id).todo).toBe(todo2.todo);
    expect(todoList.getTodo(todo2.id).box).toBe(todo2.box);
    expect(todoList.getTodo(todo2.id).tags).toBe(todo2.tags);
    expect(todoList.getTodo(todo2.id).expirationDate).toBeUndefined();

    const todo3: Todo = todoList.createTodo("ラーメンを食べる", "inbox", "食事", undefined);

    expect(todoList.getTodo(todo3.id).todo).toBe(todo3.todo);
    expect(todoList.getTodo(todo3.id).box).toBe(todo3.box);
    expect(todoList.getTodo(todo3.id).tags).toBe(todo3.tags);
    expect(todoList.getTodo(todo3.id).expirationDate).toBeUndefined();

    const todo41: Todo = todoList.createTodo("", "inbox", "食事", undefined);
    expect(todo41).toBeUndefined();
    const todo42: Todo = todoList.createTodo(null, "inbox", "食事", undefined);
    expect(todo42).toBeUndefined();
    const todo43: Todo = todoList.createTodo(undefined, "inbox", "食事", undefined);
    expect(todo43).toBeUndefined();
    const todo44: Todo = todoList.createTodo("   ", "inbox", "食事", undefined);
    expect(todo44).toBeUndefined();

    const todo51: Todo = todoList.createTodo("毎日散歩する", "", "健康", undefined);
    expect(todo51).toBeUndefined();
    const todo52: Todo = todoList.createTodo("毎日散歩する", null, "健康", undefined);
    expect(todo52).toBeUndefined();
    const todo53: Todo = todoList.createTodo("毎日散歩する", undefined, "健康", undefined);
    expect(todo53).toBeUndefined();
    const todo54: Todo = todoList.createTodo("毎日散歩する", "      ", "健康", undefined);
    expect(todo54).toBeUndefined();

    const todo61: Todo = todoList.createTodo("毎日散歩する", "inbox", "", undefined);
    expect(todoList.getTodo(todo61.id).todo).toBe(todo61.todo);
    expect(todoList.getTodo(todo61.id).tags.length).toBe(0);
    const todo62: Todo = todoList.createTodo("毎日散歩する", "inbox", "     ", undefined);
    expect(todoList.getTodo(todo62.id).todo).toBe(todo62.todo);
    expect(todoList.getTodo(todo62.id).tags.length).toBe(0);
    const todo63: Todo = todoList.createTodo("毎日散歩する", "inbox", null, undefined);
    expect(todoList.getTodo(todo63.id).todo).toBe(todo63.todo);
    expect(todoList.getTodo(todo63.id).tags.length).toBe(0);
    const todo64: Todo = todoList.createTodo("毎日散歩する", "inbox", undefined, undefined);
    expect(todoList.getTodo(todo64.id).todo).toBe(todo64.todo);
    expect(todoList.getTodo(todo64.id).tags.length).toBe(0);

    expect(todoList.getTodo(randomUUID())).toBeUndefined();
})
test("update Todo in Todolist", () => {
    const testDate: Date = new Date();
    const todoList = new TodoList();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    //todo: string, box: string, tag: string, expirationDate: Date
    const todo1: Todo = todoList.createTodo("テスト駆動開発を読む", "inbox", "読書", expirationDate);

    expect(todoList.getTodo(todo1.id).todo).toBe(todo1.todo);
    expect(todoList.getTodo(todo1.id).box).toBe(todo1.box);
    expect(todoList.getTodo(todo1.id).tags).toBe(todo1.tags);
    expect(todoList.getTodo(todo1.id).expirationDate).toBe(todo1.expirationDate);

    todo1.todo = "映画「ラストマイル」を観る";
    todo1.box = "Someday";
    todo1.tags.pop();
    todo1.tags.push("映画");
    todo1.expirationDate.setDate(todo1.expirationDate.getDate() + 30);
    const todo1B: Todo = todoList.updateTodo(todo1.id, todo1.todo, todo1.box, todo1.tags, todo1.expirationDate);

    expect(todo1B.todo).toBe(todo1.todo);
    expect(todo1B.box).toBe(todo1.box);
    expect(todo1B.tags).toBe(todo1.tags);
    expect(todo1B.expirationDate).toBe(todo1.expirationDate);
    expect(todo1B.updateDate >= testDate).toBe(true);
    expect(todo1B.id).toBe(todo1.id);
    expect(todo1B.childTodos).toBe(todo1.childTodos);
    expect(todo1B.createDate).toBe(todo1.createDate);
    expect(todoList.getTodo(todo1.id).todo).toBe(todo1.todo);
    expect(todoList.getTodo(todo1.id).box).toBe(todo1.box);
    expect(todoList.getTodo(todo1.id).tags).toBe(todo1.tags);
    expect(todoList.getTodo(todo1.id).expirationDate).toBe(todo1.expirationDate);
    expect(todoList.getTodo(todo1.id).createDate).toBe(todo1.createDate);
    expect(todoList.getTodo(todo1.id).updateDate >= testDate).toBe(true);
    expect(todoList.getTodo(todo1.id).id).toBe(todo1.id);
    expect(todoList.getTodo(todo1.id).childTodos).toBe(todo1.childTodos);
    expect(todoList.getTodo(todo1.id).createDate).toBe(todo1.createDate);

    todo1.tags.pop();
    const todo1C: Todo = todoList.updateTodo(todo1.id, todo1.todo, todo1.box, todo1.tags, todo1.expirationDate);
    expect(todoList.getTodo(todo1.id).tags.length).toBe(0);
    expect(todo1C.tags.length).toBe(0);

    expect(todoList.updateTodo(randomUUID(), todo1.todo, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo("", todo1.todo, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo("    ", todo1.todo, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(null, todo1.todo, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(undefined, todo1.todo, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();

    expect(todoList.updateTodo(todo1.id, "", todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, "            ", todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, null, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, undefined, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();

    expect(todoList.updateTodo(todo1.id, todo1.todo, "", todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, todo1.todo, "              ", todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, todo1.todo, null, todo1.tags, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, todo1.todo, undefined, todo1.tags, todo1.expirationDate)).toBeUndefined();

    expect(todoList.updateTodo(todo1.id, todo1.todo, todo1.box, null, todo1.expirationDate)).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, todo1.todo, todo1.box, undefined, todo1.expirationDate)).toBeUndefined();

    expect(todoList.updateTodo(todo1.id, todo1.todo, todo1.box, todo1.tags, null).expirationDate).toBeUndefined();
    expect(todoList.updateTodo(todo1.id, todo1.todo, todo1.box, todo1.tags, undefined).expirationDate).toBeUndefined();

    //expect(todoList.updateTodo(todo1.id, todo1.todo, todo1.box, todo1.tags, todo1.expirationDate)).toBeUndefined();
})

test("delete Todo in TodoList", () => {
    const todoList = new TodoList();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const todo1: Todo = todoList.createTodo("テスト駆動開発を読む", "inbox", "読書", expirationDate);

    const todo2: Todo = todoList.createTodo("映画「ラストマイル」を観る", "Someday", "映画", null);

    const todo3: Todo = todoList.createTodo("ラーメンを食べる", "inbox", "食事", undefined);

    expect(todoList.deleteTodo(todo1.id)).toBeTruthy();
    expect(todoList.deleteTodo(randomUUID())).toBeFalsy();
    expect(todoList.deleteTodo(todo1.id)).toBeFalsy();
    expect(todoList.getTodo(todo1.id)).toBeUndefined();
});

test("list Todo", () => {
    const todoList = new TodoList();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const todo1: Todo = todoList.createTodo("テスト駆動開発を読む", "inbox", "読書", expirationDate);

    const todo2: Todo = todoList.createTodo("映画「ラストマイル」を観る", "Someday", "映画", null);

    const todo3: Todo = todoList.createTodo("ラーメンを食べる", "inbox", "食事", undefined);

    const todoLists: Todo[] = todoList.getTodos();
    expect(todoLists.length).toBe(3);
    expect(todoLists[2].todo).toBe("ラーメンを食べる");

});