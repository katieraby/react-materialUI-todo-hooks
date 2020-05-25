import React, { useState } from "react";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

function ToDoApp() {
  const initialTodos = [
    { id: 1, task: "Clean Fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Wash Hair", completed: false },
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOs with hooks</Typography>
        </Toolbar>
      </AppBar>
      <ToDoForm addTodo={addTodo} />
      <ToDoList todos={todos} />
    </Paper>
  );
}

export default ToDoApp;

// - ToDoApp
//   -ToDoForm
//   -ToDoList
//     -ToDoItem

// id, task, completed
