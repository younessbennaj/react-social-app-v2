import React from 'react';

import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes'

//Icon 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

//Style 
import styled from "styled-components";
import {
    Box,
    Image,
    Text,
    Flex,
    Link
} from 'rebass/styled-components'

const ContentContainer = styled(Box)`
    border: 1px solid #e0e0e0;
    border-radius: 0px 8px 8px 8px;
    padding: 12px;
    flexGrow: 1;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);
`

const PostDetails = ({ post, openModal }) => {
    const getDateDiff = (ISOdate) => {
        const moment = new Date();
        const someday = parseISO(ISOdate);
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

    const handleComment = (postId) => {
        openModal(postId);
    }

    const handleLike = () => {
        console.log('comment');
    }

    return (
        <Flex p={3}>
            <Image
                src={post.userImage}
                variant='avatar'
                minWidth='50px'
                mr={3}
            />
            <ContentContainer flexGrow="1">
                <Flex
                    alignItems='baseline'
                    justifyContent='flex-end'

                >
                    <Text
                        fontSize={2}
                        fontWeight="heading"
                        mr="auto"
                    >
                        {post.userFirstName} {post.userLastName}
                    </Text>
                    <Text
                        fontSize={1}
                    ><FontAwesomeIcon icon={faClock} /> {getDateDiff(post.createdAt)}
                    </Text>

                </Flex>
                <Text fontSize={2} py={3}>{post.body}</Text>
                <Flex py={2} >
                    <Link pr={3} onClick={handleLike} href="#">
                        <Flex alignItems="center" fontSize={2}>
                            <FontAwesomeIcon icon={faHeart} />
                            <Text px={2}>{post.likeCount}</Text>
                        </Flex>
                    </Link>
                    <Link pr={3} onClick={() => handleComment(post.postId)} href="#">
                        <Flex alignItems="center" fontSize={2}>
                            <FontAwesomeIcon icon={faComment} />
                            <Text px={2}>{post.commentCount}</Text>
                        </Flex>
                    </Link>
                </Flex>
            </ContentContainer>
        </Flex>
    );
}

export default PostDetails;