import React, { useState, useEffect } from 'react';

//Redux
import { connect } from 'react-redux';
import { signOut } from '../actions'

//Style
import {
    Box,
    Image,
    Text,
    Button,
} from 'rebass/styled-components'

import styled from "styled-components";

//Components
import ProfileDetails from '../components/ProfileDetails';

const Modal = styled.div`
display: ${props => props.show ? "block" : "none"}; 
position: fixed;
top: 0;
left: 0;
width:100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
`

const EditProfile = styled(Box)`
position:fixed;
background: white;
width: 80%;
height: auto;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`


const Profile = ({ user: { credentials, loading }, auth, signOut, history }) => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        signOut(history);
        console.log('clicked');
    }

    const closeModal = () => {
        console.log('closed');
        setShow(false);
    }

    const openModal = () => {
        console.log('open');
        setShow(true);
    }

    useEffect(() => {
        console.log(loading);
    }, [loading])

    return (
        <Box bg="#F6F6F6">

            <Modal show={show}>
                <EditProfile
                    sx={{
                        p: 1,
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }}
                >
                    <Text>Edit Profile</Text>
                    <Button onClick={closeModal}>Close</Button>
                </EditProfile>
            </Modal>

            {loading ? (
                <Text textAlign="center">Loading...</Text>
            ) : (
                    <Box>
                        <ProfileDetails openModal={openModal} user={credentials} />
                        <Button mr={3} onClick={handleClick}>
                            Logout
                        </Button>
                        {/* <Button mr={3} onClick={openModal}>
                            Open
                        </Button> */}
                    </Box>
                )}
        </Box >

    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
    signOut
})(Profile);