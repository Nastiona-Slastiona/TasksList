import React, { useState } from 'react';
import StyledButton from '../UI/Button/styledButton.js';
import StyledInput from '../UI/Input/styledInput.js';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { taskAdded } from '../../features/Tasks/tasksSlice.js';

const TaskForm = () => {
      const [task, setTask] = useState({title: '', body: ''});

      const dispatch = useDispatch();

      const onTitleChanged = e => setTask({...task, title: e.target.value})
      const onBodyChanged = e => setTask({...task, body: e.target.value})

      const onAddNewTask = (event) => {
        event.preventDefault();
        if(task.title && task.body) {
            dispatch(
                taskAdded({
                    id: nanoid(),
                    ...task  
                })
            ) 
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

export default TaskForm;