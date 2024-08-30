import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Type } from "../src/dto/Type";

test("create Type", () => {
    const id1 = randomUUID();
    const type1 = "inbox";
    const newType1 = new Type(id1, type1);
    expect(newType1.id).toBe(id1);
    expect(newType1.type).toBe(type1);
    expect(newType1.createDate.getDate()).toBe(new Date().getDate());
    expect(newType1.updateDate).toBeNull();
});

test("create Type and update", () => {
    const id1 = randomUUID();
    const type1 = "inbox";
    const newType1 = new Type(id1, type1);
    const id2 = randomUUID();
    const type2 = "Today";
    const createDate2 = new Date();
    createDate2.setDate(createDate2.getDate() - 1);
    const updateDate2 = new Date();
    updateDate2.setDate(updateDate2.getDate() + 1);
    newType1.id = id2;
    newType1.type = type2;
    newType1.createDate = createDate2;
    newType1.updateDate = updateDate2;
    expect(newType1.id).toBe(id2);
    expect(newType1.type).toBe(type2);
    expect(newType1.createDate.getDate()).toBe(createDate2.getDate());
    expect(newType1.updateDate.getDate()).toBe(updateDate2.getDate());
});