import React, {useState, useEffect, Fragment} from 'react';
import './Modal.scss';

const Modal = (props) => {
    
        const {header, closeButton, text, actions, onClick } = props;

        return (
            <Fragment>
                <div className='modal__window'>
                        <div className='modal__window-header'>{header}{closeButton ? <button className={"modal__window-closeBtn" } onClick = {onClick}>X</button> :''}</div>
                       <div className='modal__window-box'>
                           <p className='modal__window-text'>{text}</p>
                           <div className='modal__window-actions'>{actions}</div>
                       </div>
                </div>
                <div className={"modal-wrapper"} onClick = {onClick}></div>
            </Fragment>

        );
}

export default Modal;