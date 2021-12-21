import React from "react";

import './input.css';


const Input = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={'input'}/>
    );
});

export default Input;