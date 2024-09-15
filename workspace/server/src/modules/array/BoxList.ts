import { randomUUID } from "crypto";
import { Box } from "../../../src/dto/Box";

/** 
 * BoxListクラス
 * @class BoxList
 */
export class BoxList {
    private _id: string;
    private _todosBoxes: Box[] = [];
    /**
     * コンストラクタ 標準Boxオブジェクト inbox を作成
     * @example 
     * ```Typescript
     * const BoxList: BoxList = new BoxList();
     * ```
     */
    constructor() {
        this._id = randomUUID();
        this._todosBoxes.push(new Box(randomUUID(), "inbox"));
    }
    /**
     * 標準Boxを返すメソッド
     * @param queryid 取り出すBoxID 
     * @returns 
     * 1. BoxIDをキーに取出したBoxオブジェクト。BoxIDがない場合はundefinedを返す
     * 2. 取り出すBoxIDの指定がない場合：標準Boxオブジェクト（inbox）
     * @example
     * ```typescript
     * const boxList: BoxList = new BoxList();
     * const box: Box = boxList.createBox("Today");
     * console.log(boxList.getBox(box.id).name);  // Today
     * ```
     * ```typescript
     * const boxList: BoxList = new BoxList();
     * const box: Box = boxList.getBox();
     * console.log(box.name);  // inbox
     * ```
     */
    public getBox(queryid?: string): Box {
        if (queryid == null) {
            return this.copyBox(this._todosBoxes[0]);
        }
        const targetBox: Box = this.findBoxID(queryid);
        if (typeof targetBox == "undefined") return targetBox;
        return this.copyBox(targetBox);
    }
    /**
     * Boxオブジェクトを追加するメソッド
     * @param box 追加するBox情報
     * @returns 追加したBoxオブジェクト、BoxのBox情報が既存のBoxと重複した場合はundefinedを返す
     * @example
     * ```typescript
     * const boxList: BoxList = new BoxList();
     * const name: string = "Today";
     * const newBox: Box = BoxList.createBox(name);
     * console.log(BoxList.getBox(newBox.id).name);  // Today
     * ```
     */
    public createBox(box: string): Box {
        if (this.isDuplicate(box)) return undefined;
        const newId = randomUUID();
        this._todosBoxes.push(new Box(newId, box));
        return this.getBox(newId);
    }
    /**
     * Boxオブジェクトを更新するメソッド
     * @param queryid 更新するBoxのBoxId
     * @param box 更新するBox情報
     * @returns 更新済Boxオブジェクト、queryidが見つからない場合、Boxがemptyの場合はundefinedを返す
     * nameが既存のBoxと重複した場合はundefinedを返す
     * @example
     * ```typescript
     * const boxList: BoxList = new BoxList();
     * const newBox: Box = boxList.createBox("Today");
     * boxList.updateBox(newBox.id, "This Week");
     * console.log(BoxList.getBox(Box.id).name);  // This Week
     * ```
     */
    public updateBox(queryid: string, box: string): Box {
        if (box.trim().length == 0) return undefined;
        const result: Box = this.findBoxID(queryid);
        if (typeof result == "undefined") return undefined;
        if (this.isDuplicate(box)) return undefined;
        result.update(box);
        return this.getBox(result.id);
    }
    /**
     * Boxオブジェクト削除メソッド queryidをキーにBoxオブジェクトを削除する
     * @param queryid 削除するBoxID
     * @returns true: 削除済、false: 削除失敗
     * @example
     * ```typescript
     * const boxList: BoxList = new BoxList();
     * onst newBox: Box = BoxList.createBox("Today");
     * boxList.deleteBox(newBox.id);
     * console.log(boxList.getBox(newBox.id));  // undefined
     * ```
     */
    public deleteBox(queryid: string): boolean {
        const tempBox: Box = this.findBoxID(queryid);
        if (typeof tempBox == "undefined") return false;
        this._todosBoxes.splice(this._todosBoxes.findIndex(({ id }) => id == queryid), 1)
        return true;
    }
    /**
     * Box一覧を返すメソッド
     * @returns Box[]
     * @example
     * ```typescript
     * const boxList: BoxList = new BoxList();
     * const newBox: Box = boxList.createBox("Today");
     * console.log(boxList.getBoxs());  // Boxオブジェクト "inbox", "Today"
     * ```
     */
    public getBoxes(): Box[] {
        return this._todosBoxes;
    }
    /**
     * _todosBoxesからqueryidをキーにBoxオブジェクトを抽出するプライベートメソッド
     * @param queryid 抽出するBoxID
     * @returns Boxオブジェクト、queryidを見つけられない場合はundefinedを返す
     * queryidが"inbox"のBoxIDの場合はundefinedを返す
     * @throws BoxError 以外の例外
     * @example
     * ```typescript
     * const box: Box = this.findBoxID(id);
     * ```
     */
    private findBoxID(queryid: string): Box {
        try {
            if (this._todosBoxes.findIndex(({ id }) => id == queryid) == 0) throw TypeError();
            return this._todosBoxes.find(({ id }) => id == queryid);
        } catch (e) {
            if (e instanceof TypeError) {
                return undefined;
            }
            throw e;
        }
    }
    /**
     * _todosBoxesからBoxをキーに重複するBoxオブジェクトの有無を判定するプライベートメソッド
     * @param boxName 重複を確認するBox情報
     * @returns true: 重複有、false: 重複無
     * @example
     * ```typescript
     * console.log(this.isDuplicate("inbox"));  // true
     * console.log(this.isDuplicate("XXXXXX"));  // false
     * ```
     */
    private isDuplicate(boxName: string): boolean {
        if (this._todosBoxes.find(({ box }) => box == boxName)) return true;
        return false;
    }
    /**
     * Boxオブジェクトコピー プライベートメソッド
     * @param into コピー元Boxオブジェクト
     * @returns Box コピー後、新しいBoxオブジェクト
     * @example
     * ```typescript
     * const box1: Box = new Box(randomUUID(), "Today");
     * const box2: Box = new Box("id", "name");
     * this.copyBox(box1, box2);
     * console.log(box2.name);  // Today
     * ```
     */
    private copyBox(into: Box): Box {
        const result: Box = new Box("id", "temp");
        result.import(into);
        return result;
    }
}