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
    newTag1.update(tag2);
    expect(newTag1.id).not.toBe(id2);
    expect(newTag1.tag).toBe(tag2);
    expect(newTag1.createDate.getDate()).toBe(new Date().getDate());
    expect(newTag1.updateDate.getDate()).toBe(new Date().getDate());
});

test("create Tag and import", () => {
    const id1 = randomUUID();
    const tag1 = "読書";
    const newTag1 = new Tag(id1, tag1);
    const id2 = randomUUID();
    const tag2 = "バイク";
    const newTag2 = new Tag(id2, tag2);

    newTag1.import(newTag2);
    expect(newTag1.id).toBe(newTag2.id);
    expect(newTag1.tag).toBe(newTag2.tag);
    expect(newTag1.createDate.getDate()).toBe(newTag2.createDate.getDate());
    expect(newTag1.updateDate).toBeNull();

    newTag2.update("コーヒー");
    newTag1.import(newTag2);
    expect(newTag1.id).toBe(newTag2.id);
    expect(newTag1.tag).toBe(newTag2.tag);
    expect(newTag1.createDate.getDate()).toBe(newTag2.createDate.getDate());
    expect(newTag1.updateDate.getDate()).toBe(newTag2.updateDate.getDate());
});