import { Tag } from './Tag';
import { randomUUID } from "crypto";

/**
 * Todo クラス
 * @public 
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
     * Adds two numbers together.
     * @returns {string} The sum of the two numbers.
     */
    get todo(): string {
        return this._todo;
    }

    get isClose(): boolean {
        return this._isClose;
    }

    get id(): string {
        return this._id;
    }

    get createDate(): Date {
        return this._createDate;
    }
    
    public update(id: string, todo: string): Todo {
        if (this._id != id) return null;
        if (todo == null) return null;
        this._todo = todo;
        this._updateDate = new Date();
        return this;
    }

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