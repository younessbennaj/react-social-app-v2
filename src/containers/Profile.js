import React, { useState, useEffect, useRef } from 'react';

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
import Modal from '../components/UI/Modal';

//Layout
import { Container, ContentContainer } from '../hoc/layout/element'

const ProfileContainer = styled(Box)`
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin: 0 auto;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);

`;

const Profile = ({ user: { credentials, loading }, auth }) => {

    const [show, setShow] = useState(false);

    const closeModal = () => {
        setShow(false);
    }

    const openModal = () => {
        setShow(true);
    }

    const childRef = useRef();

    return (
        <Container p={3}>
            <Modal show={show} ref={childRef}>
                <Text>Edit Profile</Text>
                <EditProfile closeModal={childRef} />
            </Modal>

            <ContentContainer>
                {loading ? (
                    <Text textAlign="center">Loading...</Text>
                ) : (
                        <Box>
                            <ProfileDetails openModal={childRef} user={credentials} />
                        </Box>
                    )}
            </ContentContainer>
        </Container >
    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
    signOut
})(Profile);