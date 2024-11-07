import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import SearchBar from './components/SearchBar';



const App = () => {
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map((todo, index) =>
      index === id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((_, index) => index !== id));
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>TODO List</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={filteredTodos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;

