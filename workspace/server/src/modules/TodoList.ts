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
     * @example todoList1 に Todoオブジェクトを追加する
     * ```typescript
     * const todoList1: TodoList = new TodoList("今日のTodo");
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * todoList1.add(todo1);
     * ```
     */
    public add(todo: Todo): Todo {
        this._todos.push(todo);
        return this.get(todo.id);
    }
    /**
     * Todo取出しメソッド IDをキーにTodoを取り出す
     * @param queryid 取り出すTodoID
     * @returns 取出したTodoオブジェクト。取出しに失敗した場合はundefinedを返す。
     * @example todoList1からTodoオブジェクトを取り出す
     * ```typescript
     * const todoList1: TodoList = new TodoList("今日のTodo");
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * todoList1.add(todo1);
     * console.log(todoList1.get(todo1.id).todo);  // テスト駆動開発を読む
     * ```
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
     * @example todoList内のTodoオブジェクトのtodo情報を更新する
     * ```typescript
     * const todoList1: TodoList = new TodoList("今日のTodo");
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * todoList1.add(todo1);
     * todoLiat1.update(todo1.id, "エリック・エヴァンスのドメイン駆動設計を読む");
     * console.log(todoList1.get(todo1.id).todo);  // エリック・エヴァンスのドメイン駆動設計を読む
     * ```
     */
    public update(queryid: string, todo: string): Todo {
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return tempTodo;
        tempTodo.update(todo);
        return this.get(queryid);
    }
    /**
     * Todo削除メソッド IDをキーにTodoを削除する
     * @param queryid 削除するTodoのTodoID
     * @returns true: 削除済、false: 削除失敗
     * @example todoList内のTodoオブジェクトを削除する
     * ```typescript
     * const todoList1: TodoList = new TodoList("今日のTodo");
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * todoList1.add(todo1);
     * todoList1.delete(todo1.id);
     * console.log(todoList1.get(todo1.id).todo);  // undefined
     * ```
     */
    public delete(queryid: string): boolean {
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return false;
        const index = this._todos.findIndex(({ id }) => id == queryid);
        delete this._todos[index];
        return true;
    }
    /**
     * TodoList からqueryidをキーにTodoオブジェクトを抽出する プライベートメソッド
     * @param queryid 抽出するTodoのTodoID
     * @returns 抽出したTodoおbジュジェクト。TodoIDを見つけられない場合はundefiledを返す
     * @throws TypeError 以外の例外
     * @example 
     * ```typescript
     * const todo1: Todo = this.findTodo(id);
     * ```
     */
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