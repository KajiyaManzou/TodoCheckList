export class Todo {
    private _id: string;
    private _todo: string;
    private _box: string;
    private _tags: string[] = [];
    private _childTodos: Todo[] = [];
    private _expirationDate: Date;
    private _createDate: Date;
    private _updateDate: Date;
    private _isClose: boolean;
    /**
     * Todo コンストラクタ
     * @param id TodoID
     * @param todo Todo情報
     * @param box Todo区分
     * @param tags タグ情報
     * @param expirationDate Todo期限
     * @example
     * ```typescript
     * const newTodo: Todo = new Todo(id, todo, type, tag, expirationDate);
     * ```
     */
    constructor(id: string, todo: string, box: string, tags: string[], expirationDate: Date) {
        this._id = id;
        this._todo = todo;
        this._box = box;
        this._tags = tags;
        if (expirationDate instanceof Date) {
            this._expirationDate = expirationDate;
        } else {
            this._expirationDate = undefined;
        }
        this._createDate = new Date();
        this._updateDate = null;
        this._isClose = false;
    }
    /**
     * TodoID getアクセサ
     * @returns string TodoID
     */
    get id(): string {
        return this._id;
    }
    /**
     * TodoID setアクセサ
     */
    set id(id: string) {
        this._id = id;
    }
    /**
     * Todo情報 getアクセサ
     * @returns string Todo情報
     */
    get todo(): string {
        return this._todo;
    }
    /**
     * Todo情報 setアクセサ
     */
    set todo(todo: string) {
        this._todo = todo;
    }
    /**
     * Type情報 getアクセサ
     * @returns string Type情報
     */
    get box(): string {
        return this._box;
    }
    /**
     * Type情報 setアクセサ
     */
    set box(box: string) {
        this._box = box;
    }
    /**
     * Tag情報 getアクセサ
     * @returns string[] Tag情報
     */
    get tags(): string[] {
        return this._tags;
    }
    /**
     * Tag情報 setアクセサ
     */
    set tags(tags: string[]) {
        this._tags = tags;
    }
    /**
     * 子Todo getアクセサ
     * @returns Todo[] 子Todo
     */
    get childTodos(): Todo[] {
        return this._childTodos;
    }
    /**
     * 子Todo setアクセサ
     */
    set childTodos(todos: Todo[]) {
        this._childTodos = todos;
    }
    /**
     * 完了/未完フラグ getサクセサ
     * @returns boolean true: 完了、false: 未完
     */
    get isClose(): boolean {
        return this._isClose;
    }
    /**
     * 完了/未完フラグ setサクセサ
     */
    set isClose(bool: boolean) {
        this._isClose = bool;
    }
    /**
     * 作成日付 getアクセサ
     * @returns Date 開始日付
     */
    get createDate(): Date {
        return this._createDate;
    }
    /**
     * 作成日付 setアクセサ
     */
    set createDate(createDate: Date) {
        if (createDate instanceof Date) {
            this._createDate = createDate;
        } else {
            this._createDate = undefined;
        }
    }
    /**
     * 期限日 getアクセサ
     * @returns Date 期限日
     */
    get expirationDate(): Date {
        return this._expirationDate;
    }
    /**
     * 期限日 setアクセサ
     */
    set expirationDate(expirationDate: Date) {
        if (expirationDate instanceof Date) {
            this._expirationDate = expirationDate;
        } else {
            this._expirationDate = undefined;
        }
    }
    /**
     * 更新日 getアクセサ
     * @returns Date 更新日
     */
    get updateDate(): Date {
        return this._updateDate;
    }
    /**
     * 更新日 setアクセサ
     */
    set updateDate(updateDate: Date) {
        if (updateDate instanceof Date) {
            this._updateDate = updateDate;
        } else {
            this._updateDate = undefined;
        }
    }
}