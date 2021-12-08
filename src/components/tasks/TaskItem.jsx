import React from "react";
import StyledButton from "../UI/button/StyledButton";
import { useDispatch } from "react-redux";
import { taskRemoved } from "../../features/tasks/tasksSlice";

const TaskItem = (props) => {
  const dispatch = useDispatch();

  const onDeleteClick = (event) => {
    event.preventDefault();
    dispatch(
      taskRemoved(props.task)
  )};

  return (
      <div className="task">
      <div className="task__content">
        <strong>{props.number}. {props.task.title}</strong>
        <div>
          {props.task.body}
        </div>
      </div>
      <div className="task_button-list">
        <input type="checkbox"/>
        <StyledButton onClick={onDeleteClick}>Delete</StyledButton>
      </div>


      </div>
  );
};

export default TaskItem;