import React from 'react';
import NoImg from '../../images/no-img.png';

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

import styled from 'styled-components';

import {
    Box
} from 'rebass/styled-components'

const SkeletonContainer = styled.div`
height: 430px;
background-image: radial-gradient(circle 45px, #ccc 100%, transparent),
linear-gradient(#ccc, #ccc),
linear-gradient(#ccc, #ccc),
linear-gradient(#ccc, #ccc),
linear-gradient(#ccc, #ccc),
linear-gradient(#fff, #fff);

background-size: 
    100px 100px,
    400px 40px,
    400px 20px,
    400px 20px,
    400px 20px,
    100% 100%;

background-position: 
    50% 24px, 
    50% 140px, 
    50% 200px, 
    50% 240px, 
    50% 280px, 
    0 0;
background-repeat: no-repeat;
`

const ProfileSkeleton = () => {
    return (
        <SkeletonContainer>
        </SkeletonContainer>
    );
}

export default ProfileSkeleton;