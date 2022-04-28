import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ITodos {
  todos: ITodoItem[];
}

export interface ITodoItem {
  id: string;
  title: string;
  description?: string;
  status: boolean;
}

const initialState: ITodos = {
  todos: [
    {
      id: "task1",
      title: "Task",
      status: false,
    },
  ],
};

const todoSLice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todos.unshift(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodoStatus: (state, action: PayloadAction<string>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.status = !todo.status;
        }
      });
    },
  },
});

export default todoSLice.reducer;

export const { addTodo, removeTodo, updateTodoStatus } = todoSLice.actions;
