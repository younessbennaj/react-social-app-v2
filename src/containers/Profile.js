import React from 'react';

//Redux
import { connect } from 'react-redux';
import { signOut } from '../actions'

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

const Profile = ({ user, auth, signOut, history }) => {

    const handleClick = () => {
        signOut(history);
        console.log('clicked');
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
            <Button mr={3} onClick={handleClick}>
                Logout
            </Button>
        </Box>

    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
    signOut
})(Profile);