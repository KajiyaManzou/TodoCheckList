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
    set id(id: string) {
        this._id = id;
    }
    get tag() {
        return this._tag;
    }
    set tag(tag: string) {
        this._tag = tag;
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