import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completedTodo }) => {
  return (
    <section className="wrapper-todo-list">
      {todos.map((el, index) => (
        <Todo
          key={index}
          id={el.id}
          content={el.content}
          completed={el.completed}
          deleteTodo={deleteTodo}
          completedTodo={completedTodo}
        />
      ))}
    </section>
  );
};

export default TodoList;
