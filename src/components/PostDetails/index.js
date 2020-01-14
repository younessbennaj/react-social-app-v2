import React from 'react';

import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes'

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
        let result = differenceInHours(
            moment,
            someday
        )

        if (result == 0) {

            result = differenceInMinutes(
                moment,
                someday
            );

            return `${result} min`

        }
        if (result >= '24') {
            return format(someday, 'd LLL')
        } else {
            return `${result}h`;
        }
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
                    >{getDateDiff(post.createdAt)}</Text>
                </Flex>
                <Text fontSize={1}>{post.body}</Text>
            </Box>
        </Flex>
    );
}

export default PostDetails;