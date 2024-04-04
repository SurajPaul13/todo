import { createSlice } from '@reduxjs/toolkit';

// code issue here - issue with fetching data from local storage

// const storedTodo = localStorage.getItem('todo')
// const initialState = storedTodo ?
// JSON.parse(storedTodo) : {todoItems:[]}

const todoSlice = createSlice({
  name: 'todo',
  initialState: { todoItems: [], selectedCount: 0 },
  reducers: {
    addTodo: (state, actions) => {
      const item = actions.payload;
      state.todoItems = [...state.todoItems, item];
    },
    removeTodo: (state, actions) => {
      const id = actions.payload;
      state.todoItems = state.todoItems.filter((item) => item.id !== id);
    },
    toggleSelect: (state, actions) => {
      const id = actions.payload;
      state.todoItems = state.todoItems.map((item) =>
        item.id !== id ? item : { ...item, isSelected: !item.isSelected }
      );
    },
    markAsDone: (state) => {
      state.todoItems = state.todoItems.filter(
        (eachTodo) => eachTodo.isSelected !== true
      );
    },
    updateTodo: (state, actions) => {
      const { id, editedTask, editedDescription } = actions.payload;
      state.todoItems = state.todoItems.map((item) =>
        item.id !== id
          ? item
          : { ...item, taskName: editedTask, description: editedDescription }
      );
    },
  },
});

export const { addTodo, removeTodo, toggleSelect, markAsDone, updateTodo } =
  todoSlice.actions;
export const todoReducer = todoSlice.reducer;
