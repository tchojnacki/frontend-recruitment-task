import { useMemo, useState } from "react";
import type { BulkDeleteTodosReq, Todo } from "../types/todo";

type BottomTodoInfoProps = {
  todos: Todo[];
  onBulkDelete: (req: BulkDeleteTodosReq) => Promise<void>;
};

// TODO
export function BottomTodoInfo({ todos, onBulkDelete }: BottomTodoInfoProps) {
  const [isPending, setIsPending] = useState(false);

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos],
  );

  const handleClick = async () => {
    setIsPending(true);
    try {
      await onBulkDelete({ ids: completedTodos.map((todo) => todo.id) });
    } catch {
      // TODO
    } finally {
      setIsPending(false);
    }
  };

  // NOTE: I am assuming "current number of to-do items" refers to uncompleted items, if it means total items, set itemsLeft to todos.length
  const itemsLeft = todos.length - completedTodos.length;

  return (
    <div className="flex h-8 items-center justify-between">
      <span
        data-testid="todo-count"
        className="text-sm font-medium leading-6 text-gray-900"
      >
        {itemsLeft} items left
      </span>
      {completedTodos.length > 0 && (
        <button
          className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          onClick={handleClick}
          disabled={isPending}
        >
          Clear completed
        </button>
      )}
    </div>
  );
}
