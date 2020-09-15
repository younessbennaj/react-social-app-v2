import React, { Fragment, useEffect, useState, useRef } from 'react';

import PostBox from '../components/PostBox';

//Redux
import { connect } from 'react-redux';
import { getPosts } from '../actions';

//Style
import styled from 'styled-components';

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex,
    Link
} from 'rebass/styled-components'

//Components
import AuthenticatedHome from '../components/AuthenticatedHome';
import UnauthenticatedHome from '../components/UnauthenticatedHome';

//Layout
import { Container } from '../hoc/layout/element';

const Home = ({ user, auth, data, getPosts }) => {

    return (
        // <Container
        //     p={3}
        // >
        //     {auth.authenticated ? (
        //         <AuthenticatedHome user={user} data={data} getPosts={getPosts} />
        //     ) : (
        //             <UnauthenticatedHome />
        //         )}
        // </Container>
        <AuthenticatedHome user={user} data={data} getPosts={getPosts} />
    );
}

function mapStateToProps(state) {
    const { user, auth, data } = state;
    return { user, auth, data };
}

export default connect(mapStateToProps, {
    getPosts
})(Home);