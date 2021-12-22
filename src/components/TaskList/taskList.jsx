import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

import TaskItem from "Components/TaskItem/taskItem.jsx";
import { StatusThunk } from "Models/StatusThunk/statusThunk.jsx"

import './taskList.css';


const TaskList = ({tasks, title}) => {    
    if (!tasks.length){
        return (
            <h1 className="task-list__header">The list is empty</h1>
        );
    }
    
    const {status, error} = useSelector(state => state.tasks);

    const renderedTasks = tasks.map((task, index) => {
        return (
            <CSSTransition
                key={task.taskId}
                timeout={500}
                classNames="task"
            >
                <TaskItem number={index + 1} task={task} key={task.taskId}/>
            </CSSTransition>
    )})

    return (
        <section>
            {status === StatusThunk.Loading && <h2 className='task-list__header'>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <h2 className='task-list__header'>{title}</h2>
            <TransitionGroup>
                {renderedTasks}
            </TransitionGroup>
        </section>
    );
};

TaskList.propTypes = {
    task: PropTypes.object,
    title: PropTypes.string
}

export default TaskList;