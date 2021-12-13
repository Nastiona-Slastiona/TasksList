import React from "react";
import classes from './StyledInput.module.css';
import { useDispatch } from "react-redux";
import { taskToggled } from "../../../features/tasks/tasksSlice.js";

const StyledInputCheckbox = ({task}) => {
    const dispatch = useDispatch();

    const toggle = () => {
        const checkbox = document.getElementsByClassName(classes.styledInputCheckbox);
        checkbox.checked = !checkbox.checked;
        dispatch(
          taskToggled(task)
    )};
    
    return (
        <input type="checkbox" onChange={toggle} checked={task.completed} className={classes.styledInputCheckbox}/>
    );
};

export default StyledInputCheckbox;