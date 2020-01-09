import React from 'react';

//Redux
import { connect } from 'react-redux';

//Style
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

const Profile = ({ user, auth }) => {

    for (let key in user.credentials) {
        console.log(key, user.credentials[key]);
    }

    return (
        <Box>
            <h1>Profile</h1>
            <Image
                src={user.credentials.imageUrl}
                sx={{
                    width: ['200px', '300px'],
                    borderRadius: 8,
                }}
            />
        </Box>

    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
})(Profile);