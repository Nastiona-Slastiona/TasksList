import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/base/Button/button';
import Input from 'components/base/Input/input';
import { addTask } from 'store/tasks/state/thunks/thunks';


export default function TaskForm() {
    const [task, setTask] = useState({ title: '', body: '' });

    const dispatch = useDispatch();

    const onTitleChanged = e => setTask({ ...task, title: e.target.value });
    const onBodyChanged = e => setTask({ ...task, body: e.target.value });

    const onAddNewTask = event => {
        event.preventDefault();

        if (task.title && task.body) {
            dispatch(addTask(task));
        }

        setTask({ title: '', body: '' });
    };

    return (
        <form>
            <Input
                value={task.title}
                type="text"
                placeholder="Task Name"
                onChange={onTitleChanged}
            />
            <Input
                value={task.body}
                type="text"
                placeholder="Task Description"
                onChange={onBodyChanged}
            />
            <Button onClick={onAddNewTask}>Add Task</Button>
        </form>
    );
}
