import { FormEvent, useState } from "react";

type CreateTodoFormProps = {
  onCreate: (title: string) => Promise<void>;
};

// TODO
export function CreateTodoForm({ onCreate }: CreateTodoFormProps) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTitle = title.trim();
    if (newTitle.length === 0) return;

    setTitle("");
    try {
      await onCreate(newTitle);
    } catch {
      // TODO
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="What needs to be done?"
        type="text"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}
