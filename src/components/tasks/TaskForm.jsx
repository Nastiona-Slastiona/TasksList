import React, { useState } from 'react';
import StyledButton from '../UI/button/StyledButton';
import StyledInput from '../UI/input/StyledInput';

const TaskForm = ({create}) => {

      const [task, setTask] = useState({title: '', body: ''})
      const addNewTask = (event) => {
        event.preventDefault();
        const newTask = {
            ...task, id: Date.now()

        }
        create(newTask);
        setTask({title: '', body: ''})
      }
    return (
        <form>
            <StyledInput
                value={task.title} 
                onChange={event => setTask( {...task, title: event.target.value} )}
                type='text' 
                placeholder='Task Name'
            />
            <StyledInput 
                value={task.body} 
                onChange={event => setTask( {...task, body: event.target.value} )}
                type='text' 
                placeholder='Task Description'
            />
            <StyledButton onClick={addNewTask}>Add Task</StyledButton>
        </form>
    
    );

};

export default TaskForm;