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
     * @rturns Todo区分ID
     */
    get id(): string {
        return this._id;
    }
    public update(id: string, todoType: string): TodoType {
        if (this._id !== id) return undefined;
        if (todoType == null) return undefined;
        if (todoType == "") return undefined;
        this._todoType = todoType;
        this._updateDate = new Date();
        return this;
    }
}