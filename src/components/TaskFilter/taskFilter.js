import React from "react";
import StyledInput from "../UI/Input/styledInput.js";
import Selector from "../UI/Select/selector.js";
import TaskStatusFilter from "../TaskStatusFilter/taskStatusFilter.js";

const TaskFilter = ({filter, setFilter}) => {
    return (
        <div>
            <StyledInput 
                value={filter.searchQuery}
                onChange={event => setFilter({...filter, searchQuery: event.target.value})}
                placeholder="search for..."/>
            <Selector
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
    )
};

export default TaskFilter;