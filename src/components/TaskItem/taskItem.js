import React from "react";
import StyledButton from "../UI/Button/styledButton.js";
import { useDispatch } from "react-redux";
import { deleteTasks } from "../../features/Tasks/tasksSlice.js";
import StyledInputCheckbox from "../UI/Input/styledInputCheckbox.js";
import cl from './taskItem.module.css'

const TaskItem = ({task, number}) => {
  if(!task && !number) {
    return (
      <div>There is error in 'TaskItem' section</div>
    );
  }

  const dispatch = useDispatch();

  const onDeleteClick = event => {
    event.preventDefault();
    dispatch(
      deleteTasks(task)
  )};

  return (
    <div className={cl.taskItem}>
      <div className={cl.taskItemText}>
        <strong 
          style={{
            textDecoration: task.completed 
            ? 'line-through': 'none',
          }}
        >
          {number}. {task.title}
        </strong>
        <div className={cl.taskItemBody}>
          {task.body}
        </div>
      </div>
      <div className={cl.taskItemButtons}>
        <StyledInputCheckbox task={task}/>
        <StyledButton onClick={onDeleteClick}>Delete</StyledButton>
      </div>
    </div>
  );
};

export default TaskItem;