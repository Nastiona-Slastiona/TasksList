import React from "react";
import classes from './StyledButton.module.css';
import { useDispatch } from "react-redux";
import { statusFilterChanged } from "../../../features/tasks/tasksSlice";

const FilterButton = ({status, children}) => {
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