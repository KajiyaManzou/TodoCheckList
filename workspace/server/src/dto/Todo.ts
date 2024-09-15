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
     * Todo情報 getアクセサ
     * @returns string Todo情報
     */
    get todo(): string {
        return this._todo;
    }
    /**
     * Type情報 getアクセサ
     * @returns string Type情報
     */
    get box(): string {
        return this._box;
    }
    /**
     * Tag情報 getアクセサ
     * @returns string[] Tag情報
     */
    get tags(): string[] {
        return this._tags;
    }
    /**
     * 子Todo getアクセサ
     * @returns Todo[] 子Todo
     */
    get childTodos(): Todo[] {
        return this._childTodos;
    }
    /**
     * 完了/未完フラグ getサクセサ
     * @returns boolean true: 完了、false: 未完
     */
    get isClose(): boolean {
        return this._isClose;
    }
    /**
     * 作成日付 getアクセサ
     * @returns Date 開始日付
     */
    get createDate(): Date {
        return this._createDate;
    }
    /**
     * 期限日 getアクセサ
     * @returns Date 期限日
     */
    get expirationDate(): Date {
        return this._expirationDate;
    }
    /**
     * 更新日 getアクセサ
     * @returns Date 更新日
     */
    get updateDate(): Date {
        return this._updateDate;
    }
    public update(todo: string, box: string, tags: string[], expirationDate: Date): void {
        this._todo = todo;
        this._box = box;
        this._tags = tags;
        if (expirationDate instanceof Date) {
            this._expirationDate = expirationDate;
        } else {
            this._expirationDate = undefined;
        }
        this._updateDate = new Date();
    }
    public close(): void {
        this._isClose = true;
        this._updateDate = new Date();
    }
    public unclosed(): void {
        this._isClose = false;
        this._updateDate = new Date();
    }
    public updateChildTodos(childTodos: Todo[]): void {
        this._childTodos = childTodos;
        this._updateDate = new Date();
    }
    public import(into: Todo): void {
        this._id = into.id;
        this._todo = into.todo;
        this._box = into.box;
        this._tags = into.tags;
        this._childTodos = into.childTodos;
        this._expirationDate = into.expirationDate;
        this._createDate = into.createDate;
        this._updateDate = into.updateDate;
        this._isClose = into.isClose;
    }
}