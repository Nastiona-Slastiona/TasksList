import React from "react";
import { useDispatch } from "react-redux";

import { statusFilterChanged } from "../../../store/features/tasks/tasksSlice.jsx";

import  './button.css';


export default function FilterButton({status, children}) {
    const dispatch = useDispatch();

    const onFilterButtonClick = () => dispatch(statusFilterChanged(status));

    return (
        <button 
            onClick={onFilterButtonClick}
            className={'button'}
        >
            {children}
        </button>
    );
};