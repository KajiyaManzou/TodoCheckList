import { randomUUID } from "crypto";
import { Todo } from "../../dto/Todo";

/**
 * TodoListクラス Todo集合をまとめる
 */
export class TodoList {
    private _id: string;
    private _todos: Todo[] = [];

    /**
     * コンストラクタ
     * @example
     * ```typescript
     * const todoList: TodoList = new TodoList();
     * ```
     */
    constructor() {
        this._id = randomUUID();
    }
    public createTodo(todo: string, box: string, tag: string, expirationDate: Date): Todo {
        if (todo == null || todo == undefined || todo.trim().length == 0) return undefined;
        if (box == null || box == undefined || box.trim().length == 0) return undefined;
        const tags: string[] = [];
        if (tag != null && tag != undefined && tag.trim().length > 0) tags.push(tag);
        const result: Todo = new Todo(randomUUID(), todo, box, tags, expirationDate);
        this._todos.push(result);
        return result;
    }
    /**
     * Todo取出しメソッド IDをキーにTodoを取り出す
     * @param queryid 取り出すTodoID
     * @returns 取出したTodoオブジェクト、取出しに失敗した場合はundefinedを返す
     * @example todoList1からTodoオブジェクトを取り出す
     * ```typescript
     * const todoList1: TodoList = new TodoList("今日のTodo");
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * todoList1.add(todo1);
     * console.log(todoList1.get(todo1.id).todo);  // テスト駆動開発を読む
     * ```
     */
    public getTodo(queryid: string): Todo {
        const tempTodo: Todo = this.findTodo(queryid);
        if (typeof tempTodo == "undefined") return tempTodo;
        return this.copyTodo(tempTodo);
    }
    /**
     * Todo更新メソッド IDをキーにTodoを更新する
     * @param queryid 更新するTodoのTodoID
     * @param todo 更新するTodo情報
     * @param box 更新するBox情報
     * @param tags 更新するTags情報
     * @param expirationDate 更新する期限情報
     * @returns 更新したTodoオブジェクト、取出しに失敗した場合はundefinedを返す
     * @example todoList内のTodoオブジェクトのtodo情報を更新する
     * ```typescript
     * const todoList1: TodoList = new TodoList("今日のTodo");
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * todoList1.add(todo1);
     * todoLiat1.update(todo1.id, "エリック・エヴァンスのドメイン駆動設計を読む");
     * console.log(todoList1.get(todo1.id).todo);  // エリック・エヴァンスのドメイン駆動設計を読む
     * ```
     */
    public updateTodo(queryid: string, todo: string, box: string, tags: string[], expirationDate: Date): Todo {
        if (todo == null || typeof todo == "undefined" || todo.trim().length == 0) return undefined;
        if (box == null || typeof box == "undefined" || box.trim().length == 0) return undefined;
        if (tags == null || typeof tags == "undefined") return undefined;
        if (queryid == null || typeof queryid == "undefined" || queryid.trim().length == 0) return undefined;
        const targetTodo: Todo = this.findTodo(queryid);
        if (typeof targetTodo == "undefined") return undefined;
        targetTodo.todo = todo;
        targetTodo.box = box;
        targetTodo.tags = tags;
        if (expirationDate == null || typeof expirationDate == "undefined") {
            targetTodo.expirationDate = undefined;
        } else {
            targetTodo.expirationDate = expirationDate;
        }
        targetTodo.updateDate = new Date();
        return this.copyTodo(targetTodo);
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
     * Todoオブジェクト一覧を返すメソッド
     * @returns Todo[]
     * @example
     * ```typescript
     * const todoList: TodoList = new TodoList();
     * todoList.add(new Todo("Todo1"));
     * todoList.add(new Todo("Todo2"));
     * console.log(todoList.list());  // Todoオブジェクト "Todo1", "Todo2"
     * ```
     */
    public list(): Todo[] {
        return this._todos;
    }
    /**
     * TodoList からqueryidをキーにTodoオブジェクトを抽出する プライベートメソッド
     * @param queryid 抽出するTodoのTodoID
     * @returns 抽出したTodoオブジェクト、TodoIDを見つけられない場合はundefiledを返す
     * @throws TypeError 以外の例外
     * @example 
     * ```typescript
     * const todo1: Todo = this.findTodo(id);
     * ```
     */
    private findTodo(queryid: string): Todo {
        try {
            return this._todos.find(({ id }) => id == queryid);
        } catch (e) {
            if (e instanceof TypeError) {
                return undefined;
            }
            throw e;
        }
    }
    private copyTodo(from: Todo): Todo {
        const result: Todo = new Todo(from.id, from.todo, from.box, from.tags, from.expirationDate);
        result.childTodos = from.childTodos;
        result.createDate = from.createDate;
        result.updateDate = from.updateDate;
        result.isClose = from.isClose;
        return result;
    }
}