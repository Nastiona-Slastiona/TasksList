import React from "react";
import StyledButton from "../UI/button/StyledButton.js";
import { useDispatch } from "react-redux";
import { taskRemoved } from "../../features/tasks/tasksSlice.js";
import StyledInputCheckbox from "../UI/input/StyledInputCheckbox.js";

const TaskItem = ({task, number}) => {
  const dispatch = useDispatch();

  const onDeleteClick = event => {
    event.preventDefault();
    dispatch(
      taskRemoved(task)
  )};

  return (
      <div className="task">
        <div className="task__content">
          <strong 
            style={{
              textDecoration: task.completed 
              ? 'line-through': 'none',
              color: task.color  
            }}
          >
            {number}. {task.title}
          </strong>
        <div>
          {task.body}
        </div>
      </div>
      <div className="task__button-list">
        <StyledInputCheckbox task={task}/>
        <StyledButton onClick={onDeleteClick}>Delete</StyledButton>
      </div>


      </div>
  );
};

export default TaskItem;