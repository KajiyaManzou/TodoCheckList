import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { Box } from "../src/dto/Box";

test("create Box", () => {
    const id1 = randomUUID();
    const box1 = "inbox";
    const newBox1 = new Box(id1, box1);
    expect(newBox1.id).toBe(id1);
    expect(newBox1.box).toBe(box1);
    expect(newBox1.createDate.getDate()).toBe(new Date().getDate());
    expect(newBox1.updateDate).toBeNull();
});

test("create Box and update", () => {
    const id1 = randomUUID();
    const box1 = "inbox";
    const newBox1 = new Box(id1, box1);
    const id2 = randomUUID();
    const box2 = "Today";

    newBox1.update(box2);
    expect(newBox1.id).not.toBe(id2);
    expect(newBox1.box).toBe(box2);
    expect(newBox1.createDate.getDate()).toBe(new Date().getDate());
    expect(newBox1.updateDate.getDate()).toBe(new Date().getDate());
});

test("create Box and import", () => {
    const id1 = randomUUID();
    const box1 = "inbox";
    const newBox1 = new Box(id1, box1);
    const id2 = randomUUID();
    const box2 = "Today";
    const newBox2 = new Box(id2, box2);

    newBox1.import(newBox2);
    expect(newBox1.id).toBe(newBox2.id);
    expect(newBox1.box).toBe(newBox2.box);
    expect(newBox1.createDate.getDate()).toBe(newBox2.createDate.getDate());
    expect(newBox1.updateDate).toBeNull();

    newBox2.update("waiting for");
    newBox1.import(newBox2);
    expect(newBox1.id).toBe(newBox2.id);
    expect(newBox1.box).toBe(newBox2.box);
    expect(newBox1.createDate.getDate()).toBe(newBox2.createDate.getDate());
    expect(newBox1.updateDate.getDate()).toBe(newBox2.updateDate.getDate());
});