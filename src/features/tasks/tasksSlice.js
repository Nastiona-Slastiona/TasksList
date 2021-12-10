import { createSlice } from "@reduxjs/toolkit";
import filtersReducer from "../filters/filtersSlice";

export const StatusFilters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
};

const initialState = {
    tasksToDo : [
        {id:1, title: 'JavaScript', body: 'JavaScript - programming language', completed: true },
        {id:2, title: 'JavaScript2', body: 'JavaScript - programming language', completed: false, color: 'blue' },
        {id:3, title: 'JavaScript3', body: 'JavaScript - programming language', completed: false, color: 'orange' },
    ],
    filter: {
        status: StatusFilters.All,
        colors: []
    } 
} ;

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
            const id = action.payload.id;
            const taskToRemove = state.tasksToDo.find(t => t.id === id);
            if(taskToRemove){
                state.tasksToDo = state.tasksToDo.filter(t => t.id !== id);
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
        },
        filtersReducer
    }
});

export const { taskAdded, taskRemoved, taskToggled, statusFilterChanged } = tasksSlice.actions;

export default tasksSlice.reducer;
