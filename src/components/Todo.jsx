import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ todo, deleteTodo, completeTodo }) => {
  return (
    <div className="todo-list__todo">
      <span
        onClick={() => {
          completeTodo(todo.id);
        }}
        className={todo.complete ? "complete" : ""}
      >
        <FontAwesomeIcon
          icon={todo.complete ? faCheckCircle : faCircle}
          size="lg"
        />
      </span>
      <span className={todo.complete ? "complete" : null}>{todo.content}</span>
      <span
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </span>
    </div>
  );
};

export default Todo;
