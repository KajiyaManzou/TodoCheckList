export class Type {
    private _id: string;
    private _type: string;
    private _createDate: Date;
    private _updateDate: Date;
    /**
     * Type コンストラクタ
     * @param id TypdID
     * @param type 区分/分類/種類
     * @example
     * ```typescript
     * const newType: Type = new Type(id, type);
     * ```
     */
    constructor(id: string, type: string) {
        this._id = id;
        this._type = type;
        this._createDate = new Date();
        this._updateDate = null;
    };
    get id() {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }
    get type() {
        return this._type;
    }
    set type(type: string) {
        this._type = type;
    }
    get createDate() {
        return this._createDate;
    }
    set createDate(createDate: Date) {
        this._createDate = createDate;
    }
    get updateDate() {
        return this._updateDate;
    }
    set updateDate(updateDate: Date) {
        this._updateDate = updateDate;
    }
}