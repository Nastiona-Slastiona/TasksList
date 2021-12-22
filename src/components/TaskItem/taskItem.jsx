import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import PropTypes from "prop-types";

import { deleteTasks, toggleTasks } from "Store/features/tasks/tasksSlice.jsx";
import Button from "Components/base/Button/button.jsx";
import Input from "Components/base/Input/input.jsx";

import './taskItem.css'


const TaskItem = ({task, number}) => {
	const dispatch = useDispatch();
	const doneTaskClassName = classNames({'task__item--done': task.completed});

	const onDeleteClick = useCallback(event => {
		event.preventDefault();
		dispatch(deleteTasks(task))
	});

	const onCheckedChange = useCallback(() => { dispatch(toggleTasks(task))});

	return (
	<div className={'task__item'}>
		<div className={'task__item-text'}>
			<strong className={doneTaskClassName}>
				{number}. {task.title}
			</strong>
			<div className={'task__item-body'}>
				{task.body}
			</div>
		</div>
		<div className={'task__item-buttons'}>
			<Input 
				task={task}
				type={'checkbox'}
				onChange={onCheckedChange}
				checked={task.completed}
				className={'input__checkbox'}
			/>
			<Button onClick={onDeleteClick}>Delete</Button>
		</div>
	</div>
	);
};

TaskItem.propTypes = {
	task: PropTypes.object,
	number: PropTypes.number
}

export default TaskItem;