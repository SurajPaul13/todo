import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { markAsDone} from '../slices/todoSlice';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/index.css';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoItems);

  const handleMarkAsDone = () => {
    dispatch(markAsDone());
  };

  const EmptyTodoList = () => (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <h3> No tasks</h3>
    </div>
  );

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <h1 className="create-task-heading">
        Create <span className="create-task-heading-subpart">Task</span>
      </h1>
      <TodoForm />
      <div>
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        {
          <p onClick={() => handleMarkAsDone()} className={`mark-completed`}>
            Mark as done
          </p>
        }
      </div>
      {todoList.length !== 0 ? (
        <TodoList todoList={todoList} />
      ) : (
        <EmptyTodoList />
      )}
    </div>
  );
};

export default TodoApp;
