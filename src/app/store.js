import { configureStore, applyMiddleware  } from "@reduxjs/toolkit";
import tasksReducer from '../features/tasks/tasksSlice.js'
import thunk from "redux-thunk";

const store = configureStore({
    reducer:{
        tasks: tasksReducer
    },
    // middleware: { applyMiddleware(thunk),},
});

export default store;