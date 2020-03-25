import React, { useState } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, content: "do some work", complete: false },
    { id: 2, content: "play some games", complete: false }
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleTodo = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const completeTodo = id => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => {
      return todo.id === id;
    });
    todo.complete = !todo.complete;
    setTodos(newTodos, todo);
  };

  const deleteTodo = id => {
    const todo = todos.filter(todo => {
      return todo.id !== id;
    });
    setTodos(todo);
  };

  const addTodo = todo => {
    todo.id = Math.random();
    todo.complete = false;
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  };

  return (
    <div className="todo">
      <Button
        onClick={() => {
          toggleTodo();
        }}
        style={buttonReset}
      >
        <FontAwesomeIcon icon={faCalendarCheck} size="1x" />
      </Button>
      <div className={`todo-list ${isOpen ? "opened" : ""}`}>
        <h4 className="todo-list__title">To Do</h4>
        <div className="todo-list__todos">
          {todos.length ? (
            todos.map(todo => {
              return (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              );
            })
          ) : (
            <p>Empty</p>
          )}
        </div>
        <AddTodo addTodo={addTodo} />
      </div>
    </div>
  );
};

export default TodoList;

const buttonReset = {
  lineHeight: "initial",
  textTransform: "none",
  fontSize: "inherit",
  color: "inherit",
  textShadow: "0 0 10px #666"
};
