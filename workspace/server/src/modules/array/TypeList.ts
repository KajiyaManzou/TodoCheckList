import { randomUUID } from "crypto";
import { Type } from "../../../src/dto/Type";

/** 
 * TypeListクラス
 * @class TypeList
 */
export class TypeList {
    private _id: string;
    private _todosTypes: Type[] = [];
    /**
     * コンストラクタ 標準Typeオブジェクト inbox を作成
     * @example 
     * ```Typescript
     * const TypeList: TypeList = new TypeList();
     * ```
     */
    constructor() {
        this._id = randomUUID();
        this._todosTypes.push(new Type(randomUUID(), "inbox"));
    }
    /**
     * 標準Typeを返すメソッド
     * @param queryid 取り出すTypeID 
     * @returns 
     * 1. TypeIDをキーに取出したTypeオブジェクト。TypeIDがない場合はundefinedを返す
     * 2. 取り出すTypeIDの指定がない場合：標準Typeオブジェクト（inbox）
     * @example
     * ```typescript
     * const typeList: TypeList = new TypeList();
     * const type: Type = typeList.createType("Today");
     * console.log(typeList.getType(type.id).type);  // Today
     * ```
     * ```typescript
     * const typeList: TypeList = new TypeList();
     * const type: Type = typeList.getType();
     * console.log(type.type);  // inbox
     * ```
     */
    public getType(queryid?: string): Type {
        const result: Type = new Type(randomUUID(), "temp");
        if (queryid == null) {
            this.copyType(this._todosTypes[0], result);
            return result;
        }
        const tempType: Type = this.findTypeID(queryid);
        if (typeof tempType == "undefined") return tempType;
        this.copyType(tempType, result);
        return result;
    }
    /**
     * Typeオブジェクトを追加するメソッド
     * @param type 追加するType情報
     * @returns 追加したTypeオブジェクト、TypeのType情報が既存のTypeと重複した場合はundefinedを返す
     * @example
     * ```typescript
     * const typeList: TypeList = new TypeList();
     * const type: string = "Today";
     * const newType: Type = TypeList.createType(type);
     * console.log(TypeList.getType(newType.id).type);  // Today
     * ```
     */
    public createType(type: string): Type {
        if (this.isDuplicate(type)) return undefined;
        const newId = randomUUID();
        this._todosTypes.push(new Type(newId, type));
        return this.getType(newId);
    }
    /**
     * Typeオブジェクトを更新するメソッド
     * @param queryid 更新するTypeのTypeId
     * @param type 更新するType情報
     * @returns 更新済Typeオブジェクト、queryidが見つからない場合、Typeがemptyの場合はundefinedを返す
     * typeが既存のTypeと重複した場合はundefinedを返す
     * @example
     * ```typescript
     * const typeList: TypeList = new TypeList();
     * const newType: Type = typeList.createType("Today");
     * typeList.updateType(newType.id, "This Week");
     * console.log(TypeList.getType(Type.id).type);  // This Week
     * ```
     */
    public updateType(queryid: string, type: string): Type {
        if (type.trim().length == 0) return undefined;
        const result: Type = this.findTypeID(queryid);
        if (typeof result == "undefined") return undefined;
        if (this.isDuplicate(type)) return undefined;
        result.type = type;
        return this.getType(result.id);
    }
    /**
     * Typeオブジェクト削除メソッド queryidをキーにTypeオブジェクトを削除する
     * @param queryid 削除するTypeID
     * @returns true: 削除済、false: 削除失敗
     * @example
     * ```typescript
     * const typeList: TypeList = new TypeList();
     * onst newType: Type = TypeList.createType("Today");
     * typeList.deleteType(newType.id);
     * console.log(typeList.getType(newType.id));  // undefined
     * ```
     */
    public deleteType(queryid: string): boolean {
        const tempType: Type = this.findTypeID(queryid);
        if (typeof tempType == "undefined") return false;
        delete this._todosTypes[this._todosTypes.findIndex(({ id }) => id == queryid)];
        return true;
    }
    /**
     * Type一覧を返すメソッド
     * @returns Type[]
     * @example
     * ```typescript
     * const typeList: TypeList = new TypeList();
     * const newType: Type = typeList.createType("Today");
     * console.log(typeList.getTypes());  // Typeオブジェクト "inbox", "Today"
     * ```
     */
    public getTypes(): Type[] {
        return this._todosTypes;
    }
    /**
     * _todosTypesからqueryidをキーにTypeオブジェクトを抽出するプライベートメソッド
     * @param queryid 抽出するTypeID
     * @returns Typeオブジェクト、queryidを見つけられない場合はundefinedを返す
     * queryidが"inbox"のTypeIDの場合はundefinedを返す
     * @throws TypeError 以外の例外
     * @example
     * ```typescript
     * const type: Type = this.findTypeID(id);
     * ```
     */
    private findTypeID(queryid: string): Type {
        try {
            if (this._todosTypes.findIndex(({ id }) => id == queryid) == 0) throw TypeError();
            return this._todosTypes.find(({ id }) => id == queryid);
        } catch (e) {
            if (e instanceof TypeError) {
                return undefined;
            }
            throw e;
        }
    }
    /**
     * _todosTypesからTypeをキーに重複するTypeオブジェクトの有無を判定するプライベートメソッド
     * @param Type 重複を確認するType情報
     * @returns true: 重複有、false: 重複無
     * @example
     * ```typescript
     * console.log(this.isDuplicate("inbox"));  // true
     * console.log(this.isDuplicate("XXXXXX"));  // false
     * ```
     */
    private isDuplicate(Type: string): boolean {
        if (this._todosTypes.find(({ type }) => type == Type)) return true;
        return false;
    }
    /**
     * Typeオブジェクトコピー プライベートメソッド
     * @param from コピー元Typeオブジェクト
     * @param to コピー先Typeオブジェクト
     * @example
     * ```typescript
     * const type1: Type = new Type(randomUUID(), "Today");
     * const type2: Type = new Type("id", "type");
     * this.copyType(type1, type2);
     * console.log(type2.type);  // Today
     * ```
     */
    private copyType(from: Type, to: Type) {
        to.id = from.id;
        to.type = from.type;
        to.createDate = from.createDate;
        to.updateDate = from.updateDate;
    }
}