import React from "react";
import { useDispatch } from "react-redux";

import { deleteTasks } from "../../store/features/tasks/tasksSlice.jsx";
import StyledButton from "../base/Button/button.jsx";
import StyledInputCheckbox from "../base/Input/inputCheckbox.jsx";

import './taskItem.css'


export default function TaskItem({task, number}) {
	const dispatch = useDispatch();

	const onDeleteClick = event => {
		event.preventDefault();
		dispatch(deleteTasks(task))
	};

	return (
	<div className={'task__item'}>
		<div className={'task__item-text'}>
			<strong 
				style={{
				textDecoration: task.completed 
				? 'line-through': 'none',
				}}
			>
				{number}. {task.title}
			</strong>
			<div className={'task__item-body'}>
				{task.body}
			</div>
		</div>
		<div className={'task__item-buttons'}>
			<StyledInputCheckbox task={task}/>
			<StyledButton onClick={onDeleteClick}>Delete</StyledButton>
		</div>
	</div>
	);
};