import type { UpdateTodoReq } from "../api";
import type { Todo } from "../models";
import { TodoItem } from "./TodoItem";

type TodoListProps = {
  todos: Todo[];
  onUpdate: (req: UpdateTodoReq) => Promise<void>;
};

export function TodoList({ todos, onUpdate }: TodoListProps) {
  return (
    <fieldset>
      <legend className="text-base font-semibold leading-6 text-gray-900">
        Todo list
      </legend>
      <div className="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onUpdate={onUpdate} />
        ))}
      </div>
    </fieldset>
  );
}
