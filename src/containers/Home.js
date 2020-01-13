import React, { useEffect } from 'react';

import PostBox from './PostBox';

//Redux
import { connect } from 'react-redux';
import { getPosts } from '../actions';

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

const AuthenticatedHome = ({ user, data, getPosts }) => {

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
    }, [data]);

    return (
        <Box bg="#F6F6F6">
            <Heading
                fontSize={[5, 6, 7]}
                color='blue'>
                Hello {user.credentials.firstName} {user.credentials.lastName} !
            </Heading>

            <h2>You're logged in with React!!</h2>

            <PostBox />

            <Card
                width={[1, 2 / 3, 1 / 2]}
                bg="white"
                sx={{
                    mx: 'auto',
                    my: 2,
                    px: 3,
                    borderRadius: 2,
                    // boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                }}>
                <Box>
                    <ul>
                        {data.posts.map(post => {
                            return (
                                <li key={post.postId}>{post.body}</li>
                            )
                        })}
                    </ul>
                </Box>
            </Card>

        </Box>
    );
}

const Home = ({ user, auth, data, getPosts }) => {

    return (
        <Box>
            {auth.authenticated ? (
                <AuthenticatedHome user={user} data={data} getPosts={getPosts} />
            ) : (
                    <UnauthenticatedHome />
                )}
        </Box>

    );
}

function mapStateToProps(state) {
    const { user, auth, data } = state;
    return { user, auth, data };
}

export default connect(mapStateToProps, {
    getPosts
})(Home);