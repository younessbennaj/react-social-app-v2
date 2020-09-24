import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";

//Context 
import { useUserState } from "../user-context";

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
import ProfileSkeleton from '../components/ProfileSkeleton';

//Layout
import { Container, ContentContainer } from '../hoc/layout/element'

const ProfileContainer = styled(Box)`
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin: 0 auto;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);

`;

const Profile = () => {

    //Server state
    const { credentials } = useUserState();

    //UI State
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
            <ContentContainer>
                {/* <ProfileSkeleton /> */}
                <Box>
                    <ProfileDetails openModal={childRef} user={credentials} />
                </Box>
            </ContentContainer>
            <Modal show={show} ref={childRef}>
                <EditProfile closeModal={childRef} />
            </Modal>
        </Container >
    );
}

export default Profile;