import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: Date.now(), content: input, disabled: false });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type todo"
        value={input}
        onChange={handleChange}
        className="add-todo"
      />
      <button className="add-todo">Add Todo</button>
    </form>
  );
};

export default TodoForm;
