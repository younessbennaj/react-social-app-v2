import React, { useEffect, useState } from 'react';

//Redux
import { connect } from 'react-redux';
import { getPost } from '../actions'

//Icon 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'

//Date Fns
import differenceInHours from 'date-fns/differenceInHours';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';
import differenceInMinutes from 'date-fns/differenceInMinutes'

//Layout
import { Container, ContentContainer } from '../hoc/layout/element'

//Style 
import styled from 'styled-components';
import {
    Box,
    Image,
    Flex,
    Text
} from 'rebass/styled-components'

const PostContainer = styled(Box)`
    border: 1px solid #e0e0e0;
    border-radius: 0px 8px 8px 8px;
    padding: 20px;
    flex-grow: 1;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);
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

    // const [date, setDate] = useState();

    useEffect(() => {
        getPost(match.params.id)
    }, [match.params.id]);

    // useEffect(() => {
    //     if (post.createdAt) {

    //     }
    // }, [post])

    return (
        <Container>
            <ContentContainer>
                {loading ? (<Text>Loading...</Text>) : (
                    <Flex py={3} flexDirection="column">
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
                                            <Text color="blue">{comment.userFirstName} {comment.userLastName}</Text>
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