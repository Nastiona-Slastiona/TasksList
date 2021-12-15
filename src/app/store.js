import { configureStore  } from "@reduxjs/toolkit";
import tasksReducer from '../features/Tasks/tasksSlice.js'

const store = configureStore({
    reducer:{
        tasks: tasksReducer
    },
});

export default store;