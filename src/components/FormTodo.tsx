import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { Button, Input } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

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
        status: false,
      })
    );
    setTitle("");
  };

  return (
    <form onSubmit={handleAddTodo} style={{ marginBottom: "32px" }}>
      <Input
        value={title}
        style={{ height: "40px", width: "300px" }}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <Button
        variant="contained"
        color="success"
        type="submit"
        style={{ marginLeft: "32px", height: "40px" }}
      >
        <AddOutlinedIcon />
      </Button>
    </form>
  );
};

export default FormTodo;
