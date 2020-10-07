import React, { useEffect, useState } from 'react';
import axios from "axios";
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

    //UI State
    //True if the current authentified user has already liked the post
    const [liked, setLiked] = useState(false);

    const handleLike = (e) => {
        e.preventDefault();
        // addLike(post.postId);

        console.log(liked);

        if (liked) {

            //The user has already liked the post 
            //Therefore, we need to set liked to false
            //Else the UI couldn't update its state

            setLiked(false);

        } else {

            //If the user hasn't liked the post
            //Post this information to the back-end
            //And set liked to true for UI purpose

            let { postId } = post;

            axios.post(`/post/${postId}/like`)
                .then(response => {
                    console.log(response.data);
                    setLiked(true);
                })

        }

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
        <Link pr={3} onClick={handleLike} href="#">
            <Flex alignItems="center" fontSize={2}>
                <FontAwesomeIcon color={liked ? "red" : "black"} icon={faHeart} />
                <Text px={2}>{post.likeCount}</Text>
            </Flex>
        </Link>
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