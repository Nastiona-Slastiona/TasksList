/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import TaskItem from 'components/TaskItem/taskItem';
import ThunkStatus from 'models/thunkStatus';
import PropTypes from 'prop-types';

import './taskList.css';


function TaskList({ tasks, title }) {
    if (!tasks.length) {
        return (
            <h1 className="task-list__header">The list is empty</h1>
        );
    }

    const { status, error } = useSelector(state => state.tasks);

    const renderedTasks = tasks.map((task, index) => {
        return (
            <CSSTransition
                key={task.taskId}
                timeout={500}
                classNames="task"
            >
                <TaskItem key={task.taskId} number={index + 1} task={task} />
            </CSSTransition>
        );
    });

    return (
        <section>
            {status === ThunkStatus.Loading && <h2 className="task-list__header">Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}
            <h2 className="task-list__header">{title}</h2>
            <TransitionGroup>
                {renderedTasks}
            </TransitionGroup>
        </section>
    );
}

TaskList.propTypes = {
    title: PropTypes.string
};

export default TaskList;
