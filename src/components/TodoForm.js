import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import '@fortawesome/fontawesome-free/css/all.css';

const TodoForm = ({ handleCloseModal }) => {
  const dispatch = useDispatch();

  const initialFormData = {
    taskName: '',
    description: '',
    date: '',
    priority: 'Low',
  };
  const [formData, setFormData] = useState(initialFormData);

  const { taskName, description, date, priority } = formData;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (taskName.trim() && description.trim() && date) {
      const todoItem = {
        id: Date.now(),
        taskName,
        description,
        date,
        priority,
        isChecked: false,
        isSelected: false,
      };

      dispatch(addTodo(todoItem));
      setFormData(initialFormData);
      handleCloseModal();
    }
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }

    return `${year}-${month}-${day}`;
  };

  const onClickClose = () => handleCloseModal();

  const handleTask = (event) => {
    setFormData({ ...formData, taskName: event.target.value });
  };

  const handleDescription = (event) => {
    setFormData({ ...formData, description: event.target.value });
  };

  const handleDate = (event) => {
    setFormData({ ...formData, date: event.target.value });
  };

  const handlePriority = (event) => {
    setFormData({ ...formData, priority: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h6 className="form-heading">Task Name</h6>
        <input
          type="text"
          className="todo-user-input"
          placeholder="What is the task?"
          onChange={handleTask}
          value={taskName}
        />
      </div>
      <div>
        <h6>Description</h6>
        <textarea
          type="text"
          className="todo-user-input"
          placeholder="What needs to be done?"
          onChange={handleDescription}
          value={description}
        ></textarea>
      </div>
      <div>
        <h6>Due Date</h6>
        <input
          type="date"
          className="calender"
          value={date}
          onChange={handleDate}
          min={getCurrentDate()}
        />
      </div>
      <div className="priority-container">
        <h6>Priority</h6>
        <select
          className="select-container"
          value={priority}
          onChange={handlePriority}
        >
          <option id="1" value="Low">
            Low
          </option>
          <option id="2" value="Medium">
            Medium
          </option>
          <option id="3" value="High">
            High
          </option>
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="button mr-5"
          disabled={!taskName || !description || !date}
          id="addTodoButton"
        >
          Add
        </button>
        <button
          onClick={onClickClose}
          type="button"
          className="button close-modal-button"
          id="closeButton"
        >
          Close
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
