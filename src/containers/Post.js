import React, { useEffect, useState, useRef } from 'react';

//Redux
import { connect } from 'react-redux';
import { getPost, addUnlike } from '../actions'

//React Router
import { Link as RouterLink } from 'react-router-dom';

//Date helper
import { getDifferenceDate, getFullDate } from '../helpers/date'

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

//Layout
import { Container, ContentContainer } from '../hoc/layout/element'

//Component
import Modal from '../components/UI/Modal';
import CommentBox from '../components/CommentBox';
import LikeButton from '../components/LikeButton';
import PostDetailsSkeleton from '../components/PostDetailsSkeleton';

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

const Post = ({ match, getPost, post, loading, user, addUnlike }) => {

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

    const childRef = useRef();

    return (
        <Container>
            <ContentContainer>
                <Modal show={show} ref={childRef}>
                    <CommentBox closeModal={childRef} postId={currentPostId} />
                </Modal>
                {loading ? (
                    <PostDetailsSkeleton />
                ) : (
                        <Flex p={3} flexDirection="column">
                            <Flex py={3}>
                                <ReturnButton
                                    as={RouterLink}
                                    href="#"
                                    to="/"
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <Text fontSize={[2, 3]} pl={2}>Back</Text>
                                </ReturnButton>
                            </Flex>
                            <Flex
                                alignItems="center"
                            >
                                <Image
                                    src={post.userImage}
                                    variant='avatarMd'
                                    mr={3}
                                />
                                <Text
                                    fontSize={[2, 3]}
                                    fontWeight="heading"
                                    mr="auto"
                                >
                                    {post.userFirstName} {post.userLastName}
                                </Text>
                            </Flex>

                            <Text fontSize={[2, 3]} py={3}>{post.body}</Text>

                            <Text fontSize={[1, 2]} py={2}>
                                {post.createdAt ? getFullDate(post.createdAt) : null}
                            </Text>

                            <Flex py={3} fontSize={[1, 2]}>
                                <LikeButton post={post} />
                                <Link pr={3} href="#" onClick={() => openModal(post.postId)}>
                                    <Flex alignItems="center">
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
                                                    <Text fontSize={[1, 2]}>{comment.userFirstName} {comment.userLastName}</Text>
                                                </Link>
                                                <Text fontSize={[1, 2]} >{comment.body}</Text>

                                            </Flex>
                                            <Text
                                                fontSize={1}
                                                ml="auto"
                                            >{getDifferenceDate(comment.createdAt)}
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
    const { user } = state;
    const { post, loading } = state.data;
    return { post, loading, user };
}

export default connect(mapStateToProps, {
    getPost,
    addUnlike
})(Post);