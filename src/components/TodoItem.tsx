import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

interface IProps {
  title: string;
  id: string;
}

const TodoItem = ({ title, id }: IProps) => {
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <li>
      <p>{title}</p>
      <button onClick={handleRemoveTodo}>remove</button>
    </li>
  );
};

export default TodoItem;
