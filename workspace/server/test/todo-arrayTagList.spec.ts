import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Tag } from "../src/dto/Tag";
import { TagList } from "../src/modules/array/TagList";

test("create TagList object", () => {
    const tagList1: TagList = new TagList();
    const tag1: Tag = tagList1.createTag("読書");
    expect(tagList1.getTag(tag1.id).tag).toBe("読書");
});

test("add Tag into TagList", () => {
    const tagList1: TagList = new TagList();
    const tag1: Tag = tagList1.createTag("読書");
    expect(tagList1.getTag(tag1.id).tag).toBe("読書");
    expect(tag1.tag).toBe("読書");
    const tag2: Tag = tagList1.createTag("映画");
    const tag2B: Tag = tagList1.createTag("映画");
    expect(tag2B).toBeUndefined();
    const tag3: Tag = tagList1.createTag("project");
    const tag4: Tag = tagList1.createTag("ラーメン");
    const tag5: Tag = tagList1.createTag("予定");
    const tag6: Tag = tagList1.createTag("旅行");
    expect(tagList1.getTag(tag2.id).tag).toBe("映画");
    expect(tagList1.getTag(tag3.id).tag).toBe("project");
    expect(tagList1.getTag(tag4.id).tag).toBe("ラーメン");
    expect(tagList1.getTag(tag5.id).tag).toBe("予定");
    expect(tagList1.getTag(tag6.id).tag).toBe("旅行");
    expect(tagList1.getTag(randomUUID())).toBeUndefined();
});

test("update Tag into TagList", () => {
    const tagList1: TagList = new TagList();
    const tag2: Tag = tagList1.createTag("映画");
    const tag3: Tag = tagList1.createTag("project");
    const tag4: Tag = tagList1.createTag("ラーメン");
    const tag5: Tag = tagList1.createTag("予定");
    const tag6: Tag = tagList1.createTag("旅行");
    tagList1.updateTag(tag3.id, "Project B");
    expect(tagList1.getTag(tag3.id).tag).toBe("Project B");
    expect(tagList1.getTag(tag3.id).tag).not.toBe("project");
    expect(tagList1.updateTag(randomUUID(), "Project B")).toBeUndefined();
    expect(tagList1.updateTag(tag4.id, "")).toBeUndefined();
    expect(tagList1.updateTag(tag2.id, "   ")).toBeUndefined();
});

test("delete Tag into TagList", () => {
    const tagList1: TagList = new TagList();
    const tag2: Tag = tagList1.createTag("映画");
    const tag3: Tag = tagList1.createTag("project");
    const tag4: Tag = tagList1.createTag("ラーメン");
    const tag5: Tag = tagList1.createTag("予定");
    const tag6: Tag = tagList1.createTag("旅行");
    expect(tagList1.deleteTag(tag5.id)).toBeTruthy();
    expect(tagList1.deleteTag(tag5.id)).toBeFalsy();
    expect(tagList1.deleteTag(randomUUID())).toBeFalsy();
    expect(tagList1.getTag(tag5.id)).toBeUndefined();
});

test("Duplicate tag will cause an error in the add and update methods.", () => {
    const tagList1: TagList = new TagList();
    const tag2: Tag = tagList1.createTag("映画");
    const tag3: Tag = tagList1.createTag("project");
    const tag4: Tag = tagList1.createTag("ラーメン");
    const tag5: Tag = tagList1.createTag("予定");
    const tag6: Tag = tagList1.createTag("旅行");
    expect(tagList1.createTag(tag3.tag)).toBeUndefined();
    expect(tagList1.updateTag(tag6.id, tag4.tag)).toBeUndefined();
});

test("list Tag", () => {
    const tagList1: TagList = new TagList();
    const tag2: Tag = tagList1.createTag("someday");
    const tag3: Tag = tagList1.createTag("project");
    const tag4: Tag = tagList1.createTag("waiting for");
    const tag5: Tag = tagList1.createTag("Do it");
    const tag6: Tag = tagList1.createTag("calendar");
    const tages: Tag[] = tagList1.getTags();
    expect(tages.length).toBe(5);
    expect(tages[1].tag).toBe(tag3.tag);
    expect(tages[4].tag).toBe(tag6.tag);
});