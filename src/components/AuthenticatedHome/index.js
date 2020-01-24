import React, { useState, useEffect, useRef, Fragment } from 'react';

//Components
import PostDetails from '../PostDetails';
import CommentBox from '../CommentBox';
import Modal from '../UI/Modal';
import PostBox from '../PostBox';

//Layout
import { ContentContainer } from '../../hoc/layout/element';

//Style
import {
    Box,
    Text,
} from 'rebass/styled-components'

const AuthenticatedHome = ({ user, data: { posts, loading }, getPosts }) => {

    const [show, setShow] = useState(false);
    const [currentPostId, setCurrentPostId] = useState('');
    const closeModal = () => {
        setShow(false);
    }

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

export default AuthenticatedHome;