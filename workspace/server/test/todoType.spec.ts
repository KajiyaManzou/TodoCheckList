import { test, expect } from "@jest/globals";
import { TodoType } from "../src/modules/TodoType";

test("create TodoType", () => {
    const todoType1 = new TodoType();
    expect(todoType1.type).toBe("inbox");
    const todoType2 = new TodoType("type1");
    expect(todoType2.type).toBe("type1");
    expect(todoType1.id).not.toBe(todoType2.id);
    expect(todoType1.createDate).not.toBe(todoType2.createDate);
});

test("update TodoType", () => {
    const todoType = new TodoType("type1");
    expect(todoType.update(null)).toBeUndefined();
    expect(todoType.update("")).toBeUndefined();
    expect(todoType.update(" ")).toBeUndefined();
    expect(todoType.update("      ")).toBeUndefined();
    const todoType2: TodoType = todoType.update("type1A");
    expect(todoType.type).not.toBe("type1");
    expect(todoType.type).toBe("type1A");
    expect(todoType2.type).toBe("type1A");
});