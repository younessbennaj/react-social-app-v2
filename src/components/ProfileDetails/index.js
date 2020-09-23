import React from 'react';
import { Link as RouteLink } from "react-router-dom";
import EditProfile from '../../containers/EditProfile';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import styled from 'styled-components';

//Icon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faGlobeEurope } from '@fortawesome/free-solid-svg-icons'

import {
    Card,
    Image,
    Heading,
    Text,
    Button,
    Link
} from 'rebass/styled-components'

const StyledLink = styled(Link)`
    &&:hover {
        text-decoration: underline;
    }
`

const ProfileDetails = ({ user, openModal }) => {

    const getDate = (date) => {

        if (date) {
            let someday = parseISO(date);
            return format(someday, 'LLLL yyyy');
        }

        return null;
    }

    const handleClick = () => {
        openModal.current.openModal();
    }

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
            <Image variant="avatarLg" src={user.imageUrl}></Image>
            <Heading p={2}>{user.firstName} {user.lastName}</Heading>
            <Text p={2}><FontAwesomeIcon icon={faGlobeEurope} /> {user.location}</Text>
            <Text p={2} fontSize="20px" color="grey">{user.bio}</Text>
            <StyledLink p={2} color="blue" href="#">{user.website}</StyledLink>
            <Text p={2}>Join Social App in {getDate(user.createdAt)}</Text>
            <Button mt={3} onClick={handleClick}>
                Edit Profile
            </Button>
        </Card>
    );
}

export default ProfileDetails;