import React from 'react';
import { Link as RouteLink } from "react-router-dom";
import EditProfile from '../../containers/EditProfile';
import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex,
    Link
} from 'rebass/styled-components'

const ProfileDetails = ({ user, openModal }) => {

    const getDate = (date) => {
        let someday = parseISO(date);
        return format(someday, 'LLLL yyyy');
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
            <Image width="100px" src={user.imageUrl}></Image>
            <Heading>{user.firstName} {user.lastName}</Heading>
            <Text>{user.bio}</Text>
            <Text>{user.location}</Text>
            <Text>{user.website}</Text>
            <Text>Join Social App in {getDate(user.createdAt)}</Text>
            <Button mt={3} onClick={handleClick}>
                Edit Profile
            </Button>
        </Card>
    );
}

export default ProfileDetails;