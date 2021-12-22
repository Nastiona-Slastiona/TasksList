import React, { useCallback } from "react";
import PropTypes from "prop-types";

import "./taskFilterSelector.css";


const TaskFilterSelector = ({options, defaultValue, value, onChange}) => {
    return (
        <select 
            value={value}
            onChange={onChange}
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

TaskFilterSelector.propTypes = {
    options: PropTypes.array,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default TaskFilterSelector;