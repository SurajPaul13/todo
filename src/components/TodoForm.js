
import React, { useState } from 'react';

const TodoForm = ({onAdd}) => {

  const [userInput, setInput] = useState("")

  const handleUserInput = (event) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(userInput.trim() !== ''){
      onAdd(userInput)
      setInput("")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-user-input"
        placeholder="What needs to be done?"
        onChange={handleUserInput}
        value={userInput}
      />
      <button type="submit" className="button" id="addTodoButton">
        Add
      </button>
    </form>
  );
};

export default TodoForm;
