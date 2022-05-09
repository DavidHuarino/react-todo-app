import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <section>
      <ul>
        {todos.map((el, index) => (
          <Todo
            key={index}
            id={el.id}
            content={el.content}
            disabled={el.disabled}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
