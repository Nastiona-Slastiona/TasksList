import React from "react";
import classes from './StyledButton.module.css';

const StyledButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.styledButton}>
            {children}
        </button>
    );
};

export default StyledButton;