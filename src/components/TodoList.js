import React from 'react';
import TodoItem from './TodoItem'

const TodoList = ({todos, onToggle, onDelete}) => {

  return (
    <ul className="todo-items-container">
      {todos.map(todo => <TodoItem key={todo.id} todoItem={todo} onToggle={onToggle} onDelete={onDelete}/>)}
    </ul>
  );
};

export default TodoList;
