import clsx from "clsx";
import type { ChangeEvent } from "react";

import type { Todo, UpdateTodoReq } from "../types/todo";

type TodoItemProps = {
  todo: Todo;
  onUpdate: (req: UpdateTodoReq) => Promise<void>;
};

// TODO
export function TodoItem({ todo, onUpdate }: TodoItemProps) {
  const handleCompletedChange = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      await onUpdate({ id: todo.id, completed: e.target.checked });
    } catch {
      // NOTE: I can't find any reasonable pending/error state for checkbox click, ignoring for now
    }
  };

  return (
    <div
      data-testid="todo-item"
      className={clsx(
        "relative flex items-start py-4",
        todo.completed && "line-through",
      )}
    >
      <div className="min-w-0 flex-1 text-sm leading-6">
        <label
          className="select-none font-medium text-gray-900"
          data-testid="todo-title"
        >
          {todo.title}
        </label>
      </div>
      <div className="ml-3 flex h-6 items-center">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
          checked={todo.completed}
          onChange={handleCompletedChange}
        />
      </div>
    </div>
  );
}
