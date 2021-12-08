import React from "react";
import classes from './StyledInput.module.css';
import { useDispatch } from "react-redux";
import { taskToggled } from "../../../features/tasks/tasksSlice";

const StyledInputCheckbox = (props) => {
    const dispatch = useDispatch();

    const toggle = (event) => {
        const checkbox = document.getElementsByClassName(classes.styledInputCheckbox);
        alert(checkbox.checked);
        checkbox.checked = !checkbox.checked;
        event.preventDefault();
        dispatch(
          taskToggled(props)
    )};

    return (
        <input type="checkbox" className={classes.styledInputCheckbox}/>
    );
};

export default StyledInputCheckbox;