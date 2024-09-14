import { randomUUID } from "crypto";
import { Tag } from "../../../src/dto/Tag";

export class TagList {
    private _id: string;
    private _todosTags: Tag[] = [];

    constructor() {
        this._id = randomUUID();
    }
    public createTag(tag: string): Tag {
        if (this.isDuplicate(tag)) return undefined;
        const newId = randomUUID();
        this._todosTags.push(new Tag(newId, tag));
        return this.getTag(newId);
    }
    public getTag(queryid: string): Tag {
        if (queryid == null) return undefined;
        const targetTag: Tag = this.findTagID(queryid);
        if (typeof targetTag == "undefined") return targetTag;
        return this.copyTag(targetTag);
    }
    public updateTag(queryid: string, tag: string): Tag {
        if (tag.trim().length == 0) return undefined;
        const result: Tag = this.findTagID(queryid);
        if (typeof result == "undefined") return undefined;
        if (this.isDuplicate(tag)) return undefined;
        result.update(tag);
        return this.getTag(result.id);
    }
    public deleteTag(queryid: string): boolean {
        const tempTag: Tag = this.findTagID(queryid);
        if (typeof tempTag == "undefined") return false;
        delete this._todosTags[this._todosTags.findIndex(({ id }) => id == queryid)];
        return true;
    }
    public getTags(): Tag[] {
        return this._todosTags;
    }

    private findTagID(queryid: string): Tag {
        try {
            return this._todosTags.find(({ id }) => id == queryid);
        } catch (e) {
            if (e instanceof TypeError) {
                return undefined;
            }
            throw e;
        }
    }
    private isDuplicate(TagName: string): boolean {
        if (this._todosTags.find(({ tag }) => tag == TagName)) return true;
        return false;
    }
    private copyTag(from: Tag): Tag {
        const result: Tag = new Tag("id", "temp");
        result.import(from);
        return result;
    }
}