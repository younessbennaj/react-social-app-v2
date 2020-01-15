import React, { Fragment, useEffect } from 'react';

import PostBox from './PostBox';

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
import PostDetails from '../components/PostDetails';

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

const AuthenticatedHome = ({ user, data: { posts, loading }, getPosts }) => {

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Fragment>
            <Box pb={3}>
                <PostBox />
            </Box>

            <Card
                width={[1, 2 / 3, 1 / 2]}
                bg="white"
                sx={{
                    mx: 'auto',
                    borderRadius: 2
                }}>
                {loading ? (
                    <Text textAlign="center">Loading...</Text>
                ) : (
                        <Box>
                            <ul>
                                {posts.map(post => {
                                    return (
                                        <li key={post.postId}>
                                            <Box mb={2}>
                                                <PostDetails post={post} />
                                            </Box>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Box>
                    )}
            </Card>

        </Fragment>
    );
}

const HomeContainer = styled(Box)`
   
`;

const Home = ({ user, auth, data, getPosts }) => {

    return (
        <HomeContainer
            bg="#F6F6F6"
            p={3}
        >
            {auth.authenticated ? (
                <AuthenticatedHome user={user} data={data} getPosts={getPosts} />
            ) : (
                    <UnauthenticatedHome />
                )}
        </HomeContainer>

    );
}

function mapStateToProps(state) {
    const { user, auth, data } = state;
    return { user, auth, data };
}

export default connect(mapStateToProps, {
    getPosts
})(Home);