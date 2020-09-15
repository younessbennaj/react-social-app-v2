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

const Home = ({ authenticated }) => {
    return (
        <Container p={3}>
            {authenticated ? <AuthenticatedHome /> : <UnauthenticatedHome />}
        </Container>
    );
}



export default Home;