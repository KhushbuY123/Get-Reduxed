import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../app/features/todo/todoSlice";
import crudReducer from "../app/features/crud/crudslice"; 

const store = configureStore({
    reducer: {
        todo: todoReducer,    
        crud: crudReducer 
    }
});

export { store };
