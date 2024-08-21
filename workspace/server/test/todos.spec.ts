import { TodoType } from '../src/modules/TodoType';
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
  const todoType = new TodoType("inbox");
  expect(todoType.todoType).toBe("inbox");
})

test("create TodoClass object not equal id, createDate", () => {
  const todoType1 = new TodoType("inbox");
  const todoType2 = new TodoType("today");
  expect(todoType1.todoType).not.toBe(todoType2.todoType);
  expect(todoType1.createDate).not.toBe(todoType2.createDate);
})