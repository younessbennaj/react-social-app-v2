import React from 'react';

//Style
import {
    Box,
    Image,
    Text,
    Button,
} from 'rebass/styled-components'

import styled from "styled-components";

// const Modal = styled.div`
// display: ${props => props.show ? "block" : "none"}; 
// position: fixed;
// top: 0;
// left: 0;
// width:100%;
// height: 100%;
// background: rgba(0, 0, 0, 0.6);
// `
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
top:50%;
left:50%;
transform: translate(-50%,-50%);
`

MainModal.defaultProps = {
    p: 1,
    borderRadius: 2,
    boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
}

const Modal = ({ children, show }) => {
    return (
        <ModalContainer show={show}>
            <MainModal>
                {children}
            </MainModal>
        </ModalContainer>
    );
}

export default Modal;