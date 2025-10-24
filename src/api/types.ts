import type { Todo } from "../models";

export type CreateTodoReq = Pick<Todo, "title">;

export type UpdateTodoReq = Pick<Todo, "id"> & Partial<Todo>;

export type BulkDeleteTodosReq = { ids: Todo["id"][] };
