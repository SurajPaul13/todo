import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsDone } from '../slices/todoSlice';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/index.css';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoItems);

  const [toggleView, setViewState] = useState(false);

  const handleView = () => setViewState(!toggleView)

  const handleMarkAsDone = () => {
    dispatch(markAsDone());
  };

  const EmptyTodoList = () => (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <h3> No tasks</h3>
      <p className='p-5'>Oops!! No tasks added yet!</p>
    </div>
  );

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <TodoForm />
      <div className="d-flex justify-content-between">
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        <div className='d-flex'>
          <p onClick={() => handleMarkAsDone()} className='mark-completed'>
            Mark as done
          </p>
          <p onClick={() => handleView()} className='mark-completed'>Toggle View</p>
        </div>
      </div>
      {todoList.length !== 0 ? (
        <TodoList todoList={todoList} toggleView={toggleView}/>
      ) : (
        <EmptyTodoList />
      )}
    </div>
  );
};

export default TodoApp;
