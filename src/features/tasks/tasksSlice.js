import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:1, title: 'JavaScript1', body: 'JavaScript - programming language'},
    {id:2, title: 'JavaScript2', body: 'JavaScript - programming language'},
    {id:3, title: 'JavaScript3', body: 'JavaScript - programming language'},
];

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {}
});

export default tasksSlice.reducer;
