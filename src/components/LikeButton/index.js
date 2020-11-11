import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";

//Context 
import { useUserState, UserStateContext } from "../../user-context";

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
const LikeButton = ({ post, addLike, addUnlike }) => {


    //Server State

    //User data from context 
    let user = useUserState();
    //UI State here
    //True if the current authentified user has already liked the post
    const [liked, setLiked] = useState(false);
    //Like count UI representation state
    const [likeCount, setLikeCount] = useState(post.likeCount);

    const handleLike = (e) => {
        e.preventDefault();
        // addLike(post.postId);

        if (liked) {

            //The user has already liked the post 
            //Therefore, we need to set liked to false
            //Else the UI couldn't update its state
            setLiked(false);

            //Decrement the like count (UI purpose)
            setLikeCount(likeCount - 1);

        } else {

            //If the user hasn't liked the post
            //Post this information to the back-end
            //And set liked to true for UI purpose

            let { postId } = post;

            axios.post(`/post/${postId}/like`)
                .then(response => {
                    setLiked(true);
                    //Increment like button count (UI purpose)
                    setLikeCount(likeCount + 1);
                })

        }

    }

    useEffect(() => {

        //Find in the user data if he has already liked the post 
        if (user.likes) {
            let isLiked = !!user.likes.find((like) => like.postId === post.postId);
            //Then, set liked to true
            if (isLiked) setLiked(true);
        }

    }, [user]);


    return (
        <Link pr={3} onClick={handleLike} href="#">
            <Flex alignItems="center" fontSize={2}>
                <FontAwesomeIcon color={liked ? "red" : "black"} icon={faHeart} />
                <Text px={2}>{likeCount}</Text>
            </Flex>
        </Link>
    );
}


export default LikeButton;