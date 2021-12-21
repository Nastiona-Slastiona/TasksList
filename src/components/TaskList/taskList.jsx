import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useSelector } from "react-redux";

import TaskItem from "../TaskItem/taskItem.jsx";

import './taskList.css';


export default function TaskList({tasks, title}) {    
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
            {status === 'loading' && <h2 className='task-list__header'>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <h2 className='task-list__header'>{title}</h2>
            <TransitionGroup>
                {renderedTasks}
            </TransitionGroup>
        </section>
    );
};