import { Todo } from "../types/todo";
import { BottomTodoInfo } from "./BottomTodoInfo";
import { CreateTodoForm } from "./CreateTodoForm";
import { TodoList } from "./TodoList";

export function TodoBoard() {
  const todos: Todo[] = [
    {
      id: 1,
      title: "Start recruitment task",
      completed: true,
    },
    {
      id: 2,
      title: "Submit recruitment task",
      completed: false,
    },
  ];

  return (
    <div className="mx-auto flex max-w-xl flex-col gap-4 p-4">
      <CreateTodoForm />
      <TodoList todos={todos} />
      <BottomTodoInfo />
    </div>
  );
}
