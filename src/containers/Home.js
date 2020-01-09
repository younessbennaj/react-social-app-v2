import React from 'react';

//Redux
import { connect } from 'react-redux';

//Style
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

const UnauthenticatedHome = () => {
    return (
        <Box
            sx={{
                p: 4,
                color: 'text',
                bg: 'background',
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
            }}>
            <Heading as='h1' variant='display'>Hello</Heading>
            <Text mb={4}>This is a social app demo</Text>
            <Button mr={3}>
                Login
            </Button>
            <Button variant='secondary'>
                Signup
            </Button>
        </Box>
    )
}

const AuthenticatedHome = ({ user }) => {
    return (
        <Box>
            <Heading
                fontSize={[5, 6, 7]}
                color='blue'>
                Hello {user.credentials.handle} !
            </Heading>

            <h2>You're logged in with React!!</h2>
        </Box>
    );
}

const Home = ({ user, auth }) => {

    return (
        <Box>
            {auth.authenticated ? (
                <AuthenticatedHome user={user} />
            ) : (
                    <UnauthenticatedHome />
                )}
        </Box>

    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
})(Home);