import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodoStatus } from "../features/todoSlice";

interface IProps {
  title: string;
  id: string;
  status: boolean;
}

const TodoItem = ({ title, id }: IProps) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  const handleUpdateStatus = () => {
    dispatch(updateTodoStatus(id));
  };

  return (
    <li>
      <p onClick={handleUpdateStatus}>{title}</p>
      <button onClick={handleRemoveTodo}>remove</button>
    </li>
  );
};

export default TodoItem;
