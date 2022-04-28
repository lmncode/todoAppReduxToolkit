import React from "react";
import { List, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "../app/store";
import { ITodoItem } from "../features/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  return (
    <Card>
      <List dense>
        {todos.length ? (
          todos.map((item: ITodoItem) => (
            <TodoItem
              title={item.title}
              id={item.id}
              status={item.status}
              key={item.id}
            />
          ))
        ) : (
          <Typography textAlign="center" variant="h6">
            No todo
          </Typography>
        )}
      </List>
    </Card>
  );
};

export default TodoList;
