import { configureStore } from "@reduxjs/toolkit";
import {todoReducer} from './slices/todoSlice'
import {formReducer} from './slices/formSlice'

export const store = configureStore({
    reducer: {
        todo:todoReducer,
        form:formReducer
    }
})

