import React, { useState } from 'react';

const TodoForm = () => {

  return (
    <form >
      <input
        type="text"
        className="todo-user-input"
        placeholder="What needs to be done?"
      />
      <button type="submit" className="button" id="addTodoButton">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
