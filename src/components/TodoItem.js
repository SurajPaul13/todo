import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import EditiTodo from './EditTodo.js';
import { toggleSelect, removeTodo } from '../slices/todoSlice';
import { useDispatch } from 'react-redux';

const TodoItem = ({ todoItem, toggleView }) => {
  const { id, taskName, description, date, priority, isChecked, isSelected } =
    todoItem;

  const [isEditing, setIsEditing] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };

  const dispatch = useDispatch();

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

  const onDelete = () => dispatch(removeTodo(id));

  const priorityColors = {
    Low: '#eaf7e2',
    Medium: '#f8e9d4',
    High: '#f8d7d7',
  };

  const bgLabelColor = priorityColors[priority];

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
            <div className="task-name-container d-flex flex-column justify-content-end align-items-start">
              <p className="task-name">{taskName}</p>
              <p className="todo-date">
                Due on : {<span className="due-date">{date}</span>}
              </p>
            </div>
            <p>{description}</p>
          </label>
          <img
            alt="priority mark"
            className={`${
              priority === 'High'
                ? 'display-priority-mark'
                : 'hide-priority-mark'
            }`}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD/UlEQVR4nO2aXWgcVRTHT6zF4psPImithSLSIiLO5qMzN27ZSUlIsveuhU0NLTRBm0aabLrZbmjsJtkkvvTBFz/wQX0QUTE+6JM+FbG1UEFUKrjdlJTSEDSaBsQ2Id17e+RuJl/snexLbOvJ/OC87M7M7v/H3LNnZhYgICAgICAg4G6BiczTqmfgY9WbvabSo/Py5MiCTA1PYXLwc+zsfxYoI7v7W3ToO32jaCqVfmNBHj91BCiCPZndMj0y5xd+qaRon0M7tguogScGPi0XXh3uQsWErneAGurk8JQOid9eQFxYQDx7fjF4bxZVZx8q3rYUHiUTV4Aasm+0UBRQKGARKVG5LcuhV5d0xDxQQ3rrH2/NLQpARCXazAKY+BuoIVPDvxcF/DmzIuDVlI8APgHUUL3ZS0UBV66uCEhk/JbA90AN1TNwttj0PvgEcWYW8adfUR14xShAOeILoIYy/Ayqlg4fAfwtoIZKZN4sEXDouM8SiPYDNWRXJlUioD1pFlAr2oAasuvUwRIBx/qMAgq1oh6oga+dtkvG3+7TRgHIos8BNbB7aHuJAD0GGwXEHwVqYHxsi/LG4eVKj5qGoNsIQw8ARVR65K81ApJDhl8APglUUansb2ua4JEek4AfgCoqmf1uzfp346Yp8CugijoxOFYMnxhAVd9qngKZeA+oolo7z6hYO6oXY37hdRMcBKpIFuvwC75KwFGgSsER0XICCizWDFRBm4fKCUAWs4AqWNP0RFkBNn8cqILh8IOScbXO+ld6G6CMZHzaX4D4A6gjGf9lnTPgZ6COcsQ3/j2Afw3UUQ5/d50m+DZQR7LoYd8lYIuDQB1saHhIMpErvQoU4xgOb4PNAO498JRiYkx3fcn4DeXwLzEsdt7r7xUQEHB3QKtjKzJeXbA5188AMPzSdtgMYDy+RTLxumRi1jAFnpu2G58HqiBAhXLEZ+Z7AByvV9VjzorcnAg1VAJFpM0P+Q1Ak8XwbrEuW3WXtCyghmT8nCn8LTu6HH6pSJ4F0uH/mATM1DSWCBi3Ip1ACQSokA6X5U7/FQFuEqghHT7p3fTAGzWNeLVyv17vJeF15UP7XwZqKCY+1OEXu727Xt2eqI48BtRAmz8zXd0wXyY85i33faBK3qprzVmur4S8VXd+ymp+GCgzXhXZczlU91HOcq/lLHcu94I7m7Pci/lKN/GjZW29198vIGDj0A84HgGAHQCwGwD0dFcLAPsAwAUA/U+wJq/qvdf2edtUevvs8I7xv3lYUgEA+tJ2rxeseYOqyTumPvZ9fZ1QtYGh/Up/xn1L1WYXULHZlwCsYqkJPuk1tJDX4MIAEDE0Qf2afk9vo7fV++h9/9Mm+C9UnNl1dOFCCQAAAABJRU5ErkJggg=="
          />
          <div className="delete-icon-container">
            <button className="del-btn mr-2">
              <i
                onClick={() => handleEdit()}
                className="fa-solid fa-pen-to-square"
              ></i>
            </button>
            <button className="del-btn mr-4">
              <i
                className="far fa-trash-alt"
                onClick={() =>
                  priority === 'High' ? handleShow() : onDelete(id)
                }
              ></i>
            </button>
            <Modal show={show} onHide={handleClose} animation={true}>
              <Modal.Header>
                <Modal.Title>Are you sure ?</Modal.Title>
              </Modal.Header>
              <Modal.Body>Click confirm to delete the item !</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="danger" onClick={() => onDelete(id)}>
                  Confirm
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </>
    );
  };

  return (
    <li
      className={`todo-item-container d-flex flex-row ${
        toggleView ? 'col-6' : ''
      }`}
    >
      {isEditing ? (
        <EditiTodo
          id={id}
          saveEdit={saveEdit}
          taskName={taskName}
          description={description}
        />
      ) : (
        <FinalTaskComponent />
      )}
    </li>
  );
};

export default TodoItem;
