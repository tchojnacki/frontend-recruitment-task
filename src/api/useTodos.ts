import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type {
  BulkDeleteTodosReq,
  CreateTodoReq,
  UpdateTodoReq,
} from "../types/todo";
import { todoApi } from "./client";

export function useTodos() {
  const query = useQuery({
    queryKey: ["todos"],
    queryFn: todoApi.getAll,
  });

  const queryClient = useQueryClient();
  const onSuccess = () =>
    queryClient.invalidateQueries({ queryKey: ["todos"] });

  const createMut = useMutation({ mutationFn: todoApi.create, onSuccess });
  const createTodo = async (req: CreateTodoReq) => {
    await createMut.mutateAsync(req);
  };

  const updateMut = useMutation({ mutationFn: todoApi.update, onSuccess });
  const updateTodo = async (req: UpdateTodoReq) => {
    await updateMut.mutateAsync(req);
  };

  const bulkDeleteMut = useMutation({
    mutationFn: async ({ ids }: BulkDeleteTodosReq) =>
      // NOTE: this should be ideally handled by the backend with a single request
      Promise.all(ids.map((id) => todoApi.delete(id))),
    onSuccess,
  });
  const bulkDeleteTodos = async (req: BulkDeleteTodosReq) => {
    await bulkDeleteMut.mutateAsync(req);
  };

  return [query, { createTodo, updateTodo, bulkDeleteTodos }] as const;
}
