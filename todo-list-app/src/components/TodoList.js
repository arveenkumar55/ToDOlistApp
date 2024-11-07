import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <ul className="list-group mt-3">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
