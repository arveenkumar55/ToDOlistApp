import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: '', details: '', dueDate: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.title && todo.details && todo.dueDate) {
      addTodo(todo);
      setTodo({ title: '', details: '', dueDate: '' }); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex', gap: '15px', margin: '10px'// Space between items
    }}>
      <input
        type="text"
        placeholder="Title"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Details"
        value={todo.details}
        onChange={(e) => setTodo({ ...todo, details: e.target.value })}
        required
      />
      <input
        type="date"
        value={todo.dueDate}
        onChange={(e) => setTodo({ ...todo, dueDate: e.target.value })}
        required
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
