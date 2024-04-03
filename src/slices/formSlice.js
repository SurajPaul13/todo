import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  taskName: '',
  description: '',
  date: '',
  priority: 'Low',
  editedTask: '',
  editedDescription: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setHeading: (state, actions) => {
      state.taskName = actions.payload;
    },
    setDescription: (state, actions) => {
      state.description = actions.payload;
    },
    setDate: (state, actions) => {
      state.date = actions.payload;
    },
    setPriority: (state, actions) => {
      state.priority = actions.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setHeading,
  setDescription,
  setDate,
  setPriority,
  resetState,
} = formSlice.actions;
export const formReducer = formSlice.reducer;
