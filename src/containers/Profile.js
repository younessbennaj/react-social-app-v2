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
import EditProfile from '../containers/EditProfile';

const Modal = styled.div`
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


const Profile = ({ user: { credentials, loading }, auth, signOut, history }) => {

    const [show, setShow] = useState(false);

    const handleClick = () => {
        signOut(history);
    }

    const closeModal = () => {
        setShow(false);
    }

    const openModal = () => {
        setShow(true);
    }

    return (
        <Box>
            <Modal show={show}>
                <MainModal
                    sx={{
                        p: 1,
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }}
                >
                    <Text>Edit Profile</Text>
                    <EditProfile closeModal={closeModal} />
                    <Button onClick={closeModal}>Close</Button>
                </MainModal>
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
            <Button mr={3} onClick={handleClick}>
                Logout
                        </Button>
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