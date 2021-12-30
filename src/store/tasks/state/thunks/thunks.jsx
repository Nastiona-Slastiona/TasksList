/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-duplicates */
/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';
import requestHelper from 'src/helpers/requestHelper';


export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (todo, { rejectWithValue, dispatch }) => {
        const task = {
            ...todo,
            taskId: nanoid(),
            completed: false
        };

        try {
            requestHelper
                .post(task)
                .then(addedTask => dispatch({ type: 'tasks/taskAdded', payload: addedTask }));

            return;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async (_, { rejectWithValue }) => {
        try {
            const tasks = requestHelper.get(5);

            return tasks;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeTasks = createAsyncThunk(
    'tasks/removeTasks',
    async (task, { rejectWithValue, dispatch }) => {
        try {
            requestHelper.delete(task);

            dispatch({ type: 'tasks/taskRemoved', payload: task });
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleTasks = createAsyncThunk(
    'tasks/toggleTasks',
    async (task, { rejectWithValue, dispatch, getState }) => {
        const todo = getState().tasks.tasksToDo.find(t => t === task);
        try {
            requestHelper.toggle(todo);

            dispatch({ type: 'tasks/taskToggled', payload: todo });
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
