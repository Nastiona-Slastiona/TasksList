import React from "react";
import classes from './styledInput.module.css';

const StyledInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={classes.styledInput}/>
    );
});

export default StyledInput;