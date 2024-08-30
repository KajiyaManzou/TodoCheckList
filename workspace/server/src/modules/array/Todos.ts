import { TodoList } from "./TodoList";
import { Todo } from "./Todo";
import { TodoTypeList } from "./TodoTypeList";
import { TodoType } from "./TodoType";

export class Todos {
    private _todoList: TodoList;
    private _todoTypeList: TodoTypeList;
    
    constructor() {
        this._todoList = new TodoList();
        this._todoTypeList = new TodoTypeList();
    }

    public todoTypeList(): TodoType[] {
        return this._todoTypeList.list();
    }

    public addTodoType(todoType: TodoType): TodoType {
        const result: TodoType = this._todoTypeList.add(todoType);
        if (typeof result == "undefined") return result;
        return result;
    }

    public todoList(todoType: string): Todo[] {
        const todoTypeLists: TodoType[] = this._todoTypeList.list();
        const tempTodoType: TodoType = todoTypeLists.find(({ type }) => type == todoType );
        const todoList: TodoList = this._todoList.find(({ todoTypeId }) => todoTypeId == tempTodoType.id);
        return todoList.list();
    }

    public addTodo(todo: Todo, todoType?: string): Todo {
        if (todoType == null) todoType = "inbox";
        const todoTypeLists: TodoType[] = this._todoTypeList.list();
        const tempTodoType: TodoType = todoTypeLists.find(({ type }) => type == todoType );
        const todoList: TodoList = this._todoList.find(({ todoTypeId }) => todoTypeId == tempTodoType.id);
        return todoList.add(todo);
    }
}