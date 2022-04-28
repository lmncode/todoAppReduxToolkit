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
  },
});

export default todoSLice.reducer;

export const { addTodo } = todoSLice.actions;
