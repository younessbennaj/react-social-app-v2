import React from 'react';
import NoImg from '../../images/no-img.png';

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

import {
    Box,
    Card,
    Image,
    Heading,
    Text
} from 'rebass/styled-components'

const PlaceHolder = styled.div`
    width: 200px;
    height: 15px;
    background-color: grey;
`

// PlaceHolder.defaultProps = {
//     bg: 'grey'
// }

const ProfileSkeleton = () => {
    return (
        <Card
            sx={{
                p: 4,
                color: 'text',
                bg: 'white',
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
                textAlign: 'center'
            }}
        >
            <Image variant="avatarLg" src={NoImg}></Image>
            <Heading p={2}></Heading>
            <Text p={2}><FontAwesomeIcon icon={faGlobeEurope} /><span></span></Text>
            <Text p={2} fontSize="20px" color="grey">-</Text>
            <Text p={2}>-</Text>
        </Card>
    );
}

export default ProfileSkeleton;