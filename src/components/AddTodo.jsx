import React, { useState } from "react";

const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    content: ""
  });

  const handleChange = e => {
    setTodo({ content: e.target.value });
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (todo.content) {
      addTodo(todo);
      setTodo({ content: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={handleChange}
        value={todo.content}
        placeholder="Add To Do"
      />
    </form>
  );
};

export default AddTodo;
