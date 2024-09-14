import { TodoList } from "./TodoList";
import { BoxList } from "./BoxList";
import { TagList } from "./TagList";
import { Todo } from "../../../src/dto/Todo";
import { Box } from "../../../src/dto/Box";
import { Tag } from "../../../src/dto/Tag";

export class Todos {
    private _todoList: TodoList;
    private _boxList: BoxList;
    private _tagList: TagList;

    constructor() {
        this._todoList = new TodoList();
        this._boxList = new BoxList();
        this._tagList = new TagList();
    }

    public getTodos(): Todo[] {
        return this._todoList.getTodos();
    }

    public getBoxes(): Box[] {
        return this._boxList.getBoxes();
    }

    public getTags(): Tag[] {
        return this._tagList.getTags();
    }
}