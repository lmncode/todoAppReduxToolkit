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
  todos: [],
};

const todoSLice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodoItem>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodoStatus: (state, action: PayloadAction<string>) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) todo.status = !todo.status;
      });
    },
  },
});

export default todoSLice.reducer;

export const { addTodo, removeTodo, updateTodoStatus } = todoSLice.actions;
