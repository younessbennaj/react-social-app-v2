import React, { useState, useEffect, useRef, Fragment } from 'react';
import axios from "axios";
//Components
import PostDetails from '../PostDetails';
import CommentBox from '../CommentBox';
import Modal from '../UI/Modal';
import PostBox from '../PostBox';
import PostSkeleton from '../PostSkeleton';

//Layout
import { ContentContainer } from '../../hoc/layout/element';

//Style
import {
    Box,
    Text,
} from 'rebass/styled-components'

const AuthenticatedHome = () => {

    //UI State
    const [show, setShow] = useState(false);
    const [currentPostId, setCurrentPostId] = useState('');
    //UI state that represents the comment count 
    const [commentCount, setCommentCount] = useState(0);

    //Server State 
    const [posts, setPosts] = useState([]);

    const closeModal = () => {
        setShow(false);
    }

    const setPostId = (postId) => {
        setCurrentPostId(postId);
    }

    useEffect(() => {
    }, [posts]);

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                setPosts(response.data);
            })
    }, []);

    const childRef = useRef();


    return (
        <Fragment>
            <Modal show={show} ref={childRef}>
                <CommentBox postId={currentPostId} closeModal={childRef} />
            </Modal>
            <ContentContainer>
                <Box pb={3}>
                    <PostBox posts={posts} setPosts={setPosts} />
                </Box>
                <Box>
                    <ul>
                        {posts.map(post => {
                            return (
                                <li key={post.postId}>
                                    <Box mb={2}>
                                        <PostDetails show={show} openModal={childRef} setPostId={setPostId} post={post} commentCount={commentCount} setCommentCount={setCommentCount} />
                                    </Box>
                                </li>
                            )
                        })}
                    </ul>
                </Box>
            </ContentContainer>

        </Fragment>
    );
}

export default AuthenticatedHome;