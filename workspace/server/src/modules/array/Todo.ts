import { Tag } from './Tag';
import { randomUUID } from "crypto";

/**
 * Todoクラス 
 */
export class Todo {
    private  _id: string;
    private  _todo: string;
    private  _todoTypeId: string;
    private  _tags: Tag[];
    private  _childTodos: Todo[]
    private  _expiryDate: Date;
    private  _createDate: Date;
    private  _updateDate: Date;
    private  _isClose: boolean;

    /**
     * コンストラクタ
     * @param todo Todo情報
     */
    constructor(todo: string);
    constructor(todo: string, todoClass?: string);
    constructor(todo: string, todoClass?: string, tag?: string);
    constructor(todo: string, todoClass?: string, tag?: string, expiryDate?: Date) {
        this._id = randomUUID();
        this._todo = todo;
        this._expiryDate = null;
        this._createDate = new Date();
        this._updateDate = null;
        this._isClose = false;
    }

    /**
     * Todo情報 アクセサ
     * @returns Todo情報
     */
    get todo(): string {
        return this._todo;
    }

    /**
     * 完了/未完フラグ サクセサ
     * @returns true: 完了、false: 未完
     */
    get isClose(): boolean {
        return this._isClose;
    }

    /**
     * TodoID アクセサ
     * @returns TodoID
     */
    get id(): string {
        return this._id;
    }

    /**
     * 作成日付 アクセサ
     * @returns 開始日付
     */
    get createDate(): Date {
        return this._createDate;
    }
    /**
     * Todo更新メソッド  オブジェクトを更新する
     * @param todo Todo情報（null 有）
     * @returns 更新後Todo、todoがnull/emptyの場合はundefinedを返す
     * @example todoの内容を変更する
     * ```typescript
     * todo.update("変更したTodo");
     * ```
     */
    public update(todo: string | null): Todo {
        if (todo === null) return undefined;
        if (todo.trim().length == 0) return undefined;
        this._todo = todo;
        this._updateDate = new Date();
        return this;
    }
    /**
     * Todoオブジェクト取り込みメソッド（todoObj の情報を自身に取り込む）
     * @param todoObj 取り込む Todo オブジェクト
     * @example 作成済 todo1 オブジェクトをtodo2に取り込む
     * ```typescript
     * const todo1: Todo = new Todo("テスト駆動開発を読む");
     * ...
     * const todo2: Todo = new Todo("dummy");
     * todo2.import(todo1);
     * console.log(todo2.todo);  // テスト駆動開発を読む
     * ```
     */
    public import(todoObj: Todo): void {
        this._id = todoObj._id;
        this._todo = todoObj._todo;
        this._todoTypeId = todoObj._todoTypeId;
        this._tags = todoObj._tags;
        this._childTodos = todoObj._childTodos;
        this._expiryDate = todoObj._expiryDate;
        this._createDate = todoObj._createDate;
        this._updateDate = todoObj._updateDate;
        this._isClose = todoObj._isClose;
    }
    /**
     * Todoオブジェクト完了メソッド
     * @example Todoを完了済にする
     * ```typescript
     * const todo1:Todo = new odo("テスト駆動開発を読む");
     * todo1.close();
     * ```
     */
    public close(): void {
        this._isClose = true;
        this._updateDate = new Date();
    }
} 