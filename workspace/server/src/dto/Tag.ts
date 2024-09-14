export class Tag {
    private _id: string;
    private _tag: string;
    private _createDate: Date;
    private _updateDate: Date;
    /**
     * Tag コンストラクタ
     * @param id TagID
     * @param tag タグ
     * @example
     * ```typescript
     * const newTag: Tag = new Tag(id, tag);
     * ```
     */
    constructor(id: string, tag: string) {
        this._id = id;
        this._tag = tag;
        this._createDate = new Date();
        this._updateDate = null;
    }
    get id() {
        return this._id;
    }
    get tag() {
        return this._tag;
    }
    get createDate() {
        return this._createDate;
    }
    get updateDate() {
        return this._updateDate;
    }
    public update(tag: string) {
        this._tag = tag;
        this._updateDate = new Date();
    }
    public import(into: Tag) {
        this._id = into._id;
        this._tag = into._tag;
        this._createDate = into._createDate;
        this._updateDate = into._updateDate;
    }
}