import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CreateTodoReq } from "../types/todo";
import { todoApi } from "./client";

export function useTodos() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: todoApi.getAll,
  });

  const queryClient = useQueryClient();
  const createMut = useMutation({
    mutationFn: todoApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  const createTodo = async (req: CreateTodoReq) => {
    await createMut.mutateAsync(req);
  };

  return [query, { createTodo }] as const;
}
