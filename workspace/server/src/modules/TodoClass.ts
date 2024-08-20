import { randomUUID } from "crypto";

export class TodoClass {
    private  _id: string;
    private  _todoClass: string;
    private  _createDate: Date;
    private  _updateDate: Date;

    constructor(todoClass: string) {
        this._id = randomUUID();
        this._todoClass = todoClass;
        this._createDate = new Date();
        this._updateDate = null;
    }

    get todoClass(): string {
        return this._todoClass;
    }

    get createDate(): Date {
        return this._createDate;
    }
}