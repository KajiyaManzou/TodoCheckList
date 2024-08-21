import { randomUUID } from "crypto";

export class TodoType {
    private  _id: string;
    private  _todoType: string;
    private  _createDate: Date;
    private  _updateDate: Date;

    constructor(todoClass: string) {
        this._id = randomUUID();
        this._todoType = todoClass;
        this._createDate = new Date();
        this._updateDate = null;
    }

    get todoType(): string {
        return this._todoType;
    }

    get createDate(): Date {
        return this._createDate;
    }
}