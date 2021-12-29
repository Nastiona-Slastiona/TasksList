import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/base/Button/button';
import StatusFilter from 'models/statusFilter';

import './taskStatusFilter.css';


export default function TaskStatusFilter() {
    const dispatch = useDispatch();

    const onFilterButtonClick = useCallback(e => dispatch({
        type: 'tasks/filterStatusChanged',
        payload: e.target
            .attributes
            .status
            .value
    }));

    return (
        <div className="taskStatusFilterContainer">
            <Button status={StatusFilter.All} onClick={onFilterButtonClick}> All </Button>
            <Button status={StatusFilter.Active} onClick={onFilterButtonClick}> Active </Button>
            <Button status={StatusFilter.Completed} onClick={onFilterButtonClick}> Completed </Button>
        </div>
    );
}
