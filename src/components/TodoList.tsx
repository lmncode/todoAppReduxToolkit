import React from "react";
import { List, Card, Typography } from "@mui/material";
import { useSelector } from "react-redux";

import { RootState } from "../app/store";
import { ITodoItem } from "../features/todoSlice";

import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state: RootState) => state.todoList.todos);
  const completedTasks = todos.filter((item) => !item.status);
  const unCompletedTasks = todos.filter((item) => item.status);
  return (
    <Card>
      <List dense>
        {completedTasks.length ? (
          completedTasks.map((item: ITodoItem) => (
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
      <List dense>
        {unCompletedTasks.length ? (
          unCompletedTasks.map((item: ITodoItem) => (
            <TodoItem
              title={item.title}
              id={item.id}
              status={item.status}
              key={item.id}
            />
          ))
        ) : (
          <Typography textAlign="center" variant="h6">
            No completed tasks
          </Typography>
        )}
      </List>
    </Card>
  );
};

export default TodoList;
