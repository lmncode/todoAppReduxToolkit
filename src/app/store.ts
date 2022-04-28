import { configureStore } from "@reduxjs/toolkit";
import todos from "../features/todoSlice";

export const store = configureStore({
  reducer: {
    todoList: todos,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
