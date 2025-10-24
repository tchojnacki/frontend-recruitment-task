import axios from "axios";
import type { CreateTodoReq, Todo, UpdateTodoReq } from "../types/todo";
import { TodoListSchema, TodoSchema } from "./schemas";

export const API_URL = `http://localhost:3000`;

// NOTE: using axios only to remove some fetch API's boilerplate, it could be trivially rewritten using fetch

export const todoApi = {
  async getAll() {
    const res = await axios.get(`${API_URL}/todos`);
    return TodoListSchema.parseAsync(res.data);
  },
  async create(req: CreateTodoReq) {
    const res = await axios.post(`${API_URL}/todos`, req);
    return TodoSchema.parseAsync(res.data);
  },
  async update(req: UpdateTodoReq) {
    const { id, ...updates } = req;
    const res = await axios.put(`${API_URL}/todos/${id}`, updates);
    return TodoSchema.parseAsync(res.data);
  },
  async delete(id: Todo["id"]) {
    // NOTE: the DELETE all endpoint returns 201 Created, weird
    await axios.delete(`${API_URL}/todos/${id}`);
  },
};
