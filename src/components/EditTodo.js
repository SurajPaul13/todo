import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../slices/todoSlice';

const EditTodo = ({ saveEdit, id, taskName, description }) => {

  const dispatch = useDispatch();

  const [editedTask, setEditedTask] = useState(taskName);
  const [editedDescription, setEditedDescription] = useState(description);

  const handleSave = () => {
    dispatch(updateTodo({id, editedTask, editedDescription}));
    saveEdit();
  };

  const handleCancel = () => {
    setEditedTask(taskName);
    setEditedDescription(description);
    saveEdit();
  }

  const handleEditTask = (event) => {
    setEditedTask(event.target.value);
  };

  const handleEditDescription = (event) =>
    setEditedDescription(event.target.value);

  return (
    <div>
      <form onSubmit={handleSave}>
        <input
          type="text"
          id="editTask"
          className="todo-user-input"
          value={editedTask}
          onChange={handleEditTask}
        />
        <textarea
          id="editDescription"
          className="todo-user-input"
          value={editedDescription}
          onChange={handleEditDescription}
        ></textarea>
        <div>
          <button
            className="button save"
            type="submit"
            onClick={handleSave}
          >
            Save
          </button>
          <button className="button cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTodo;
