import React from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import {useFormik} from 'formik'
import * as Yup from 'yup';

import { Button, Input, Typography } from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { addTodo } from "../features/todoSlice";

const validationSchema = Yup.object({
    todoTitle: Yup.string().required('Title is required')
})

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
        },
        validationSchema,
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
          onBlur={formik.handleBlur}
      />
        <Typography variant={'subtitle1'}>{(formik.touched.todoTitle && formik.errors.todoTitle)? formik.errors.todoTitle: null}</Typography>

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
