import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toDoActions : [
        {id:1, title: 'JavaScript1', body: 'JavaScript - programming language', completed: true },
        {id:2, title: 'JavaScript2', body: 'JavaScript - programming language', completed: false, color: 'blue' },
        {id:3, title: 'JavaScript3', body: 'JavaScript - programming language', completed: false, color: 'blue' },
    ],
    filters: {
        status: 'All',
        colors: []
    }    
} 

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        taskAdded(state, action) {
            state.toDoActions.push(action.payload);
        },
        taskToggled(state, action) {
            return {
                ...state,
                toDoActions: state.toDoActions.map(toDoAct => {
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
            const taskToRemove = state.toDoActions.find(t => t.id === id);
            if(taskToRemove){
                state.toDoActions = state.toDoActions.filter(t => t.id !== id);
                return state;
            }
        },
        taskStatusFilterChanged(state, action) {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    status: action.payload
                }
            }
        }
    }
});

export const { taskAdded, taskRemoved, taskToggled } = tasksSlice.actions;

export default tasksSlice.reducer;
