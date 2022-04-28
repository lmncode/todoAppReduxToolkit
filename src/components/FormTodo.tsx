import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodo } from "../features/todoSlice";

const FormTodo = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;

    dispatch(
      addTodo({
        id: uuid(),
        title: title,
        status: true,
      })
    );
    setTitle("");
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input
        type={"text"}
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default FormTodo;
