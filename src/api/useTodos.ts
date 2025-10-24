import { useQuery } from "@tanstack/react-query";
import { todoApi } from "./client";

export function useTodos() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: todoApi.getAll,
  });
}
