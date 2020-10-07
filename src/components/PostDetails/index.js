import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

//Redux
import { connect } from 'react-redux';
import { addUnlike } from '../../actions'
//Date helper
import { getDifferenceDate } from '../../helpers/date'
//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

//Component 
import LikeButton from '../LikeButton';
//Style 
import styled from "styled-components";
import {
    Box,
    Image,
    Text,
    Flex,
    Link
} from 'rebass/styled-components'

const PostContainer = styled(Flex)``

const ContentContainer = styled(Box)`
    border: 1px solid #e0e0e0;
    border-radius: 0px 8px 8px 8px;
    padding: 20px;
    flex-grow: 1;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);
`

const PostDetails = ({ post, openModal, setPostId, addUnlike, user }) => {

    const handleComment = (postId) => {
        setPostId(postId);
        openModal.current.openModal()
    }

    return (
        <Flex p={3} flexDirection={["column", "row"]}>
            <Image
                src={post.userImage}
                variant='avatar'
                minWidth='50px'
                mr={3}
                mb={[2, 0]}
            />
            <ContentContainer flexGrow="1">
                <RouterLink to={`/post/${post.postId}`}>
                    <Flex
                        alignItems='baseline'
                        justifyContent='flex-end'

                    >
                        <Text
                            fontSize={[1, 2]}
                            fontWeight="heading"
                            mr="auto"
                        >
                            {post.userFirstName} {post.userLastName}
                        </Text>
                        <Text
                            fontSize={1}
                        ><FontAwesomeIcon icon={faClock} /> {getDifferenceDate(post.createdAt)}
                        </Text>

                    </Flex>
                    <Text fontSize={[1, 2]} py={3}>{post.body}</Text>
                </RouterLink>
                <Flex py={2} >
                    <LikeButton post={post} />
                    <Link pr={3} onClick={() => handleComment(post.postId)} href="#">
                        <Flex alignItems="center" fontSize={[1, 2]}>
                            <FontAwesomeIcon icon={faComment} />
                            <Text px={2}>{typeof post.commentCount === 'number' ? post.commentCount.toString() : null}</Text>
                        </Flex>
                    </Link>
                </Flex>
            </ContentContainer>
        </Flex>
    );
}

const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
}

export default connect(mapStateToProps, {
    addUnlike
})(PostDetails);