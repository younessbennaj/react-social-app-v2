import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";

//Style
import "./modal.scss";

//We create a ModalPortal to display modal component outsite of the DOM hierarchy 
const ModalPortal = ({ children }) => {

    //We need to create a portal to add our modal comment box into another DOM node 
    //Portal => allow us to add a child component into a DOM node that isn't in the DOM hierarchy 
    //of the parent component

    //e.g: ReactDOM.createPortal((child, container))

    //child => react element (component, DOM element, string, Fragment)
    //container => DOM element

    //In our case ModalPortal => take a modal component (e.g: CommentBox) and add it to the
    //modal-root DOM element that is not inside the DOM hierarchy of AuthenticatedHome parent component. 

    const modalRoot = document.getElementById("modal-root");

    return (
        ReactDOM.createPortal(children, modalRoot)
    )
}

const Modal = ({ children, modalState, setModalState }) => {
    //UI state to handle modal diplay state
    // const [isOpen, setIsOpen] = useState(modalState);

    //Event handler to close the modal
    function toggleModal(e) {
        e.preventDefault();
        setModalState(false);
        // modalHandler(setIsOpen);
        // setIsOpen(false);
    }

    // useEffect(() => {
    //     setIsOpen(modalState);
    // }, [modalState]);


    return (
        <ModalPortal>
            <div className={`modal-container modal-container-${modalState ? 'open' : 'closed'}`}>
                <div className="modal">
                    <button onClick={toggleModal}><a href="/">close</a></button>
                    <div className="modal__content">
                        {children}
                    </div>
                </div>
            </div>
        </ModalPortal>
    )
}

export default Modal;