import React, { useEffect, useRef, useState } from "react";

const TodoForm = ({ addTodo, todos }) => {
  const [input, setInput] = useState("");
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
  }, [todos]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newInput = input.trim().replace(/^\w/, (c) => c.toUpperCase());
    addTodo({ id: Date.now(), content: newInput, completed: false });
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Type todo"
        value={input}
        onChange={handleChange}
        className="add-todo"
        ref={textInput}
      />
      <button className="btn-add-todo">Add Todo</button>
    </form>
  );
};

export default TodoForm;
