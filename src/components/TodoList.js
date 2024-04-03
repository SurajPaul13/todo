import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, onDelete, onFinishEditing }) => {
  return (
    <ul className="todo-items-container">
      {todoList.map((each) => (
        <TodoItem key={each.id} todoItem={each} />
      ))}
    </ul>
  );
};

export default TodoList;
