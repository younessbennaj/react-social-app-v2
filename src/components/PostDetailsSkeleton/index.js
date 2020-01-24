import React from 'react';
import NoImg from '../../images/no-img.png';

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faComment, faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

//Style 
import styled from 'styled-components';

import {
    Box,
    Image,
    Flex,
    Text,
    Link
} from 'rebass/styled-components'

const ReturnButton = styled(Link)`
    display: flex;
    align-items: center;
    color: #b0b0b0;
    font-size: 18px;

    &&:hover {
        text-decoration: underline;
    }
`

const PostDetailsSkeleton = () => {
    return (

        <Flex height='400px' py={3} flexDirection="column">
            <Flex py={3}>
                <ReturnButton
                    href="#"
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <Text fontSize={3} pl={2}>Back</Text>
                </ReturnButton>
            </Flex>
            <Flex
                alignItems="center"
            >
                <Image
                    src={NoImg}
                    variant='avatarMd'
                    mr={3}
                />
            </Flex>

            {/* <Flex py={3}>
                <Link pr={3} href="#">
                    <Flex alignItems="center" fontSize={2}>
                        <FontAwesomeIcon icon={faHeart} />
                        <Text px={2}>0</Text>
                    </Flex>
                </Link>
                <Link pr={3} href="#">
                    <Flex alignItems="center" fontSize={2}>
                        <FontAwesomeIcon icon={faComment} />
                        <Text px={2}>0</Text>
                    </Flex>
                </Link>
            </Flex> */}
        </Flex>
    );
}

export default PostDetailsSkeleton;