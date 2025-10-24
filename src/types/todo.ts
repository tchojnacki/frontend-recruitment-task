export type Todo = {
  id: string; // NOTE: this type was changed from number, the backend returns UUIDs, which are strings
  title: string;
  completed: boolean;
};

export type CreateTodoReq = Pick<Todo, "title">;
