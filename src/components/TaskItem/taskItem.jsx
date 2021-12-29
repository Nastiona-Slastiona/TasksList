/* eslint-disable import/no-extraneous-dependencies */
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import Button from 'components/base/Button/button';
import Input from 'components/base/Input/input';
import PropTypes from 'prop-types';
import { removeTasks, toggleTasks } from 'store/tasks/state/thunks/thunks';

import './taskItem.css';


function TaskItem({ task, number }) {
    const dispatch = useDispatch();
    const doneTaskClassName = classNames({ 'task__item--done': task.completed });

    const onDeleteClick = useCallback(event => {
        event.preventDefault();
        dispatch(removeTasks(task));
    });

    const onCheckedChange = useCallback(() => { dispatch(toggleTasks(task)); });

    return (
        <div className="task__item">
            <div className="task__item-text">
                <strong className={doneTaskClassName}>
                    {number}. {task.title}
                </strong>
                <div className="task__item-body">
                    {task.body}
                </div>
            </div>
            <div className="task__item-buttons">
                <Input
                    task={task}
                    type="checkbox"
                    checked={task.completed}
                    className="input__checkbox"
                    onChange={onCheckedChange}
                />
                <Button onClick={onDeleteClick}>Delete</Button>
            </div>
        </div>
    );
}

TaskItem.propTypes = {
    number: PropTypes.number
};

export default TaskItem;
