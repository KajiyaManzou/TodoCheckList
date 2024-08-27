import { randomUUID } from "crypto";

/**
 * TodoType クラス Todoの区分/所属/分類分けする
 */
export class TodoType {
    private  _id: string;
    private  _todoType: string;
    private  _createDate: Date;
    private  _updateDate: Date;

    /**
     * コンストラクタ
     * @param todoType 区分名
     * @example
     * ```typescript
     * const todoType: TodoType = new TodoType("Today");
     * console.log(todoType.type);  // Today
     * ```
     */
    constructor(todoType?: string) {
        this._id = randomUUID();
        if (todoType == null) this._todoType = "inbox";
        else this._todoType = todoType;
        this._createDate = new Date();
        this._updateDate = null;
    }
    /**
     * 区分名アクセサ
     * @returns 区分名
     */
    get type(): string {
        return this._todoType;
    }
    /**
     * 作成日付アクセサ
     * @returns 作成日付
     */
    get createDate(): Date {
        return this._createDate;
    }
    /**
     * Todo区分ID アクセサ
     * @returns Todo区分ID
     */
    get id(): string {
        return this._id;
    }
    /**
     * TodoType更新メソッド
     * @param todoType 更新するTodoType情報
     * @returns 更新後TodoType、todoTypeがnull/emptyの場合はundefinedを返す
     * @example
     * ```typescript
     * const todoType: TodoType = new TodoType("Today");
     * console.log(todoType.type);  // Today
     * todoType.update("this week");
     * console.log(todoType.type);  // this week
     * todoType.update("  ");
     * console.log(todoType.type);  // this week
     * ```
     */
    public update(todoType: string | null): TodoType {
        if (todoType == null) return undefined;
        if (todoType.trim().length == 0) return undefined;
        this._todoType = todoType;
        this._updateDate = new Date();
        return this;
    }
    /**
     * TodoTypeオブジェクト取り込みメソッド（todoTypeObj の情報を自身に取り込む）
     * @param todoType 取り込むTodoTypeオブジェクト
     * @example
     * ```typescript
     * const todoType1: TodoType = new TodoTyoe("Today");
     * ...
     * const todoType2: TodoType = new TodoType("dummy");
     * todoType2.import(todoType1);
     * console.log(todoType2.type);  // Today
     * ```
     */
    public import(todoType: TodoType): void {
        this._id = todoType._id;
        this._todoType = todoType._todoType;
        this._createDate = todoType._createDate;
        this._updateDate = todoType._updateDate;
    }
}