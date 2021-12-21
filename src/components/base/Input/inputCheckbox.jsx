import React from "react";
import { useDispatch } from "react-redux";

import { toggleTasks } from "../../../store/features/tasks/tasksSlice.jsx";

import './input.css';


export default function InputCheckbox({task}) {
    const dispatch = useDispatch();

    const toggle = () => {
        dispatch( toggleTasks(task) )};
    
    return (
        <input 
            type="checkbox" 
            onChange={toggle} 
            checked={task.completed} 
            className={'input__checkbox'}/>
    );
};