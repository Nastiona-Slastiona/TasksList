import React, { useCallback } from "react";
import PropTypes  from "prop-types";
import classNames from "classnames";

import './modalWindow.css';


const ModalWindow = ({children, isVisible, onClose, stayingVisible}) => {
    const rootClasses = classNames('modal-window', 
        {'modal-window--active': isVisible});

    return (
        <div className={rootClasses} onClick={onClose}>
            <div className={'modal-window__content'} onClick={stayingVisible}>
                {children}
            </div>
        </div>
    );
};

ModalWindow.propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
    stayingVisible: PropTypes.func
}

export default ModalWindow;