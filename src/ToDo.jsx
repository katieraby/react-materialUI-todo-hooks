import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default function ToDo({ task, completed, removeTodo, id, toggleTodo }) {
  return (
    <ListItem>
      <Checkbox
        checked={completed}
        tabIndex={-1}
        onClick={() => {
          toggleTodo(id);
        }}
      />
      <ListItemText
        style={{ textDecoration: completed ? "line-through" : "none" }}
      >
        {task}
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label="Edit">
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => removeTodo(id)}>
          <DeleteIcon aria-label="Delete" />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}
