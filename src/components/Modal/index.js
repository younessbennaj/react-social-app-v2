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

const Modal = ({ children, toggleModal, modalState }) => {

    return (
        <ModalPortal>
            <div className={`modal-container modal-container-${modalState ? 'open' : 'closed'}`}>
                <div className="modal">
                    <button onClick={() => toggleModal(false)}>close</button>
                    <div className="modal__content">
                        {children}
                    </div>
                </div>
            </div>
        </ModalPortal>
    )
}

export function useModal(state) {
    const [modalState, setModalState] = useState(state);

    return {
        modalState,
        setModalState,
        toggleModal: (isOpen) => {
            console.log(isOpen);
            setModalState(isOpen);
        }
    }
}

export default Modal;