import React, { useState } from 'react';
import EditiTodo from './EditTodo.js';
import { toggleSelect, removeTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

const TodoItem = ({ todoItem, toggleView }) => {
  const {
    id,
    taskName,
    description,
    date,
    priority,
    isChecked,
    isSelected,
  } = todoItem;

  const [isEditing, setIsEditing] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const { t } = useTranslation();

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const selectCheckbox = () => {
    if (priority !== 'High') {
      dispatch(toggleSelect(id));
    } else {
      console.log('onSelect');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => setIsEditing(false);

  const onDelete = () => {
    dispatch(removeTodo(id));
  };

  const priorityColors = {
    Low: '#eaf7e2',
    Medium: '#f8e9d4',
    High: '#f8d7d7',
  };

  const bgLabelColor = priorityColors[priority];

  const DisplayEditTodo = () => {
    return (
      <div className={`${isEditing ? 'edit-todo-modal' : 'd-none'}`}>
        <div className="modal-main">
          <EditiTodo
            id={id}
            saveEdit={saveEdit}
            taskName={taskName}
            description={description}
          />
        </div>
      </div>
    );
  };

  const FinalTaskComponent = () => {
    
    return (
      <>
        <input
          type="checkbox"
          id={id}
          onChange={selectCheckbox}
          checked={isSelected}
          className="checkbox-input"
        />
        <div
          className="label-container d-flex flex-row justify-content-between align-items-center"
          style={{ backgroundColor: bgLabelColor }}
        >
          <label
            htmlFor={id}
            className={`checkbox-label ${isChecked ? 'checked' : ''}`}
          >
            <div className=" d-flex flex-column justify-content-end align-items-start">
              <p className="task-name">{taskName}</p>
              <p className="todo-date">
                {t('due_on')}{' '}{<span className="due-date">{date}</span>}
              </p>
            </div>
            <p className="description">{description}</p>
          </label>
          {priority === 'High' ? (
            <i className="fa-regular fa-exclamation priority-icon"></i>
          ) : null}
          <div
            className={`d-flex ${
              toggleView ? 'flex-column' : ''
            } justify-content-center align-items-center`}
          >
            <button className="del-btn mr-2">
              <i
                onClick={() => handleEdit()}
                className="fa-solid fa-pen-to-square"
              ></i>
            </button>
            <button className="del-btn mr-2">
              <i
                className="far fa-trash-alt"
                onClick={() =>
                  priority === 'High' ? handleShow() : onDelete(id)
                }
              ></i>
            </button>
            <div
              className={`confirmation-modal ${
                show
                  ? 'd-flex justify-content-center align-items-center'
                  : 'd-none'
              }`}
            >
              <div className="confirmation-card">
                <h3>{t('are_you_sure')}</h3>
                <p>{t('click_confirm')}</p>
                <div className="d-flex justify-content-end">
                  <button className="button mr-2" onClick={handleClose}>
                    {t('cancel')}
                  </button>
                  <button
                    className="button close-modal-button"
                    onClick={onDelete}
                  >
                    {t('confirm')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <li className={`todo-item-container d-flex ${toggleView ? 'col-6' : ''}`}>
      {isEditing ? <DisplayEditTodo /> : null}
      <FinalTaskComponent />
    </li>
  );
};

export default TodoItem;
