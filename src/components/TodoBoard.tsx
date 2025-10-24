import { useTodos } from "../api/useTodos";
import { BottomTodoInfo } from "./BottomTodoInfo";
import { CreateTodoForm } from "./CreateTodoForm";
import { TodoList } from "./TodoList";

export function TodoBoard() {
  const [{ data, isPending, isError }, { createTodo }] = useTodos();

  // TODO
  const clearTodos = () => Promise.resolve();

  if (isError) {
    // NOTE: purposefully not styling this, since it seems out of scope for this task
    return <div>Error loading todos!</div>;
  }

  // NOTE: might alternatively show a spinner here
  const todos = isPending ? [] : data;

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 p-4">
      <CreateTodoForm onCreate={createTodo} />
      <TodoList todos={todos} />
      <BottomTodoInfo todos={todos} onClear={clearTodos} />
    </div>
  );
}
