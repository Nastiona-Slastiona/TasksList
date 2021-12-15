import React from "react";
import classes from './styledButton.module.css';
import { useDispatch } from "react-redux";
import { statusFilterChanged } from "../../../features/Tasks/tasksSlice.js";

const FilterButton = ({status, children}) => {
    if(!status) {
        return (
            <div>There is an error in the 'FilterButton" section</div>
        );
    }

    const dispatch = useDispatch();

    const onFilterButtonClick = () => dispatch(
        statusFilterChanged(status)
    );

    return (
        <button 
            onClick={onFilterButtonClick}
            className={classes.styledButton}
        >
            {children}
        </button>
    );
};

export default FilterButton;