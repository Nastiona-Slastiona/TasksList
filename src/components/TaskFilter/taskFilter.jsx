import React from "react";

import StyledInput from "../base/Input/input.jsx";
import TaskFilterSelector from "../base/TaskFilterSelector/taskFilterSelector.jsx";
import TaskStatusFilter from "../TaskStatusFilter/taskStatusFilter.jsx";

import './taskFilter.css';


export default function TaskFilter({filter, setFilter}) {
    return (
        <div className={'task__filter-container'}>
            <hr className="task__filter-separator"/>
            <StyledInput 
                value={filter.searchQuery}
                onChange={event => setFilter({...filter, searchQuery: event.target.value})}
                placeholder="search for..."/>
            <div className="task__filter-selector-section">
                <TaskFilterSelector
                    value={filter.selectedSort}
                    onChange={selectedSort => setFilter({...filter, selectedSort: selectedSort })}
                    defaultValue="Sort by"
                    options={[
                        {value: 'title', name:'by name'},
                        {value: 'body', name:'by description'}
                    ]}
                />
                <TaskStatusFilter/>
            </div>
            <hr className="task__filter-separator"/>
        </div>
    )
};