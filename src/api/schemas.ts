import z from "zod";

// NOTE: ensures all data from backend is actually valid, without unsafe type assertions

export const TodoSchema = z.object({
  id: z.uuid(), // NOTE: type Todo had id set to number, but backend returns UUIDs, I assume it was a mistake
  title: z.string(),
  completed: z.boolean(),
});

export const TodoListSchema = z.array(TodoSchema);
