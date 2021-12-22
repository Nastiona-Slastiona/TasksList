import { configureStore  } from "@reduxjs/toolkit";

import tasksReducer from 'Store/features/tasks/tasksSlice.jsx'

const store = configureStore({
    reducer:{
        tasks: tasksReducer
    },
});

export default store;