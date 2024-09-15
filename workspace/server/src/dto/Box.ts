export class Box {
    private _id: string;
    private _box: string;
    private _createDate: Date;
    private _updateDate: Date;
    /**
     * Box コンストラクタ
     * @param id TypdID
     * @param box 名称
     * @example
     * ```typescript
     * const newBox: Box = new Box(id, なめ);
     * ```
     */
    constructor(id: string, box: string) {
        this._id = id;
        this._box = box;
        this._createDate = new Date();
        this._updateDate = null;
    };
    get id() {
        return this._id;
    }
    get box() {
        return this._box;
    }
    get createDate() {
        return this._createDate;
    }
    get updateDate() {
        return this._updateDate;
    }
    public update(box: string): void {
        this._box = box;
        this._updateDate = new Date();
    }
    public import(into: Box): void {
        this._id = into._id;
        this._box = into._box;
        this._createDate = into._createDate;
        this._updateDate = into._updateDate;
    }
}