import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setHeading,
  setDescription,
  setDate,
  setPriority,
  resetState,
} from '../slices/formSlice';
import {
  addTodo,
} from '../slices/todoSlice';

const TodoForm = () => {
  const dispatch = useDispatch();

  const { taskName, description, date, priority} = useSelector(
    (state) => state.form
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    if (taskName.trim() !== '' && description.trim() !== '' && date !== '') {
      const todoItem = {
        id: Date.now(),
        taskName,
        description,
        editedTask:taskName,
        editedDescription:description,
        date,
        priority,
        isChecked: false,
        isSelected:false
      };
  
      dispatch(addTodo(todoItem));
      dispatch(resetState());
    }
  };

  const handleHeading = (event) => {
    dispatch(setHeading(event.target.value));
  };

  const handleDescription = (event) => {
    dispatch(setDescription(event.target.value));
  };

  const handleDate = (event) => {
    dispatch(setDate(event.target.value));
  };

  const handlePriority = (event) => {
    dispatch(setPriority(event.target.value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h6 className="form-heading">Task Name</h6>
        <input
          type="text"
          className="todo-user-input"
          placeholder="What is the task?"
          onChange={handleHeading}
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
        <input type="date" className="calender" value={date} onChange={handleDate} />
      </div>
      <div className="priority-container">
        <h6 className="priority-heading">Priority</h6>
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
      <button type="submit" className="button" id="addTodoButton">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
