import React from 'react';
import NoImg from '../../images/no-img.png';

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
    padding: 20px;
    flex-grow: 1;
    box-shadow: 0px 3px 20px -15px rgba(0,0,0,0.5);
    min-height: 160px;
`

const PostSkeleton = () => {
    return (
        <Flex p={3}>
            <Image
                src={NoImg}
                variant='avatar'
                minWidth='50px'
                mr={3}
            />
            <ContentContainer flexGrow="1">
                {/* <RouterLink to={`/post/${post.postId}`}>
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
                        ><FontAwesomeIcon icon={faClock} /> {getDifferenceDate(post.createdAt)}
                        </Text>

                    </Flex>
                    <Text fontSize={2} py={3}>{post.body}</Text>
                </RouterLink>
                <Flex py={2} >
                    <LikeButton post={post} />
                    <Link pr={3} onClick={() => handleComment(post.postId)} href="#">
                        <Flex alignItems="center" fontSize={2}>
                            <FontAwesomeIcon icon={faComment} />
                            <Text px={2}>{typeof post.commentCount === 'number' ? post.commentCount.toString() : null}</Text>
                        </Flex>
                    </Link>
                </Flex> */}
            </ContentContainer>
        </Flex>
    );
}

export default PostSkeleton;