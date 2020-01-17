import React from 'react';

import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes'

//Style 

import {
    Box,
    Image,
    Text,
    Flex,
    Link
} from 'rebass/styled-components'

const PostDetails = ({ post }) => {
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

    const handleComment = () => {
        console.log('comment');
    }

    const handleLike = () => {
        console.log('comment');
    }

    return (
        <Flex bg="navy" p={3}>
            <Image
                src={post.userImage}
                variant='avatar'
                minWidth='50px'
            />
            <Box color="white" flexGrow="1" px={2}>
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
                    >{getDateDiff(post.createdAt)}
                    </Text>

                </Flex>
                <Text fontSize={1}>{post.body}</Text>
                <Flex p={2} justifyContent='space-around'>
                    <Link onClick={handleComment} color="white" href="#">comment ({post.commentCount})</Link>
                    <Link onClick={handleLike} color="white" href="#">like ({post.likeCount})</Link>
                </Flex>
            </Box>
        </Flex>
    );
}

export default PostDetails;