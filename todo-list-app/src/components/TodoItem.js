import React, { useState } from 'react';

const TodoItem = ({ todo, index, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState(todo);

  const handleEdit = () => {
    editTodo(index, updatedTodo);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedTodo.title}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, title: e.target.value })}
            placeholder="Title"
          />
          <textarea
            value={updatedTodo.details}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, details: e.target.value })}
            placeholder="Details"
          />
          <input
            type="date"
            value={updatedTodo.dueDate}
            onChange={(e) => setUpdatedTodo({ ...updatedTodo, dueDate: e.target.value })}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <div>
            <h5>{todo.title}</h5>
            <p>{todo.details}</p>
            <p className="text-muted">Due: {todo.dueDate}</p>
          </div>
          <div className="edit-buttons">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
