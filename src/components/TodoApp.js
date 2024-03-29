import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/index.css';

const TodoApp = () => {

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <TodoForm />
      <h1 className="todo-items-heading">
        My <span className="todo-items-heading-subpart">Tasks</span>
      </h1>
      <TodoList />
    </div>
  );
};

export default TodoApp;
