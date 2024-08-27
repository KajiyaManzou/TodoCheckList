import { test, expect } from "@jest/globals";
import { Todo } from '../src/modules/Todo';

test("create Todo object", () => {
    const todo = new Todo("Todo1");
    expect(todo.todo).toBe("Todo1");
    expect(todo.isClose).toBeFalsy();
  });

test("create Todo object not equal id, createDate", () => {
  const todo1 = new Todo("Todo1");
  const todo2 = new Todo("Todo2");
  expect(todo1.id).not.toBe(todo2.id);
  expect(todo1.createDate).not.toBe(todo2.createDate);
});

test("update Todo object", () => {
  const todo = new Todo("Todo1");
  expect(todo.update(null)).toBeUndefined();
  expect(todo.update("")).toBeUndefined();
  expect(todo.update(" ")).toBeUndefined();
  expect(todo.update("      ")).toBeUndefined();
  const todo2: Todo = todo.update("Todo1A");
  expect(todo.todo).toBe("Todo1A");
  expect(todo.todo).not.toBe("Todo1");
  expect(todo2.todo).toBe("Todo1A");
});

test("close Todo objecct", () => {
  const todo: Todo = new Todo("Todo1");
  expect(todo.isClose).toBeFalsy();
  todo.close();
  expect(todo.isClose).toBeTruthy();
})