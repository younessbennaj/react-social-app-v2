import React from 'react';

import format from 'date-fns/format';
import parseISO from 'date-fns/parseISO';

import {
    Box,
    Card,
    Image,
    Heading,
    Text,
    Button,
    Flex
} from 'rebass/styled-components'

const ProfileDetails = ({ user }) => {

    const getDate = (date) => {
        let someday = parseISO(date);
        return format(someday, 'LLLL yyyy');
    }

    const handleClick = () => {
        console.log('edit profile');
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