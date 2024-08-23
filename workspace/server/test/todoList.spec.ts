import { randomUUID } from "crypto";
import { Todo } from "../src/modules/Todo";
import { TodoList } from "../src/modules/TodoList";

test("create TodoList object", () => {
    const todoList = new TodoList();
    const todo = new Todo("Todo1");
    todoList.add(todo);
    expect(todoList.get(todo.id).todo).toBe("Todo1");
    todoList.get(todo.id).update(todo.id, "Todo1b");
    expect(todoList.get(todo.id).todo).toBe("Todo1");
    expect(todoList.get(randomUUID())).toBeUndefined();
})

test("update Todo in Todolist", () => {
    const todoList = new TodoList();
    const todo = new Todo("Todo1");
    todoList.add(todo);
    const updatedTodo: Todo = todoList.update(todo.id, "Todo1a");
    expect(todoList.get(todo.id).todo).toBe("Todo1a");
    updatedTodo.update(updatedTodo.id, "Todo1b");
    expect(todoList.get(todo.id).todo).toBe("Todo1a");
    expect(todoList.update(randomUUID(), "Todo1a")).toBeUndefined();
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