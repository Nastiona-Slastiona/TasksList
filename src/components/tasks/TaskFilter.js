import React from "react";
import StyledInput from "../UI/input/StyledInput";
import Selector from "../UI/select/Selector";
import TaskStatusFilter from "./TaskStatusFilter";

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