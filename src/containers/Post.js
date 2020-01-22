import React, { useEffect, useState } from 'react';

//Redux
import { connect } from 'react-redux';
import { getPost } from '../actions'

//React Router
import { Link as RouterLink } from 'react-router-dom';

//Icon 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

//Date Fns
import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes'

//Layout
import { Container, ContentContainer } from '../hoc/layout/element'

//Component
import Modal from '../components/UI/Modal';
import CommentBox from '../components/CommentBox';

//Style 
import styled from 'styled-components';
import {
    Box,
    Image,
    Flex,
    Text,
    Link
} from 'rebass/styled-components'

const PostContainer = styled(Box)`
    border: 1px solid #e0e0e0;
    border-radius: 0px 8px 8px 8px;
    padding: 20px;
    flex-grow: 1;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);
`

const ReturnButton = styled(Link)`
    display: flex;
    align-items: center;
    color: #b0b0b0;
    font-size: 18px;

    &&:hover {
        text-decoration: underline;
    }
`

const Post = ({ match, getPost, post, loading }) => {

    const getDate = (date) => {
        let someday = parseISO(date);
        return format(someday, 'h:m a . d LLL yyyy');
    }

    const getCommentDate = (date) => {
        const moment = new Date();
        const someday = parseISO(date);
        let result = differenceInHours(
            moment,
            someday
        )

        if (result == 0) {

            result = differenceInMinutes(
                moment,
                someday
            );

            return `${result} min ago`

        }
        if (result >= '24') {
            return format(someday, 'd LLL')
        } else {
            return `${result}h ago`;
        }
    }

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
        getPost(match.params.id)
    }, [match.params.id]);

    return (
        <Container>
            <ContentContainer>
                <Modal show={show}>
                    <CommentBox closeModal={closeModal} postId={currentPostId} />
                </Modal>
                {loading ? (<Text>Loading...</Text>) : (
                    <Flex py={3} flexDirection="column">
                        <Flex py={3}>
                            <ReturnButton
                                as={RouterLink}
                                href="#"
                                to="/"
                            >
                                <FontAwesomeIcon icon={faArrowLeft} />
                                <Text fontSize={3} pl={2}>Back</Text>
                            </ReturnButton>
                        </Flex>
                        <Flex
                            alignItems="center"
                        >
                            <Image
                                src={post.userImage}
                                variant='avatarLg'
                                mr={3}
                            />
                            <Text
                                fontSize={3}
                                fontWeight="heading"
                                mr="auto"
                            >
                                {post.userFirstName} {post.userLastName}
                            </Text>
                        </Flex>

                        <Text fontSize={3} py={3}>{post.body}</Text>

                        <Text fontSize={2} py={2}>
                            {post.createdAt ? getDate(post.createdAt) : null}
                        </Text>

                        <Flex py={3}>
                            <Link pr={3} href="#">
                                <Flex alignItems="center" fontSize={2}>
                                    <FontAwesomeIcon icon={faHeart} />
                                    <Text px={2}>{post.likeCount}</Text>
                                </Flex>
                            </Link>
                            <Link pr={3} href="#" onClick={() => openModal(post.postId)}>
                                <Flex alignItems="center" fontSize={2}>
                                    <FontAwesomeIcon icon={faComment} />
                                    <Text px={2}>{post.commentCount}</Text>
                                </Flex>
                            </Link>
                        </Flex>

                        <Flex flexDirection="column" py={2} px={3} sx={{
                            borderTop: '1px solid #e6e6e6'
                        }}>
                            {post.comments ? post.comments.map(comment => {
                                return (
                                    <Flex
                                        key={comment.createdAt}
                                        justifyContent='flex-start'
                                        p={2}
                                    >
                                        <Image
                                            src={comment.userImage}
                                            variant='avatar'
                                            mr={3}
                                        />
                                        <Flex flexDirection="column">
                                            <Link color="blue" href="#">
                                                <Text>{comment.userFirstName} {comment.userLastName}</Text>
                                            </Link>
                                            <Text>{comment.body}</Text>

                                        </Flex>
                                        <Text
                                            fontSize={1}
                                            ml="auto"
                                        >{getCommentDate(post.createdAt)}
                                        </Text>
                                    </Flex>
                                )
                            }) : null}
                        </Flex>
                    </Flex>
                )}

            </ContentContainer>
        </Container>
    );
}

const mapStateToProps = (state) => {
    const { post, loading } = state.data;
    return { post, loading };
}

export default connect(mapStateToProps, {
    getPost
})(Post);