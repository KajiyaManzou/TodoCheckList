import { Tag } from "@/dto/Tag";
import { Todo } from "@/dto/Todo";
import { Type } from "@/dto/Type";

/**
 * Todo管理インターフェース
 * @interface
 */
export interface iTodos {
    // Todo メソッド
    addTodo(todo: string, todoType: string): Todo;
    updateTodo(id: string, todoType: string): Todo;
    deleteTodo(id: string): boolean;
    getTodos(): Todo[]
    getTodoById(id: string): Todo;
    getTodoByTodo(todo: string): Todo[];
    getTodoByType(todoType: string): Todo[];
    // Type メソッド
    addType(type: string): Type;
    updateType(id: string, type: string): Type;
    deleteType(id: string): boolean;
    getTypes(): Type[];
    // Tag メソッド
    addTag(tag: string): Tag;
    updateTag(id: string, tag: string): Tag;
    deleteTag(id: string): boolean;
    getTags(): Tag[];
}