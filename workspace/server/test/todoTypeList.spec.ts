import { randomUUID } from "crypto";
import { test, expect } from "@jest/globals";
import { TodoType } from "../src/modules/TodoType";
import { TodoTypeList } from "../src/modules/TodoTypeList";

test("create TodoTypeList object", () => {
    const todoTypeList1: TodoTypeList = new TodoTypeList();
    expect(todoTypeList1.get().type).toBe("inbox");
});

test("add TodoType into TodoTypeList", () => {
    const todoTypeList1: TodoTypeList = new TodoTypeList();
    expect(todoTypeList1.get().type).toBe("inbox");
    const todoType1: TodoType = new TodoType("Today");
    const todoType1B: TodoType = todoTypeList1.add(todoType1);
    expect(todoTypeList1.get(todoType1.id).type).toBe("Today");
    expect(todoType1B.type).toBe("Today");
    const todoType2: TodoType = new TodoType("someday");
    const todoType3: TodoType = new TodoType("project");
    const todoType4: TodoType = new TodoType("waiting for");
    const todoType5: TodoType = new TodoType("Do it");
    const todoType6: TodoType = new TodoType("calendar");
    todoTypeList1.add(todoType2);
    todoTypeList1.add(todoType3);
    todoTypeList1.add(todoType4);
    todoTypeList1.add(todoType5);
    todoTypeList1.add(todoType6);
    expect(todoTypeList1.get(todoType3.id).type).toBe("project");
    expect(todoTypeList1.get(randomUUID())).toBeUndefined();
})

test("update TodoType into TodoTypeList", () => {
    const todoTypeList1: TodoTypeList = new TodoTypeList();
    const todoType2: TodoType = new TodoType("someday");
    const todoType3: TodoType = new TodoType("project");
    const todoType4: TodoType = new TodoType("waiting for");
    const todoType5: TodoType = new TodoType("Do it");
    const todoType6: TodoType = new TodoType("calendar");
    todoTypeList1.add(todoType2);
    todoTypeList1.add(todoType3);
    todoTypeList1.add(todoType4);
    todoTypeList1.add(todoType5);
    todoTypeList1.add(todoType6);
    todoTypeList1.update(todoType3.id, "Project B");
    expect(todoTypeList1.get(todoType3.id).type).toBe("Project B");
    expect(todoTypeList1.get(todoType3.id).type).not.toBe("project");
    expect(todoTypeList1.update(randomUUID(),  "Project B")).toBeUndefined();
    expect(todoTypeList1.update(todoType5.id, null)).toBeUndefined();
    expect(todoTypeList1.update(todoType5.id, "")).toBeUndefined();
})