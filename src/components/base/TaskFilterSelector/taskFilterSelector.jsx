import React from "react";

import "./taskFilterSelector.css";


export default function TaskFilterSelector({options, defaultValue, value, onChange}) {
    if (!options 
        && !defaultValue 
        && !value 
        && !onChange) {
        return (
            <div>There is problem in the Selector section</div>
        );
    }

    return (
        <select 
            value={value}
            onChange={event => onChange(event.target.value)}
            className={'task__filter-selector'}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};