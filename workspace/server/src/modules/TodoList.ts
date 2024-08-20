import { randomUUID } from "crypto";
import { Todo } from "./Todo";

export class TodoList {
    private _id: string;
    private _name: string;
    private _todos: Todo[] = [];

    constructor();
    constructor(name?: string) {
        this._id = randomUUID();
        if (name != null) {
            this._name = name;
        } else {
            this._name = "none";
        }
    }

    public add(todo: Todo): Todo {
        this._todos.push(todo);
        return this.get(todo.id);
    }

    public get(queryid: string): Todo {
        const result: Todo = new Todo("temp");
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return tempTodo;
        result.duplicate(tempTodo);
        return result;
    }

    public update(queryid: string, todo: string): Todo {
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return tempTodo;
        tempTodo.update(queryid, todo);
        return this.get(queryid);
    }

    public delete(queryid: string): boolean {
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return false;
        const index = this._todos.findIndex(({ id }) => id == queryid);
        delete this._todos[index];
        return true;
    }

    private findTodo(queryid: string): Todo {
        try {
            return this._todos.find(({ id }) => id == queryid );
        } catch (e) {
            if (e instanceof TypeError) {
                return undefined;
            }
            throw e;
        }
    }
}