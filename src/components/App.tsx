import { Container } from "@mui/material";
import React from "react";

import FormTodo from "./FormTodo";
import TodoList from "./TodoList";

function App() {
  return (
    <Container maxWidth="xs" style={{ paddingTop: "60px" }}>
      <FormTodo />
      <TodoList />
    </Container>
  );
}

export default App;
