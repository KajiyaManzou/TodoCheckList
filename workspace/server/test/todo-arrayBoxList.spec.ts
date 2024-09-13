import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Box } from "../src/dto/Box";
import { BoxList } from "../src/modules/array/BoxList";

test("create BoxList object", () => {
    const boxList1: BoxList = new BoxList();
    expect(boxList1.getBox().name).toBe("inbox");
});

test("add Box into BoxList", () => {
    const boxList1: BoxList = new BoxList();
    expect(boxList1.getBox().name).toBe("inbox");
    const box1: Box = boxList1.createBox("Today");
    expect(boxList1.getBox(box1.id).name).toBe("Today");
    expect(box1.name).toBe("Today");
    const box2: Box = boxList1.createBox("someday");
    const box2B: Box = boxList1.createBox("someday");
    expect(box2B).toBeUndefined();
    const box3: Box = boxList1.createBox("project");
    const box4: Box = boxList1.createBox("waiting for");
    const box5: Box = boxList1.createBox("Do it");
    const box6: Box = boxList1.createBox("calendar");
    expect(boxList1.getBox(box2.id).name).toBe("someday");
    expect(boxList1.getBox(box3.id).name).toBe("project");
    expect(boxList1.getBox(box4.id).name).toBe("waiting for");
    expect(boxList1.getBox(box5.id).name).toBe("Do it");
    expect(boxList1.getBox(box6.id).name).toBe("calendar");
    expect(boxList1.getBox(randomUUID())).toBeUndefined();
});

test("update Box into BoxList", () => {
    const boxList1: BoxList = new BoxList();
    const box2: Box = boxList1.createBox("someday");
    const box3: Box = boxList1.createBox("project");
    const box4: Box = boxList1.createBox("waiting for");
    const box5: Box = boxList1.createBox("Do it");
    const box6: Box = boxList1.createBox("calendar");
    boxList1.updateBox(box3.id, "Project B");
    expect(boxList1.getBox(box3.id).name).toBe("Project B");
    expect(boxList1.getBox(box3.id).name).not.toBe("project");
    expect(boxList1.updateBox(randomUUID(), "Project B")).toBeUndefined();
    expect(boxList1.updateBox(box4.id, "")).toBeUndefined();
    expect(boxList1.updateBox(box2.id, "   ")).toBeUndefined();
    const boxInbox = boxList1.getBox();
    expect(boxList1.updateBox(boxInbox.id, "new Inbox")).toBeUndefined();
});

test("delete Box into BoxList", () => {
    const boxList1: BoxList = new BoxList();
    const box2: Box = boxList1.createBox("someday");
    const box3: Box = boxList1.createBox("project");
    const box4: Box = boxList1.createBox("waiting for");
    const box5: Box = boxList1.createBox("Do it");
    const box6: Box = boxList1.createBox("calendar");
    const boxInbox = boxList1.getBox();
    expect(boxList1.deleteBox(boxInbox.id)).toBeFalsy();
    //expect(boxList1.deleteBox(null)).toBeFalsy();
    expect(boxList1.deleteBox(box5.id)).toBeTruthy();
    expect(boxList1.deleteBox(box5.id)).toBeFalsy();
    expect(boxList1.deleteBox(randomUUID())).toBeFalsy();
    expect(boxList1.getBox(box5.id)).toBeUndefined();
});

test("Duplicate box will cause an error in the add and update methods.", () => {
    const boxList1: BoxList = new BoxList();
    const box1: Box = boxList1.getBox();
    const box2: Box = boxList1.createBox("someday");
    const box3: Box = boxList1.createBox("project");
    const box4: Box = boxList1.createBox("waiting for");
    const box5: Box = boxList1.createBox("Do it");
    const box6: Box = boxList1.createBox("calendar");
    expect(boxList1.createBox(box1.name)).toBeUndefined();
    expect(boxList1.createBox(box3.name)).toBeUndefined();
    expect(boxList1.updateBox(box2.id, box1.name)).toBeUndefined();
    expect(boxList1.updateBox(box6.id, box4.name)).toBeUndefined();
});

test("list Box", () => {
    const boxList1: BoxList = new BoxList();
    const box2: Box = boxList1.createBox("someday");
    const box3: Box = boxList1.createBox("project");
    const box4: Box = boxList1.createBox("waiting for");
    const box5: Box = boxList1.createBox("Do it");
    const box6: Box = boxList1.createBox("calendar");
    const boxes: Box[] = boxList1.getBoxes();
    expect(boxes.length).toBe(6);
    expect(boxes[2].name).toBe(box3.name);
    expect(boxes[5].name).toBe(box6.name);
});