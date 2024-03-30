import { createSlice } from "@reduxjs/toolkit";


const storedTodo = localStorage.getItem('todo')
const initialState = storedTodo ? 
JSON.parse(storedTodo) : {todoItems:[]}

console.log(storedTodo)

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action) => {
            const item = action.payload
            state.todoItems= [...state.todoItems, item]
        },
        removeTodo: (state,action) => {
            const removeItem = action.payload
            state.todoItems = state.todoItems.filter(
                item => item.id !== removeItem)
        },
        toggleTodo:(state,action) => {
            const id = action.payload
            state.todoItems = state.todoItems.map(item => item.id !== id ? item : {...item,isChecked:!item.isChecked})

        }
    }
})

export const {addTodo, removeTodo, toggleTodo} = todoSlice.actions
export const todoReducer =  todoSlice.reducer