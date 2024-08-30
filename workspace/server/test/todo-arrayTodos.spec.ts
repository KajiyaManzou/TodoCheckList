import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Todo } from "../src/dto/Todo";
//import { TodoList } from "../src/modules/TodoList";
import { Type } from "../src/dto/Type";
//import { TypeList } from "../src/modules/array/TypeList";
import { Todos } from "../src/modules/array/Todos";

test("create Todos", () => {
    const todos: Todos = new Todos();
    expect(todos.todoTypeList().length).toBe(1);
    expect(todos.todoTypeList()[0].type).toBe("inbox");
})

test("add Todos.addTodoType(), addTodo()", () => {
    const todos: Todos = new Todos();
    todos.addTodoType(new TodoType("Today"));
    expect(todos.todoTypeList().length).toBe(2);
    expect(todos.todoTypeList()[0].type).toBe("inbox");
    expect(todos.todoTypeList()[1].type).toBe("Today");
    todos.addTodo(new Todo("クリエイティブプログラマーを読む"));
    expect(todos.todoList("inbox").length).toBe(1);
    todos.addTodo(new Todo("今日のジャーナルを記録する"));
    expect(todos.todoList("inbox").length).toBe(2);
    todos.addTodo(new Todo("夏休みの宿題をする"), todos.todoTypeList()[1].type);
    todos.addTodo(new Todo("夏休み自由研究をする"), todos.todoTypeList()[1].type);
    expect(todos.todoList("Today").length).toBe(2);
})