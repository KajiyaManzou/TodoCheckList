import { randomUUID } from "crypto";
import { Todo } from "./Todo";

/**
 * TodoListクラス Todo集合をまとめる
 */
export class TodoList {
    private _id: string;
    private _name: string;
    private _todos: Todo[] = [];

    /**
     * コンストラクタ
     */
    constructor();
    constructor(name?: string) {
        this._id = randomUUID();
        if (name != null) {
            this._name = name;
        } else {
            this._name = "none";
        }
    }

    /**
     * Todo追加メソッド TodoListにTodoを追加する
     * @param todo 追加するTodoオブジェクト
     * @returns 追加したTodoオブジェクト。追加に失敗した場合はundefinedを返す。
     */
    public add(todo: Todo): Todo {
        this._todos.push(todo);
        return this.get(todo.id);
    }
    /**
     * Todo取出しメソッド IDをキーにTodoを取り出す
     * @param queryid 取り出すTodoID
     * @returns 取出したTodoオブジェクト。取出しに失敗した場合はundefinedを返す。
     */
    public get(queryid: string): Todo {
        const result: Todo = new Todo("temp");
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return tempTodo;
        result.import(tempTodo);
        return result;
    }
    /**
     * Todo更新メソッド IDをキーにTodoを更新する
     * @param queryid 更新するTodoのTodoID
     * @param todo 更新するTodo情報
     * @returns 更新したTodoオブジェクト。取出しに失敗した場合はundefinedを返す。
     */
    public update(queryid: string, todo: string): Todo {
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return tempTodo;
        tempTodo.update(queryid, todo);
        return this.get(queryid);
    }
    /**
     * Todo削除メソッド IDをキーにTodoを削除する
     * @param queryid 削除するTodoのTodoID
     * @returns true: 削除済、false: 削除失敗
     */
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