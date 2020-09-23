import React, { useState, useEffect, useRef } from 'react';
import axios from "axios";
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
import ProfileSkeleton from '../components/ProfileSkeleton';

//Layout
import { Container, ContentContainer } from '../hoc/layout/element'

const ProfileContainer = styled(Box)`
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    margin: 0 auto;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);

`;

const Profile = ({ user: { loading }, auth }) => {

    //Server State 
    const [credentials, setCredentials] = useState({});

    //Side effect code - Http request to fetch user data credentials
    useEffect(() => {

        axios.get('/user')
            .then(response => {
                setCredentials(response.data.credentials);
            })

    }, []);

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

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
    signOut
})(Profile);