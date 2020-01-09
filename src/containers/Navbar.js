import React from 'react';

import { Link as RouteLink } from "react-router-dom";

//Redux
import { connect } from 'react-redux';

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

const AuthenticatedNavbar = ({ authenticated }) => {
    console.log(authenticated);
    if (authenticated) {
        return (
            <>
                <Link as={RouteLink} to="/profile/" color="white" pr={2}>Profile</Link>
                <Link as={RouteLink} to="/logout/" color="white">Logout</Link>
            </>
        )
    } else {
        return (
            <>
                <Link as={RouteLink} to="/login/" color="white" pr={2}>Login</Link>
                <Link as={RouteLink} to="/signup/" color="white">Signup</Link>
            </>
        )
    }
}

const Navbar = ({ auth }) => {
    console.log(auth.authenticated);
    return (
        <header>
            <Flex
                px={2}
                py={3}
                color='white'
                bg='blue'
                alignItems='center'>
                <Text p={2} fontWeight='bold'>Social App</Text>
                <Box mx='auto' />
                <Link as={RouteLink} variant='nav' to="/" color="white" pr={2}>Home</Link>
                <AuthenticatedNavbar authenticated={auth.authenticated} />
            </Flex>
        </header>
    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
})(Navbar);