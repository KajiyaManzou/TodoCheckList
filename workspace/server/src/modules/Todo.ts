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
     * Todo更新メソッド　id をキーに対象の Todo オブジェクトを更新する
     * @param id 更新対象 TodoID 
     * @param todo 更新する Todo情報
     * @returns 更新後Todo
     */
    public update(id: string, todo: string): Todo {
        if (this._id != id) return null;
        if (todo == null) return null;
        this._todo = todo;
        this._updateDate = new Date();
        return this;
    }

    /**
     * Todoオブジェクト取り込みメソッド　todoObj の情報を自身に取り込む
     * @param todoObj 取り込む Todo オブジェクト
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
} 