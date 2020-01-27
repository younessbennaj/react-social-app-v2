import React from 'react';

import { Link as RouteLink } from "react-router-dom";
import { history } from '../helpers/history'

//Redux
import { connect } from 'react-redux';
import { signOut } from '../actions'

//Style
import styled from 'styled-components';
import {
    Box,
    Text,
    Flex,
    Link
} from 'rebass/styled-components'

const NavbarWrapper = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
`;

NavbarWrapper.defaultProps = {
    px: 2,
    py: 3,
    color: 'white',
    bg: 'blue',
    alignItems: 'center'
}

const AuthenticatedNavbar = ({ authenticated, signOut }) => {

    const handleClick = () => {
        signOut(history);
    }

    if (authenticated) {
        return (
            <>
                <Link as={RouteLink} to="/profile" color="white" pr={2}>Profile</Link>
                <Link onClick={handleClick} color="white">Logout</Link>
            </>
        )
    } else {
        return (
            <>
                <Link as={RouteLink} to="/login" color="white" pr={2}>Login</Link>
                <Link as={RouteLink} to="/signup" color="white">Signup</Link>
            </>
        )
    }
}

const Navbar = ({ auth, signOut }) => {
    return (
        <NavbarWrapper as="header">
            <Text p={2} fontWeight='bold'>Social App</Text>
            <Box mx='auto' />
            <Link as={RouteLink} variant='nav' to="/" color="white" pr={2}>Home</Link>
            <AuthenticatedNavbar signOut={signOut} authenticated={auth.authenticated} />
        </NavbarWrapper>
    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
    signOut
})(Navbar);