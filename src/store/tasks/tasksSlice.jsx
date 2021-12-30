/* eslint-disable guard-for-in */

import { createSlice, nanoid } from '@reduxjs/toolkit';
import StatusFilter from 'models/statusFilter';
import ThunkStatus from 'models/thunkStatus';
import filterStatusChanged from 'store/reducers/filter/filterStatusChanged';
import taskAdded from 'store/reducers/tasks/taskAdded';
import taskRemoved from 'store/reducers/tasks/taskRemoved';
import taskToggled from 'store/reducers/tasks/taskToggled';
import { addTask, fetchTasks, removeTasks, toggleTasks } from 'store/tasks/state/thunks/thunks';


const initialState = {
    tasksToDo: [],
    status: null,
    error: null,
    filter: {
        status: StatusFilter.All
    }
};

const setError = (state, action) => {
    state.status = ThunkStatus.Rejected;
    state.error = action.payload;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded,
        taskToggled,
        taskRemoved,
        filterStatusChanged
    },
    extraReducers: {
        [fetchTasks.pending]: state => {
            state.status = ThunkStatus.Loading;
            state.error = null;
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.status = ThunkStatus.Resolved;
            const tasks = Object.assign(action.payload);

            for (const key in tasks) {
                tasks[key].body = 'nothing';
                tasks[key].taskId = nanoid();
            }

            state.tasksToDo = tasks;
        },
        [fetchTasks.rejected]: setError,
        [addTask.rejected]: setError,
        [removeTasks.rejected]: setError,
        [toggleTasks.rejected]: setError
    }
});

export const selectAllTasks = state => state.tasks.tasksToDo;

export default tasksSlice.reducer;
