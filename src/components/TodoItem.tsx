import React from "react";

interface IProps {
  title: string;
}

const TodoItem = ({ title }: IProps) => {
  return <li>{title}</li>;
};

export default TodoItem;
