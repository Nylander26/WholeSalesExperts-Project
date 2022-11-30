import React from 'react'

const Modal = ({ children ,isOpen, closeModal }) => {

    return (
        <div id="myModal" className={isOpen ? 'modal' : 'modal-close'}>
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                {children}
            </div>
        </div>
    )
}

export default Modal