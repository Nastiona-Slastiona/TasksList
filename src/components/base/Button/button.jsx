/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

import './button.css';


function Button({ children, ...props }) {
    return (
        <button {...props} className="button">
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.string
};

export default Button;
