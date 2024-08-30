import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Tag } from "../src/dto/Tag";

test("create Tag", () => {
    const id1 = randomUUID();
    const tag1 = "読書";
    const newTag1 = new Tag(id1, tag1);
    expect(newTag1.id).toBe(id1);
    expect(newTag1.tag).toBe(tag1);
    expect(newTag1.createDate.getDate()).toBe(new Date().getDate());
    expect(newTag1.updateDate).toBeNull();
});

test("create Tag and update", () => {
    const id1 = randomUUID();
    const tag1 = "読書";
    const newTag1 = new Tag(id1, tag1);
    const id2 = randomUUID();
    const tag2 = "バイク";
    const createDate2 = new Date();
    createDate2.setDate(createDate2.getDate() - 1);
    const updateDate2 = new Date();
    updateDate2.setDate(updateDate2.getDate() + 1);
    newTag1.id = id2;
    newTag1.tag = tag2;
    newTag1.createDate = createDate2;
    newTag1.updateDate = updateDate2;
    expect(newTag1.id).toBe(id2);
    expect(newTag1.tag).toBe(tag2);
    expect(newTag1.createDate.getDate()).toBe(createDate2.getDate());
    expect(newTag1.updateDate.getDate()).toBe(updateDate2.getDate());
});