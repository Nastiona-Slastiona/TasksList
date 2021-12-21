import React from "react";

import FilterButton from "../base/Button/filterButton.jsx";

import './taskStatusFilter.css';


export default function TaskStatusFilter() {
    return (
        <div className={'taskStatusFilterContainer'}>
            <FilterButton status='all'> All </FilterButton>
            <FilterButton status='active'> Active </FilterButton>
            <FilterButton status='completed'> Completed </FilterButton>
        </div>
    )
};