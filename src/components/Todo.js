import React from "react";

const Todo = ({ id, content, disabled, deleteTodo }) => {
  return (
    <li>
      {content}
      <div>
        <button onClick={() => deleteTodo(id)}>Remove</button>
      </div>
    </li>
  );
};

export default Todo;
