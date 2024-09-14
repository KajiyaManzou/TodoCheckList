import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Todo } from "../src/dto/Todo";
import { Box } from "../src/dto/Box";
import { Tag } from "../src/dto/Tag";
import { Todos } from "../src/modules/array/Todos";

test("create Todos", () => {
    const todos: Todos = new Todos();
    const todoList: Todo[] = todos.getTodos();
    expect(todoList.length).toBe(0);
    const boxList: Box[] = todos.getBoxes();
    expect(boxList.length).toBe(1);
    const tagList: Tag[] = todos.getTags();
    expect(tagList.length).toBe(0);
});

test("add todo", () => {
    const todos: Todos = new Todos();
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);
    const todo1: Todo = todos.addTodo("テスト駆動開発を読む");
    expect(todo1).not.toBeUndefined();
    const todo2: Todo = todos.addTodo("リファクタリング第２版を読む", "inbox");
    expect(todo2).not.toBeUndefined();
    const todo3: Todo = todos.addTodo("コスモスを読む", "inbox", "読書");
    expect(todo3).not.toBeUndefined();
    const todo4: Todo = todos.addTodo("女が死ぬ", "inbox", "読書", expirationDate);
    expect(todo4).not.toBeUndefined();
    const todoList: Todo[] = todos.getTodos();
    expect(todoList.length).toBe(4);
});
