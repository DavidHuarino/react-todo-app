import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (todo.content.length === 0) {
      return;
    }
    let newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    let newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
  };
  const completedTodo = (id) => {
    let updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updateTodos);
  };
  const removeCompletedTodos = () => {
    let newTodos = todos.filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1 className="todo-title">Todo App React</h1>
      <TodoForm addTodo={addTodo} todos={todos} />
      {todos.length === 0 ? (
        <section className="todo-list-empty">
          <p>No tasks</p>
        </section>
      ) : (
        <>
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            completedTodo={completedTodo}
          />
          <button
            className="btn-todo-all-remove"
            onClick={() => removeCompletedTodos()}
          >
            Remove all done
          </button>
        </>
      )}
    </div>
  );
}

export default App;
