import React, { useCallback } from "react";
import PropTypes from "prop-types";

import Input from "Components/base/Input/input.jsx";
import TaskFilterSelector from "Components/base/TaskFilterSelector/taskFilterSelector.jsx";
import TaskStatusFilter from "Components/TaskStatusFilter/taskStatusFilter.jsx";

import './taskFilter.css';


const TaskFilter = ({filter, setFilter}) => {
    const onInputChange = useCallback(event => setFilter({...filter, searchQuery: event.target.value}), [filter])
    const onFilterChange = useCallback(event => setFilter({...filter, selectedSort: event.target.value }), [filter])

    return (
        <div className={'task__filter-container'}>
            <hr className="task__filter-separator"/>
            <Input 
                value={filter.searchQuery}
                onChange={onInputChange}
                placeholder="search for..."/>
            <div className="task__filter-selector-section">
                <TaskFilterSelector
                    value={filter.selectedSort}
                    onChange={onFilterChange}
                    defaultValue="Sort by"
                    options={[
                        {value: 'title', name: 'by name'},
                        {value: 'body', name: 'by description'}
                    ]}
                />
                <TaskStatusFilter/>
            </div>
            <hr className="task__filter-separator"/>
        </div>
    )
};

TaskFilter.propTypes = {
    filter: PropTypes.object,
    setFilter: PropTypes.func
}

export default TaskFilter;