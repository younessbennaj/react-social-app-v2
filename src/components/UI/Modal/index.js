import React, { useState, useEffect, forwardRef, useRef, useImperativeHandle } from 'react';

//Style
import {
    Box,
    Image,
    Text,
    Link,
    Flex
} from 'rebass/styled-components'

import styled from "styled-components";

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const ModalContainer = styled.div`
display: ${props => props.show ? "block" : "none"}; 
position: fixed;
top: 0;
left: 0;
width:100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
`


const MainModal = styled(Box)`
position:fixed;
background: white;
padding: 20px;
width: 80%;
height: auto;
border-radius: 8px;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`

MainModal.defaultProps = {
    p: 1,
    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
    width: [1, 2 / 3, 1 / 2]
}

// const Child = forwardRef((props, ref) => {

//     // The component instance will be extended
//     // with whatever you return from the callback passed
//     // as the second argument
//     useImperativeHandle(ref, () => ({

//         getAlert() {
//             alert("getAlert from Child");
//         }

//     }));

//     return <h1>Hi</h1>;
// });


const Modal = forwardRef(({ children, show, closeModal }, ref) => {
    const [open, setOpen] = useState(show);

    useEffect(() => {
        setOpen(show);
    }, [show])

    const handleCloseModal = () => {
        setOpen(false);
    }

    useImperativeHandle(ref, () => ({

        openModal() {
            setOpen(true);
        },

        closeModal() {
            setOpen(false);
        }

    }));

    return (
        <ModalContainer show={open}>
            <MainModal>
                <Flex justifyContent="flex-end">
                    <Link href="#" onClick={handleCloseModal}><FontAwesomeIcon icon={faTimes} /></Link>
                </Flex>
                {children}
            </MainModal>
        </ModalContainer>
    );
})

export default Modal;