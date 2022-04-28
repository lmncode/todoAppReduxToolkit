import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ITodoItem } from "../features/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  console.log(todos);
  return (
    <ul>
      {todos.map((item: ITodoItem) => (
        <TodoItem title={item.title} id={item.id} status={item.status} />
      ))}
    </ul>
  );
};

export default TodoList;
