import { configureStore  } from "@reduxjs/toolkit";

import tasksReducer from './features/tasks/tasksSlice.jsx'

const store = configureStore({
    reducer:{
        tasks: tasksReducer
    },
});

export default store;