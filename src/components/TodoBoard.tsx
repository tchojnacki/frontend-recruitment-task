import { BottomTodoInfo } from "./BottomTodoInfo";
import { CreateTodoForm } from "./CreateTodoForm";
import { TodoList } from "./TodoList";

export function TodoBoard() {
  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 p-4">
      <CreateTodoForm />
      <TodoList />
      <BottomTodoInfo />
    </div>
  );
}
