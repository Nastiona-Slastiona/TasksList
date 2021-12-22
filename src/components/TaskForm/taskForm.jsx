import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTask } from 'Store/features/tasks/tasksSlice.jsx';
import Button from 'Components/base/Button/button.jsx';
import Input from 'Components/base/Input/input.jsx';


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
            <Input
                value={task.title} 
                onChange={onTitleChanged}
                type='text' 
                placeholder='Task Name'
            />
            <Input 
                value={task.body} 
                onChange={onBodyChanged}
                type='text' 
                placeholder='Task Description'
            />
            <Button onClick={onAddNewTask}>Add Task</Button>
        </form>
    );
};