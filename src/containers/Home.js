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
import PostDetails from '../components/PostDetails';
import CommentBox from '../components/CommentBox';
import Modal from '../components/UI/Modal';

//Layout
import { Container, ContentContainer } from '../hoc/layout/element';

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

    const [show, setShow] = useState(false);
    const [currentPostId, setCurrentPostId] = useState('');
    const closeModal = () => {
        setShow(false);
    }

    // const openModal = (postId) => {
    //     setShow(true);
    // }

    const setPostId = (postId) => {
        setCurrentPostId(postId);
    }

    useEffect(() => {
    }, [posts]);

    useEffect(() => {
        getPosts();
    }, []);

    const childRef = useRef();


    return (
        <Fragment>
            <Modal show={show} ref={childRef}>
                <Text>Comment</Text>
                <CommentBox postId={currentPostId} closeModal={childRef} />
            </Modal>
            <ContentContainer>
                <Box pb={3}>
                    <PostBox />
                </Box>
                {loading ? (
                    <Text textAlign="center">Loading...</Text>
                ) : (
                        <Box>
                            <ul>
                                {posts.map(post => {
                                    return (
                                        <li key={post.postId}>
                                            <Box mb={2}>
                                                <PostDetails show={show} openModal={childRef} setPostId={setPostId} post={post} />
                                            </Box>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Box>
                    )}
            </ContentContainer>

        </Fragment>
    );
}

const Home = ({ user, auth, data, getPosts }) => {

    return (
        <Container
            p={3}
        >
            {auth.authenticated ? (
                <AuthenticatedHome user={user} data={data} getPosts={getPosts} />
            ) : (
                    <UnauthenticatedHome />
                )}
        </Container>

    );
}

function mapStateToProps(state) {
    const { user, auth, data } = state;
    return { user, auth, data };
}

export default connect(mapStateToProps, {
    getPosts
})(Home);