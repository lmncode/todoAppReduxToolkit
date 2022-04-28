import React from "react";
import { useDispatch } from "react-redux";

import {
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
  ListItemIcon,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { removeTodo, updateTodoStatus } from "../features/todoSlice";

interface IProps {
  title: string;
  id: string;
  status: boolean;
}

const TodoItem = ({ title, id, status }: IProps) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleUpdateStatus = () => {
    dispatch(updateTodoStatus(id));
  };

  return (
    <>
      <ListItem
        color="secondary"
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={handleRemoveTodo}>
            <DeleteIcon color="error" />
          </IconButton>
        }
      >
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={status}
            tabIndex={-1}
            onChange={handleUpdateStatus}
          />
        </ListItemIcon>
        {status ? (
          <ListItemText secondary={title} />
        ) : (
          <ListItemText primary={title} />
        )}
      </ListItem>
    </>
  );
};

export default TodoItem;
