import React from "react";
import TaskItem from "../TaskItem/taskItem.js";
import { TransitionGroup, CSSTransition } from "react-transition-group";


const TaskList = ({tasks, title}) => {    
    if(!tasks && !title) {
        return (
            <div>There is an error in th 'TaskList' section</div>
        );
    }

    if(!tasks.length){
        return (
            <h1 className="list-header">There is nothing</h1>
        );
    }

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
            <h2 className='list-header'>{title}</h2>
            <TransitionGroup>
            {renderedTasks}
            </TransitionGroup>
        </section>
    );
};

export default TaskList;