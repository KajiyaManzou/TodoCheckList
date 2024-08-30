import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Type } from "../src/dto/Type";
import { TypeList } from "../src/modules/array/TypeList";

test("create TypeList object", () => {
    const typeList1: TypeList = new TypeList();
    expect(typeList1.getType().type).toBe("inbox");
});

test("add Type into TypeList", () => {
    const typeList1: TypeList = new TypeList();
    expect(typeList1.getType().type).toBe("inbox");
    const type1: Type = typeList1.createType("Today");
    expect(typeList1.getType(type1.id).type).toBe("Today");
    expect(type1.type).toBe("Today");
    const type2: Type = typeList1.createType("someday");
    const type2B: Type = typeList1.createType("someday");
    expect(type2B).toBeUndefined();
    const type3: Type = typeList1.createType("project");
    const type4: Type = typeList1.createType("waiting for");
    const type5: Type = typeList1.createType("Do it");
    const type6: Type = typeList1.createType("calendar");
    expect(typeList1.getType(type2.id).type).toBe("someday");
    expect(typeList1.getType(type3.id).type).toBe("project");
    expect(typeList1.getType(type4.id).type).toBe("waiting for");
    expect(typeList1.getType(type5.id).type).toBe("Do it");
    expect(typeList1.getType(type6.id).type).toBe("calendar");
    expect(typeList1.getType(randomUUID())).toBeUndefined();
});

test("update Type into TypeList", () => {
    const typeList1: TypeList = new TypeList();
    const type2: Type = typeList1.createType("someday");
    const type3: Type = typeList1.createType("project");
    const type4: Type = typeList1.createType("waiting for");
    const type5: Type = typeList1.createType("Do it");
    const type6: Type = typeList1.createType("calendar");
    typeList1.updateType(type3.id, "Project B");
    expect(typeList1.getType(type3.id).type).toBe("Project B");
    expect(typeList1.getType(type3.id).type).not.toBe("project");
    expect(typeList1.updateType(randomUUID(), "Project B")).toBeUndefined();
    //expect(typeList1.updateType(type5.id, null)).toBeUndefined();
    expect(typeList1.updateType(type4.id, "")).toBeUndefined();
    expect(typeList1.updateType(type2.id, "   ")).toBeUndefined();
    const typeInbox = typeList1.getType();
    expect(typeList1.updateType(typeInbox.id, "new Inbox")).toBeUndefined();
});

test("delete Type into TypeList", () => {
    const typeList1: TypeList = new TypeList();
    const type2: Type = typeList1.createType("someday");
    const type3: Type = typeList1.createType("project");
    const type4: Type = typeList1.createType("waiting for");
    const type5: Type = typeList1.createType("Do it");
    const type6: Type = typeList1.createType("calendar");
    const typeInbox = typeList1.getType();
    expect(typeList1.deleteType(typeInbox.id)).toBeFalsy();
    //expect(typeList1.deleteType(null)).toBeFalsy();
    expect(typeList1.deleteType(type5.id)).toBeTruthy();
    expect(typeList1.deleteType(type5.id)).toBeFalsy();
    expect(typeList1.deleteType(randomUUID())).toBeFalsy();
    expect(typeList1.getType(type5.id)).toBeUndefined();
});

test("Duplicate type will cause an error in the add and update methods.", () => {
    const typeList1: TypeList = new TypeList();
    const type2: Type = typeList1.createType("someday");
    const type3: Type = typeList1.createType("project");
    const type4: Type = typeList1.createType("waiting for");
    const type5: Type = typeList1.createType("Do it");
    const type6: Type = typeList1.createType("calendar");
    expect(typeList1.createType("inbox")).toBeUndefined();
    expect(typeList1.createType("project")).toBeUndefined();
    expect(typeList1.updateType(type2.id, "inbox")).toBeUndefined();
    expect(typeList1.updateType(type6.id, "someday")).toBeUndefined();
});

test("list Type", () => {
    const typeList1: TypeList = new TypeList();
    const type2: Type = typeList1.createType("someday");
    const type3: Type = typeList1.createType("project");
    const type4: Type = typeList1.createType("waiting for");
    const type5: Type = typeList1.createType("Do it");
    const type6: Type = typeList1.createType("calendar");
    const types: Type[] = typeList1.getTypes();
    expect(types.length).toBe(6);
    expect(types[2].type).toBe("project");
    expect(types[5].type).toBe("calendar");
});