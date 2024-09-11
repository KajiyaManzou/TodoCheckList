export class Box {
    private _id: string;
    private _name: string;
    private _createDate: Date;
    private _updateDate: Date;
    /**
     * Box コンストラクタ
     * @param id TypdID
     * @param name 名称
     * @example
     * ```typescript
     * const newBox: Box = new Box(id, なめ);
     * ```
     */
    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this._createDate = new Date();
        this._updateDate = null;
    };
    get id() {
        return this._id;
    }
    set id(id: string) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
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