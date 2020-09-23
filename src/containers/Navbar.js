import React from 'react';

import { Link as RouteLink, useHistory } from "react-router-dom";

//Redux
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

const Navbar = ({ authenticated, setAuthenticated }) => {

    let history = useHistory();

    const signOut = () => {
        history.push("/");
        localStorage.removeItem('FBIdToken');
        setAuthenticated(false);
    }

    return (
        <NavbarWrapper as="header">
            <Text p={2} fontWeight='bold'>Social App</Text>
            <Box mx='auto' />
            <Link as={RouteLink} variant='nav' to="/" color="white" pr={2}>Home</Link>
            {/* <AuthenticatedNavbar signOut={signOut} authenticated={auth.authenticated} /> */}
            {(() => {
                if (authenticated) {
                    return (
                        <>
                            <Link as={RouteLink} to="/profile" color="white" pr={2}>Profile</Link>
                            <Link onClick={signOut} color="white">Logout</Link>
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
            })()}
        </NavbarWrapper>
    );
}



export default Navbar;