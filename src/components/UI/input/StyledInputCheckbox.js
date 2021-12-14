import React from "react";
import classes from './styledInput.module.css';
import { useDispatch } from "react-redux";
import { toggleTasks } from "../../../features/Tasks/tasksSlice.js";

const StyledInputCheckbox = ({task}) => {
    const dispatch = useDispatch();

    const toggle = () => {
        const checkbox = document.getElementsByClassName(classes.styledInputCheckbox);
        checkbox.checked = !checkbox.checked;
        dispatch(
          toggleTasks(task)
        )};
    
    return (
        <input type="checkbox" onChange={toggle} checked={task.completed} className={classes.styledInputCheckbox}/>
    );
};

export default StyledInputCheckbox;