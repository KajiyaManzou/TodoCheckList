import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Todo } from "../src/modules/Todo";
import { TodoList } from "../src/modules/TodoList";

test("create TodoList object", () => {
    const todoList = new TodoList();
    const todo = new Todo("Todo1");
    todoList.add(todo);
    expect(todoList.get(todo.id).todo).toBe("Todo1");
    todoList.get(todo.id).update("Todo1b");
    expect(todoList.get(todo.id).todo).toBe("Todo1");
    expect(todoList.get(randomUUID())).toBeUndefined();
})

test("update Todo in Todolist", () => {
    const todoList = new TodoList();
    const todo = new Todo("Todo1");
    todoList.add(todo);
    const updatedTodo: Todo = todoList.update(todo.id, "Todo1a");
    expect(todoList.get(todo.id).todo).toBe("Todo1a");
    updatedTodo.update("Todo1b");
    expect(todoList.get(todo.id).todo).toBe("Todo1a");
    expect(todoList.update(randomUUID(), "Todo1a")).toBeUndefined();
    expect(todoList.update(todo.id, null)).toBeUndefined();
    expect(todoList.update(todo.id, "")).toBeUndefined();
})

test("delete Todo in TodoList", () => {
    const todoList = new TodoList();
    const todo1 = new Todo("Todo1");
    todoList.add(todo1);
    const todo2 = new Todo("Todo2");
    todoList.add(todo2);
    expect(todoList.delete(todo1.id)).toBeTruthy();
    expect(todoList.delete(randomUUID())).toBeFalsy();
    expect(todoList.get(todo1.id)).toBeUndefined();
})

test("list Todo", () => {
    const todoList = new TodoList();
    const todo1 = new Todo("Todo1");
    const todo2 = new Todo("Todo2");
    const todo3 = new Todo("Todo3");
    todoList.add(todo1);
    todoList.add(todo2);
    todoList.add(todo3);
    const todoLists: Todo[] = todoList.list();
    expect(todoLists.length).toBe(3);
    expect(todoLists[2].todo).toBe("Todo3");

});