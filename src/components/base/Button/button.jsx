import React from "react";

import './button.css';


export default function Button({children, ...props}) {
    return (
        <button {...props} className={'button'}>
            {children}
        </button>
    );
};