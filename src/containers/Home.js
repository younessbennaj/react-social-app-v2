import React, { Fragment, useEffect, useState } from 'react';

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
import CommentBox from '../components/CommentBox';

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

const Modal = styled.div`
display: ${props => props.show ? "block" : "none"}; 
position: fixed;
top: 0;
left: 0;
width:100%;
height: 100%;
background: rgba(0, 0, 0, 0.6);
`

const MainModal = styled(Box)`
position:fixed;
background: white;
padding: 20px;
width: 80%;
height: auto;
top:50%;
left:50%;
transform: translate(-50%,-50%);
`

const AuthenticatedHome = ({ user, data: { posts, loading }, getPosts }) => {

    const [show, setShow] = useState(false);
    const [currentPostId, setCurrentPostId] = useState('');
    const closeModal = () => {
        setShow(false);
    }

    const openModal = (postId) => {
        setCurrentPostId(postId);
        setShow(true);
    }

    useEffect(() => {
    }, [posts]);

    useEffect(() => {
        getPosts();
    }, []);


    return (
        <Fragment>
            <Modal show={show}>
                <MainModal
                    sx={{
                        p: 1,
                        borderRadius: 2,
                        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
                    }}
                >
                    <Text>Comment</Text>
                    <CommentBox postId={currentPostId} closeModal={closeModal} />
                    <Button onClick={closeModal}>Close</Button>
                </MainModal>
            </Modal>

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
                                                <PostDetails openModal={openModal} post={post} />
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