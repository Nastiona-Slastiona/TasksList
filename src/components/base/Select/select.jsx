import React from "react";
import PropTypes from "prop-types";

import "./select.css";


const Select = ({options, defaultValue, value, onChange}) => {
    return (
        <select 
            value={value}
            onChange={onChange}
            className={'select'}
        >
            <option disabled value={null}>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.array,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Select;