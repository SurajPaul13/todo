import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoList, toggleView }) => {

  return (
    <ul className={`todo-items-container ${toggleView ? 'd-flex flex-row':''}`}>
      {todoList.map((each) => (
        <TodoItem key={each.id} todoItem={each} toggleView={toggleView}/>
      ))}
    </ul>
  );
};

export default TodoList;
