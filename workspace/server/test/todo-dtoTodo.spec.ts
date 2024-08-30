import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Todo } from "../src/dto/Todo";

test("create Todo object", () => {
  const todoID: string = randomUUID();
  const todo = "TDD テスト駆動開発を読む";
  const type = "inbox";
  const tag = "読書";
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const todo1 = new Todo(todoID, todo, type, tag, expirationDate);
  expect(todo1.id).toBe(todoID);
  expect(todo1.todo).toBe(todo);
  expect(todo1.type).toBe(type);
  expect(todo1.tags[0]).toBe(tag);
  expect(todo1.expirationDate).toBe(expirationDate);
  expect(todo1.isClose).toBeFalsy();
  expect(todo1.createDate.getDate()).toBe(new Date().getDate());
  expect(todo1.childTodos.length).toBe(0);
  expect(todo1.updateDate).toBeNull();
});

test("create Todo object and update", () => {
  const todoID: string = randomUUID();
  const todo = "TDD テスト駆動開発を読む";
  const type = "inbox";
  const tag = "読書";
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const todo1 = new Todo(todoID, todo, type, tag, expirationDate);
  const todoID2: string = randomUUID();
  const todo2 = "ツーリングに行く";
  const type2 = "week";
  const tag2 = "バイク";
  const createDate2 = new Date();
  createDate2.setDate(createDate2.getDate() - 1);
  const expirationDate2 = new Date();
  expirationDate2.setDate(expirationDate2.getDate() + 7);
  const updateDate2 = new Date();
  todo1.id = todoID2;
  todo1.todo = todo2;
  todo1.type = type2;
  todo1.tags = tag2;
  todo1.createDate = createDate2;
  todo1.expirationDate = expirationDate2;
  todo1.isClose = true;
  todo1.updateDate = updateDate2;
  expect(todo1.id).toBe(todoID2);
  expect(todo1.todo).toBe(todo2);
  expect(todo1.type).toBe(type2);
  expect(todo1.tags[0]).toBe(tag);
  expect(todo1.tags[1]).toBe(tag2);
  expect(todo1.expirationDate).toBe(expirationDate2);
  expect(todo1.isClose).toBeTruthy();
  expect(todo1.createDate.getDate()).toBe(createDate2.getDate());
  expect(todo1.childTodos.length).toBe(0);
  expect(todo1.updateDate.getDate()).toBe(updateDate2.getDate());
});

test("create Todo object and add childTodo", () => {
  const todoID: string = randomUUID();
  const todo = "TDD テスト駆動開発を読む";
  const type = "inbox";
  const tag = "読書";
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const todo1 = new Todo(todoID, todo, type, tag, expirationDate);
  const todoID2: string = randomUUID();
  const todo2 = "ツーリングに行く";
  const type2 = "week";
  const tag2 = "バイク";
  const expirationDate2 = new Date();
  expirationDate2.setDate(expirationDate2.getDate() + 7);
  const todoC1 = new Todo(todoID2, todo2, type2, tag2, expirationDate2);
  todo1.childTodos = todoC1;

  expect(todo1.id).toBe(todoID);
  expect(todo1.todo).toBe(todo);
  expect(todo1.type).toBe(type);
  expect(todo1.tags[0]).toBe(tag);
  expect(todo1.expirationDate).toBe(expirationDate);
  expect(todo1.isClose).toBeFalsy();
  expect(todo1.createDate.getDate()).toBe(new Date().getDate());
  expect(todo1.childTodos.length).toBe(1);
  expect(todo1.updateDate).toBeNull();

  expect(todo1.childTodos[0].id).toBe(todoID2);
  expect(todo1.childTodos[0].todo).toBe(todo2);
  expect(todo1.childTodos[0].type).toBe(type2);
  expect(todo1.childTodos[0].tags[0]).toBe(tag2);
  expect(todo1.childTodos[0].expirationDate).toBe(expirationDate2);
  expect(todo1.childTodos[0].isClose).toBeFalsy();
  expect(todo1.childTodos[0].createDate.getDate()).toBe(new Date().getDate());
  expect(todo1.childTodos[0].childTodos.length).toBe(0);
  expect(todo1.childTodos[0].updateDate).toBeNull();
});