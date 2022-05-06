import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {useFormik} from 'formik'

import { Button, Input } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { addTodo } from "../features/todoSlice";

const FormTodo = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            todoTitle:''
        },
        onSubmit:(values)=> {
            dispatch(addTodo({
            id:uuid(),
            title:values.todoTitle,
            status:false
        }))
        }
    })



  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
          id={"todoTitle"}
          name={"todoTitle"}
          type={"text"}
        value={formik.values.todoTitle}
        style={{ height: "40px", width: "300px" }}
        onChange={formik.handleChange}
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
