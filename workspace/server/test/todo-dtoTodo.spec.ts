import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Todo } from "../src/dto/Todo";

test("create Todo object", () => {
  const todoID: string = randomUUID();
  const todo = "TDD テスト駆動開発を読む";
  const box = "inbox";
  const tag: string[] = ["読書"];
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const todo1 = new Todo(todoID, todo, box, tag, expirationDate);
  expect(todo1.id).toBe(todoID);
  expect(todo1.todo).toBe(todo);
  expect(todo1.box).toBe(box);
  expect(todo1.tags[0]).toBe(tag[0]);
  expect(todo1.expirationDate).toBe(expirationDate);
  expect(todo1.isClose).toBeFalsy();
  expect(todo1.createDate.getDate()).toBe(new Date().getDate());
  expect(todo1.childTodos.length).toBe(0);
  expect(todo1.updateDate).toBeNull();
});

test("create Todo object and update", () => {
  const todoID: string = randomUUID();
  const todo = "TDD テスト駆動開発を読む";
  const box = "inbox";
  const tag: string[] = ["読書"];
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);
  const todo1 = new Todo(todoID, todo, box, tag, expirationDate);
  const todoID2: string = randomUUID();
  const todo2 = "ツーリングに行く";
  const box2 = "week";
  const tag2: string[] = tag;
  tag2.push("バイク");
  const createDate2 = new Date();
  createDate2.setDate(createDate2.getDate() - 1);
  const expirationDate2 = new Date();
  expirationDate2.setDate(expirationDate2.getDate() + 7);
  todo1.update(todo2, box2, tag2, expirationDate2);
  todo1.close();
  expect(todo1.id).not.toBe(todoID2);
  expect(todo1.todo).toBe(todo2);
  expect(todo1.box).toBe(box2);
  expect(todo1.tags[0]).toBe(tag2[0]);
  expect(todo1.tags[1]).toBe(tag2[1]);
  expect(todo1.expirationDate).toBe(expirationDate2);
  expect(todo1.isClose).toBeTruthy();
  expect(todo1.createDate.getDate()).not.toBe(createDate2.getDate());
  expect(todo1.childTodos.length).toBe(0);
  expect(todo1.updateDate.getDate()).toBe(new Date().getDate());

  todo1.update(todo2, box2, tag2, null);
  todo1.unclosed();
  expect(todo1.isClose).toBeFalsy();
  expect(todo1.expirationDate).toBeUndefined();
});

test("create Todo object and add childTodo", () => {
  const todoID: string = randomUUID();
  const todo = "TDD テスト駆動開発を読む";
  const box = "inbox";
  const tag: string[] = ["読書"];
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 1);

  const todo1 = new Todo(todoID, todo, box, tag, expirationDate);
  const todoID2: string = randomUUID();
  const todo2 = "ツーリングに行く";
  const box2 = "week";
  const tag2: string[] = ["バイク"];
  const expirationDate2 = new Date();
  expirationDate2.setDate(expirationDate2.getDate() + 7);
  const todoC1 = new Todo(todoID2, todo2, box2, tag2, expirationDate2);
  const chaildTodos1: Todo[] = [todoC1];
  todo1.updateChildTodos(chaildTodos1);

  expect(todo1.id).toBe(todoID);
  expect(todo1.todo).toBe(todo);
  expect(todo1.box).toBe(box);
  expect(todo1.tags[0]).toBe(tag[0]);
  expect(todo1.expirationDate).toBe(expirationDate);
  expect(todo1.isClose).toBeFalsy();
  expect(todo1.createDate.getDate()).toBe(new Date().getDate());
  expect(todo1.childTodos.length).toBe(1);
  expect(todo1.updateDate.getDate()).toBe(new Date().getDate());

  expect(todo1.childTodos[0].id).toBe(todoID2);
  expect(todo1.childTodos[0].todo).toBe(todo2);
  expect(todo1.childTodos[0].box).toBe(box2);
  expect(todo1.childTodos[0].tags[0]).toBe(tag2[0]);
  expect(todo1.childTodos[0].expirationDate).toBe(expirationDate2);
  expect(todo1.childTodos[0].isClose).toBeFalsy();
  expect(todo1.childTodos[0].createDate.getDate()).toBe(new Date().getDate());
  expect(todo1.childTodos[0].childTodos.length).toBe(0);
  expect(todo1.childTodos[0].updateDate).toBeNull();

  const chaildTodos2: Todo[] = [];
  todo1.updateChildTodos(chaildTodos2);
  expect(todo1.childTodos.length).toBe(0);
});