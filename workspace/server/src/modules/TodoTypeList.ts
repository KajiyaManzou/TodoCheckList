import { randomUUID } from "crypto";
import { TodoType } from "./TodoType";
/**
 * TodoTypeListクラス
 * @class TodoTypeList
 */
export class TodoTypeList {
    private _id: string;
    private _todosTypes: TodoType[] = [];
    /**
     * コンストラクタ
     * @example 
     * ```Typescript
     * const todoTypeList: TodoTypeList = new TodoTypeList();
     * ```
     */
    constructor() {
        this._id = randomUUID();
        this._todosTypes.push(new TodoType("inbox"));
    }
    /**
     * 標準TodoTypeを返すメソッド
     * @param queryid 取り出すTodoTypeID 
     * @returns 
     * 1. TodoTypeIDをキーに取出したTodoTypeオブジェクト。TodoTypeIDがない場合はundefinedを返す
     * 2. 取り出すTodoTypeIDの指定がない場合：標準TodoTypeオブジェクト（inbox）
     * @example
     * ```typescript
     * const todoTypeList: TodoTypeList = new TodoTypeList();
     * const todoType: TodoType = new TodoType("Today");
     * todoTypeList.add(todoType);
     * console.log(todoTypeList.get(todoType.id));  // Today
     * ```
     * ```typescript
     * const todoTypeList: TodoTypeList = new TodoTypeList();
     * const todoType: TodoType = todoTypeList.get();
     * console.log(todoType.type);  // inbox
     * ```
     */
    public get(queryid?: string): TodoType {
        const result: TodoType = new TodoType("temp");
        if (queryid == null) {
            result.import(this._todosTypes[0]);
            return result;
        }
        const tempTodoType: TodoType = this.findTodoTypeID(queryid);
        if (typeof tempTodoType == "undefined") return tempTodoType;
        result.import(tempTodoType);
        return result;
    }
    /**
     * TodoTypeオブジェクトを追加するメソッド
     * @param todoType 追加するTodoTypeオブジェクト
     * @returns 追加したTodoTypeオブジェクト、TodoTypeのType情報が既存のTodoTypeと重複した場合はundefinedを返す
     * @example
     * ```typescript
     * const todoTypeList: TodoTypeList = new TodoTypeList();
     * const todoType: TodoType = new TodoType("Today");
     * todoTypeList.add(todoType);
     * console.log(todoTypeList.get(todoType.id));  // Today
     * ```
     */
    public add(todoType: TodoType): TodoType {
        if (this.isDuplicate(todoType.type)) return undefined;
        this._todosTypes.push(todoType);
        return this.get(todoType.id);
    }
    /**
     * TodoTypeオブジェクトを更新するメソッド
     * @param queryid 更新するTodoTypeのTodoTypeId
     * @param todoTypeOfTyoe 更新するTodoType情報
     * @returns 更新済TodoTypeオブジェクト、queryidが見つからない場合、todoTypeがnull/emptyの場合はundefinedを返す
     * todoTypeOfTyoeが既存のTodoTypeと重複した場合はundefinedを返す
     * @example
     * ```typescript
     * const todoTypeList: TodoTypeList = new TodoTypeList();
     * const todoType: TodoType = new TodoType("Today");
     * todoTypeList.add(todoType);
     * todoTypeList.update(todoType.id, "This Week");
     * console.log(todoTypeList.get(todoType.id));  // This Week
     * ```
     */
    public update(queryid: string, todoTypeOfTyoe: string | null): TodoType {
        const tempTodoType: TodoType = this.findTodoTypeID(queryid);
        if (typeof tempTodoType == "undefined") return tempTodoType;
        if (this.isDuplicate(todoTypeOfTyoe)) return undefined;
        const updatedTodoType: TodoType = tempTodoType.update(todoTypeOfTyoe);
        if (typeof updatedTodoType == "undefined") return updatedTodoType;
        return this.get(updatedTodoType.id);
    }
    /**
     * TodoTypeオブジェクト削除メソッド queryidをキーにTodoTypeオブジェクトを削除する
     * @param queryid 削除するTodoTypeID
     * @returns true: 削除済、false: 削除失敗
     * @example
     * ```typescript
     * const todoTypeList: TodoTypeList = new TodoTypeList();
     * const todoType: TodoType = new TodoType("Today");
     * todoTypeList.add(todoType);
     * todoTypeList.delete(todoType.id);
     * console.log(todoTypeList.get(todoType.id));  // undefined
     * ```
     */
    public delete(queryid: string | null): boolean {
        const tempTodoType: TodoType = this.findTodoTypeID(queryid);
        if (typeof tempTodoType == "undefined") return false;
        delete this._todosTypes[this._todosTypes.findIndex(({ id }) => id == queryid)];
        return true;
    }
    /**
     * _todosTypesからqueryidをキーにTodoTypeオブジェクトを抽出するプライベートメソッド
     * @param queryid 抽出するTodoTypeID
     * @returns TodoTypeオブジェクト、queryidを見つけられない場合はundefinedを返す
     * queryidが"inbox"のTodoTypeIDの場合はundefinedを返す
     * @throws TypeError 以外の例外
     * @example
     * ```typescript
     * const todoType: TodoType = this.findTodoTypeID(id);
     * ```
     */
    private findTodoTypeID(queryid: string): TodoType {
        try {
            if (this._todosTypes.findIndex(({ id }) => id == queryid) == 0) throw TypeError();
            return this._todosTypes.find(({ id }) => id == queryid );
        } catch (e) {
            if (e instanceof TypeError) {
                return undefined;
            }
            throw e;
        }
    }
    /**
     * _todosTypesからtodoTypeをキーに重複するTodoTypeオブジェクトの有無を判定するプライベートメソッド
     * @param todoType 重複を確認するTodoType情報
     * @returns true: 重複有、false: 重複無
     * @example
     * ```typescript
     * console.log(this.isDuplicate("inbox"));  // true
     * console.log(this.isDuplicate("XXXXXX"));  // false
     * ```
     */
    private isDuplicate(todoType: string): boolean {
        if (this._todosTypes.find(( { type }) => type == todoType)) return true;
        return false;
    }
}