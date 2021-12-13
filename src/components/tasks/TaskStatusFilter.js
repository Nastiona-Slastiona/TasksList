import React from "react";
import FilterButton from "../UI/button/FilterButton.js";
import cl from '../../styles/Task/task.module.css';


const TaskStatusFilter = () => {
    return (
        <div className={cl.taskStatusContainer}>
            <FilterButton status='all'> All </FilterButton>
            <FilterButton status='active'> Active </FilterButton>
            <FilterButton status='completed'> Completed </FilterButton>
        </div>
    )
};

export default TaskStatusFilter;