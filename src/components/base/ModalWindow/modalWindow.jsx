/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './modalWindow.css';


function ModalWindow({
    children, isVisible, onClose, onModalClick
}) {
    const rootClasses = classNames(
        'modal-window',
        { 'modal-window--active': isVisible }
    );

    return (
        <div className={rootClasses} onClick={onClose}>
            <div className="modal-window__content" onClick={onModalClick}>
                {children}
            </div>
        </div>
    );
}

ModalWindow.propTypes = {
    isVisible: PropTypes.bool,
    onClose: PropTypes.func,
    onModalClick: PropTypes.func
};

export default ModalWindow;
