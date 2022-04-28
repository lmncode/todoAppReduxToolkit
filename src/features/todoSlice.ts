import { createSlice } from "@reduxjs/toolkit";

interface ITodos {
  todos: ITodoItem[];
}

interface ITodoItem {
  id: string;
  title: string;
  description: string;
  status: boolean;
}

const initialState: ITodos = {
  todos: [],
};

const todoSLice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todoSLice.reducer;
