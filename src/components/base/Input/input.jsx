/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classNames from 'classnames';

import './input.css';


export default function Input(props) {
    const className = classNames(
        'input',
        { input__checkbox: props.type === 'checkbox' }
    );

    return (
        <input {...props} className={className} />
    );
}
