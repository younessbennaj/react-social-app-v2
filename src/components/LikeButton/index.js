import React, { useEffect, useState } from 'react';

//redux
import { connect } from 'react-redux';
import { addLike, addUnlike } from '../../actions'

//Style
import styled from 'styled-components';
import {
    Box,
    Image,
    Flex,
    Text,
    Link
} from 'rebass/styled-components'

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
// import { unwatchFile } from 'fs';
const LikeButton = ({ post, user, addLike, addUnlike }) => {

    const [liked, setLiked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        addLike(post.postId);
    }

    const handleUnlike = (e) => {
        e.preventDefault();
        addUnlike(post.postId);
    }

    const isLiked = (like, post) => {
        if (like.postId == post.postId) {
            return true;
        } else {
            setLiked(false);
        }
    }

    useEffect(() => {
        if (user.likes.find(
            (like) => like.postId === post.postId
        )) {
            setLiked(true)
        } else {
            setLiked(false)
        }
    }, [user, post]);


    return (
        <>
            {liked ? (
                <Link pr={3} onClick={handleUnlike} href="#">
                    <Flex alignItems="center" fontSize={2}>
                        <FontAwesomeIcon color="red" icon={faHeart} />
                        <Text px={2}>{post.likeCount}</Text>
                    </Flex>
                </Link>
            ) : (
                    <Link pr={3} onClick={handleLike} href="#">
                        <Flex alignItems="center" fontSize={2}>
                            <FontAwesomeIcon icon={faHeart} />
                            <Text px={2}>{typeof post.likeCount === 'number' ? post.likeCount.toString() : null}</Text>
                        </Flex>
                    </Link>
                )}
        </>
    );
}

const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
}

export default connect(mapStateToProps, {
    addLike,
    addUnlike
})(LikeButton);