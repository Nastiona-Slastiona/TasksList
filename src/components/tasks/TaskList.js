import React from "react";
import TaskItem from "./TaskItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";


const TaskList = ({tasks, title}) => {    
    if(!tasks.length){
        return (
            <h1 className="list-header">There is nothing</h1>
        );
    }

    const renderedTasks = tasks.map((task,index) => (
        <CSSTransition
            key={task.id}
            timeout={500}
            classNames="task"
        >
            <TaskItem number={index + 1} task={task} key={task.id}/>
        </CSSTransition>
    ))

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