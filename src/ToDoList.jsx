import React from "react";
import ToDo from "./ToDo";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

export default function ToDoList({ todos, removeTodo, toggleTodo }) {
  return (
    <Paper>
      <List>
        {todos.map((todo) => (
          <>
            <ToDo
              task={todo.task}
              key={todo.id}
              id={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  );
}
