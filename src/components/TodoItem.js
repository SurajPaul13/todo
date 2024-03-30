import React from 'react';

const TodoItem = ({ todoItem, onDelete, onToggle }) => {
  const { id, isChecked } = todoItem;

  const toggleCheckbox = () => {
    onToggle(id);
  };

  return (
    <li className="todo-item-container d-flex flex-row">
      <input
        type="checkbox"
        id={id}
        onChange={toggleCheckbox}
        checked={isChecked}
        className='checkbox-input'
      />
      <div className="label-container d-flex flex-row justify-content-between align-items-center">
        <label htmlFor={id} className={`checkbox-label ${isChecked ? 'checked' : ''}`}>
          {todoItem.text}
        </label>
        <div className="delete-icon-container">
          <i className="far fa-trash-alt delete-icon" onClick={() => onDelete(id)}></i>
        </div>
      </div>
    </li>
  );
};

export default TodoItem;
