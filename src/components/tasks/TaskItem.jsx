import React from "react";
import StyledButton from "../UI/button/StyledButton";

const TaskItem = (props) => {
    return (
        <div className="task">
        <div className="task__content">
          <strong>{props.number}. {props.task.title}</strong>
          <div>
            {props.task.body}
          </div>
        </div>
        <div className="task_button-list">
          <StyledButton onClick={() =>props.remove(props.task) }>Delete</StyledButton>
        </div>


        </div>
    );
};

export default TaskItem;