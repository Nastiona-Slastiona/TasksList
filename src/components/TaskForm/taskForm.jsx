import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from '../../store/features/tasks/tasksSlice.jsx';
import StyledButton from '../base/Button/button.jsx';
import StyledInput from '../base/Input/input.jsx';


export default function TaskForm() {
    const [task, setTask] = useState({title: '', body: ''});

    const dispatch = useDispatch();

    const onTitleChanged = e => setTask({...task, title: e.target.value})
    const onBodyChanged = e => setTask({...task, body: e.target.value})

    const onAddNewTask = (event) => {
        event.preventDefault();
        if (task.title && task.body) {
            dispatch(addTask(task));
        };

        setTask({title: '', body: ''})
    };

    return (
        <form>
            <StyledInput
                value={task.title} 
                onChange={onTitleChanged}
                type='text' 
                placeholder='Task Name'
            />
            <StyledInput 
                value={task.body} 
                onChange={onBodyChanged}
                type='text' 
                placeholder='Task Description'
            />
            <StyledButton onClick={onAddNewTask}>Add Task</StyledButton>
        </form>
    );
};