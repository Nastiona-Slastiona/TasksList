/* eslint-disable import/no-duplicates */
/* eslint-disable consistent-return */
/* eslint-disable no-template-curly-in-string */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';


export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (todo, { rejectWithValue, dispatch }) => {
        const task = {
            ...todo,
            taskId: nanoid(),
            completed: false
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error('ServerError on Adding task');
            }

            const beers = await response.json();

            dispatch({ type: 'tasks/taskAdded', payload: beers });

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
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');

            if (!response.ok) {
                throw new Error('ServerError');
            }

            const beers = await response.json();

            return beers;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeTasks = createAsyncThunk(
    'tasks/removeTasks',
    async (task, { rejectWithValue, dispatch }) => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${task.id}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('ServerError on Delete');
            }

            return dispatch({ type: 'tasks/taskRemoved', payload: task });
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const toggleTasks = createAsyncThunk(
    'tasks/toggleTasks',
    async (todo, { rejectWithValue, dispatch, getState }) => {
        const task = getState().tasks.tasksToDo.find(t => t === todo);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    completed: !task.completed
                })
            });

            if (!response.ok) {
                throw new Error('ServerError on Toggle');
            }

            return dispatch({ type: 'tasks/taskToggled', payload: todo });
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
