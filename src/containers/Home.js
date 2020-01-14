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

const AuthenticatedHome = ({ user, data, getPosts }) => {

    useEffect(() => {
        getPosts();
    }, []);

    useEffect(() => {
        console.log(data.posts);
    }, [data]);

    return (
        <Fragment>
            <Heading
                textAlign="center"
                fontSize={[5, 6, 7]}
                color='blue'>
                Hello {user.credentials.firstName} {user.credentials.lastName} !
            </Heading>

            <Heading
                as='h2'
                textAlign="center"
            >
                You're logged in.
            </Heading>

            <PostBox />

            <Card
                width={[1, 2 / 3, 1 / 2]}
                bg="white"
                sx={{
                    mx: 'auto',
                    my: 3,
                    p: 3,
                    borderRadius: 2
                }}>
                <Box>
                    <ul>
                        {data.posts.map(post => {
                            return (
                                <li key={post.postId}>
                                    <PostDetails post={post} />
                                </li>
                            )
                        })}
                    </ul>
                </Box>
            </Card>

        </Fragment>
    );
}

const HomeContainer = styled(Box)`
    height: 100vh
`;

const Home = ({ user, auth, data, getPosts }) => {

    return (
        <HomeContainer bg="#F6F6F6">
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