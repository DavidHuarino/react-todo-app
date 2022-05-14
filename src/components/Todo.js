import React from "react";

const Todo = ({ id, content, completed, deleteTodo, completedTodo }) => {
  return (
    <section className="wrapper-todo">
      <label className="content-input-todo">
        <input
          type="checkbox"
          name=""
          checked={completed}
          onChange={() => completedTodo(id)}
        />
        <p className={completed ? "todo-completed" : ""}>{content}</p>
      </label>
      <div>
        <button onClick={() => deleteTodo(id)} className="todo-btn-remove">
          remove
        </button>
      </div>
    </section>
  );
};

export default Todo;
