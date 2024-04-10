import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../slices/todoSlice';

const EditTodo = ({ saveEdit, id, taskName, description }) => {

  const dispatch = useDispatch();

  const initialEditForm = {
    editedTaskName: taskName,
    editedDescription: description
  }

  const [editFormData, setEditTodo] = useState(initialEditForm)


  const {editedTaskName, editedDescription} = editFormData

  const handleEditTask = (event) => {
    setEditTodo({...editFormData, editedTaskName: event.target.value})
  };

  const handleEditDescription = (event) =>
  setEditTodo({...editFormData, editedDescription: event.target.value})

  const handleSave = () => {
    dispatch(updateTodo({id, editedTaskName, editedDescription}));
    saveEdit();
  };


  const handleCancel = () => {
    setEditTodo(initialEditForm)
    saveEdit();
  }

  return (
      <form onSubmit={handleSave}>
        <input
          type="text"
          id="editTask"
          className="todo-user-input"
          value={editedTaskName}
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
  );
};

export default EditTodo;
