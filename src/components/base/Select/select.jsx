/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import './select.css';


function Select({
    options, defaultValue, value, onChange
}) {
    return (
        <select
            value={value}
            className="select"
            onChange={onChange}
        >
            <option value={null} disabled>{defaultValue}</option>
            {
                options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))
            }
        </select>
    );
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
    defaultValue: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default Select;
