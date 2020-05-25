import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import useInputState from "./hooks/useInputState";

export default function ToDoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField value={value} onChange={handleChange} />
      </form>
    </Paper>
  );
}
