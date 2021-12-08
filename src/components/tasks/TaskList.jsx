import React from "react";
import TaskItem from "./TaskItem";
import {TransitionGroup, CSSTransition} from "react-transition-group";

const TaskList = ({tasks, title, remove}) => {
    if(!tasks.length){
        return (
            <h1 className="list-header">There is nothing</h1>
        );
    }
    return (
        <div>
            <h1 className='list-header'>{title}</h1>
            <TransitionGroup>
                {tasks.map((task, index) =>
                     <CSSTransition
                        key={task.id}
                        timeout={500}
                        classNames="task"
                    >
                    <TaskItem remove={remove} number={index + 1} task={task} key={task.id}/>
                    </CSSTransition>
                )}
            </TransitionGroup>
        </div>
    );

};

export default TaskList;