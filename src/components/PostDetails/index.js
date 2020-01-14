import React from 'react';

import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';

//Style 

import styled from 'styled-components';

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex
} from 'rebass/styled-components'

// const PostDate = () => {
//     return (

//     )
// }

const PostDetails = ({ post }) => {
    const getDateDiff = (ISOdate) => {
        const moment = new Date();
        const someday = parseISO(ISOdate);
        var result = differenceInHours(
            moment,
            someday
        )
        return result;
    }

    return (
        <Flex bg="#F6F6F6">
            <Image
                src={post.userImage}
                variant='avatar'
            />
            <Box>
                <Heading fontSize={2}>{post.userFirstName} {post.userLastName}</Heading>
                <Text fontSize={1}>{post.body}</Text>
                <span>{getDateDiff(post.createdAt)}h</span>
                {/* <time datetime={post.createdAt}></time> */}
            </Box>
        </Flex>
    );
}

export default PostDetails;