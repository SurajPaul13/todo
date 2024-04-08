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
  const [listView, setView] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const showHideClassName = showModal
    ? 'form-modal display-block'
    : 'form-modal display-none';

  const handleView = () => {
    setView(!listView);
    setViewState(!toggleView);
  };

  const handleMarkAsDone = () => {
    dispatch(markAsDone());
  };

  const EmptyTodoList = () => (
    <div className="empty-task-container">
      <h3>No Tasks</h3>
      <p>Oops! Looks like there are no tasks added yet.</p>
      <p>
        Start by clicking{' '}
        <span>
          <i className="fa-solid fa-plus"></i>
        </span>{' '}
        icon below.
      </p>
    </div>
  );

  const FormModal = () => (
    <div className={showHideClassName}>
      <div className="modal-main">
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <TodoForm handleCloseModal={handleCloseModal} />
      </div>
    </div>
  );

  return (
    <div className="todos-bg-container">
      <h1 className="todos-heading">Todos</h1>
      <div className="d-flex justify-content-between">
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        {todoList.length !== 0 ? <div className="d-flex">
          <button
            onClick={handleMarkAsDone}
            title="Mark Complete"
            className="mark-completed"
          >
            <i className="fa-solid fa-check-double"></i>
          </button>
          <button
            onClick={handleView}
            title="Toggle View"
            className="mark-completed"
          >
            {listView ? (
              <i className="fa-solid fa-list"></i>
            ) : (
              <i className="fa-solid fa-table-cells-large"></i>
            )}
          </button>
        </div> : null}
      </div>
      {<FormModal />}
      {todoList.length !== 0 ? (
        <TodoList todoList={todoList} toggleView={toggleView} />
      ) : (
        <EmptyTodoList />
      )}
      <button type='button' className="add-icon" title="Add Task" onClick={handleShowModal}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoApp;
