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
    // console.log(user.location);
    const getDate = (date) => {
        let someday = parseISO(date);
        return format(someday, 'LLLL yyyy');
    }
    // if (user.createdAt) {
    //     let joinDate = parseISO(user.createdAt);
    //     console.log(format(someday, 'LLLL yyyy'));
    // }
    // console.log(format(someday, 'MM/dd/yyyy'));

    return (
        <Card
            sx={{
                p: 4,
                color: 'text',
                bg: 'background',
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
            }}
        >
            <Image width="100px" src={user.imageUrl}></Image>
            <Heading>{user.firstName} {user.lastName}</Heading>
            <Text>{user.bio}</Text>
            {/* <Text>{format(parseISO(user.location), 'LLLL yyyy')}</Text> */}
            {/* <Text>Join Social App in {getDate(user.createdAt)}</Text> */}
        </Card>
    );
}

export default ProfileDetails;