import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";


const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
};

const initialState = {
    tasksToDo : [],
    status: null,
    error: null,
    filter: {
        status: StatusFilters.All,
    } 
} ;

export const addTask = createAsyncThunk(
    'tasks/addTask',
    async function(todo, {rejectWithValue, dispatch}) {
        const task = {
            ...todo,
            taskId: nanoid(),
            completed: false
        }
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(task)
            });

            if (!response.ok) {
                throw new Error('ServerError on Adding task');
            }

            const data = await response.json();
            dispatch(taskAdded(data));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchTasks = createAsyncThunk(
    'tasks/fetchTasks',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    
            if (!response.ok) {
                throw new Error('ServerError');
            }
    
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const deleteTasks = createAsyncThunk(
    'tasks/deleteTasks',
    async function(task, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/${id}', {
                method: 'DELETE',
            });
    
            if (!response.ok) {
                throw new Error('ServerError on Delete');
            }
    
            dispatch(taskRemoved(task));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

export const toggleTasks = createAsyncThunk(
    'tasks/toggleTasks',
    async function(todo, {rejectWithValue, dispatch, getState}) {
        const task = getState().tasks.tasksToDo.find(t => t === todo);
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/${id}', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    completed: !task.completed,
                })
            });
    
            if (!response.ok) {
                throw new Error('ServerError on Toggle');
            }

            dispatch(taskToggled(task));
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
);

const setError = (state, action) => {
    state.status = 'rejected';
    state.error = action.payload;
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded(state, action) {
            state.tasksToDo.push(action.payload);
        },
        taskToggled(state, action) {
            return {
                ...state,
                tasksToDo: state.tasksToDo.map(toDoAct => {
                    if(toDoAct.id !== action.payload.id) {
                        return toDoAct;
                    }

                    return {
                        ...toDoAct,
                        completed: !toDoAct.completed
                    }
                })
            }
        },
        taskRemoved(state, action) {
            const taskToRemove = state.tasksToDo.find(t => t.taskId === action.payload.taskId);

            if(taskToRemove){
                state.tasksToDo = state.tasksToDo.filter(t => t.taskId !== action.payload.taskId);
                return state;
            }
        },
        statusFilterChanged(state, action) {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    status: action.payload,
                }
            }
        }
    },
    extraReducers: {
        [fetchTasks.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchTasks.fulfilled]: (state, action) => {
            state.status = 'resolved';
            const tasks = Object.assign(action.payload);
            for (let key in tasks) {
                tasks[key].body = 'nothing';
                tasks[key].taskId = nanoid();
            }
            state.tasksToDo = tasks;
        },
        [fetchTasks.rejected]: setError,
        [deleteTasks.rejected]: setError,
        [toggleTasks.rejected]: setError,
    }
});

const {taskRemoved, taskAdded, taskToggled} = tasksSlice.actions;

export const { statusFilterChanged } = tasksSlice.actions;

export const selectAllTasks = state => state.tasks.tasksToDo;

export default tasksSlice.reducer;
