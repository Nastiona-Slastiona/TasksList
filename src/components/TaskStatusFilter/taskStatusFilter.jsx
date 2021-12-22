import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import Button from "Components/base/Button/button.jsx";
import { statusFilterChanged } from "Store/features/tasks/tasksSlice.jsx";
import { StatusFilter } from "Models/StatusFilter/statusFilter.jsx";

import './taskStatusFilter.css';


export default function TaskStatusFilter() {
    const dispatch = useDispatch();

    const onFilterButtonClick = useCallback((e) => 
        dispatch(statusFilterChanged(e.target
            .attributes
            .status
            .value
        ))
    );

    return (
        <div className={'taskStatusFilterContainer'}>
            <Button status={StatusFilter.All} onClick={onFilterButtonClick}> All </Button>
            <Button status={StatusFilter.Active} onClick={onFilterButtonClick}> Active </Button>
            <Button status={StatusFilter.Completed} onClick={onFilterButtonClick}> Completed </Button>
        </div>
    )
};