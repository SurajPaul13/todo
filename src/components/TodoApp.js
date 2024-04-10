import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { markAsDone } from '../slices/todoSlice';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import '../styles/index.css';

const TodoApp = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoItems);

  const [toggleView, setViewState] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [memeImage, setMemeImage] = useState('');

  const fetchImageMeme = async () => {
    const options = {
      method: 'GET',
      url: 'https://programming-memes-images.p.rapidapi.com/v1/memes',
      headers: {
        'X-RapidAPI-Key': '85df541ac4msh6c9a8d1d28adde3p132c27jsnbce318edb401',
        'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com',
      },
    };
    setIsLoading(true);
    const response = await axios.request(options);
    const randomNumber = Math.floor(Math.random() * 11);
    const memeList = response.data;
    const memeObject = memeList[randomNumber];
    setMemeImage(memeObject.image);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchImageMeme();
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  const showHideClassName = showModal ? 'display-form-modal' : 'd-none';

  const handleView = () => {
    setViewState(!toggleView);
  };

  const handleMarkAsDone = () => {
    dispatch(markAsDone());
  };

  const EmptyTodoList = () => (
    <>
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
        <h3>Here is a meme for you!</h3>
        <div className="meme-card">
          {isLoading ? (
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          ) : (
            <img src={memeImage} className='meme-image' alt='meme'/>
          )}
        </div>
        <button className='button' disabled={isLoading} onClick={fetchImageMeme}>Generate Meme</button>
      </div>
    </>
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
        {todoList.length > 0 ? (
          <div className="d-flex">
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
              {toggleView ? (
                <i className="fa-solid fa-list"></i>
              ) : (
                <i className="fa-solid fa-table-cells-large"></i>
              )}
            </button>
          </div>
        ) : null}
      </div>
      <FormModal />
      {todoList.length !== 0 ? (
        <TodoList todoList={todoList} toggleView={toggleView} />
      ) : (
        <EmptyTodoList />
      )}
      <button
        type="button"
        className="add-icon"
        title="Add Task"
        onClick={handleShowModal}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
};

export default TodoApp;
