import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TodoBoard } from "./components/TodoBoard";

const globalQueryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={globalQueryClient}>
      <TodoBoard />
    </QueryClientProvider>
  );
}
