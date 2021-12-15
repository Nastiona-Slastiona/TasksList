import React from "react";
import cl from "./selector.module.css";

const Selector = ({options, defaultValue, value, onChange}) => {
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
            onChange={ event => onChange(event.target.value)}
            className={cl.selector}
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

export default Selector;