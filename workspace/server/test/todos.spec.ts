import { TodoClass } from '../src/modules/TodoClass';
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
})

test("create TodoClass object", () => {
  const todoClass = new TodoClass("inbox");
  expect(todoClass.todoClass).toBe("inbox");
})

test("create TodoClass object not equal id, createDate", () => {
  const todoClass1 = new TodoClass("inbox");
  const todoClass2 = new TodoClass("today");
  expect(todoClass1.todoClass).not.toBe(todoClass2.todoClass);
  expect(todoClass1.createDate).not.toBe(todoClass2.createDate);
})