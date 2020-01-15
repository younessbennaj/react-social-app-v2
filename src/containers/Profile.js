import React, { useEffect } from 'react';

//Redux
import { connect } from 'react-redux';
import { signOut } from '../actions'

//Style
import {
    Box,
    Image,
    Text,
    Button,
} from 'rebass/styled-components'

const Profile = ({ user: { credentials, loading }, auth, signOut, history }) => {

    const handleClick = () => {
        signOut(history);
        console.log('clicked');
    }

    useEffect(() => {
        console.log(loading);
    }, [loading])

    return (
        <Box>
            {loading ? (
                <Text textAlign="center">Loading...</Text>
            ) : (
                    <Box>
                        <h1>Profile</h1>
                        <Image
                            src={credentials.imageUrl}
                            sx={{
                                width: ['200px', '300px'],
                                borderRadius: 8,
                            }}
                        />
                        <Button mr={3} onClick={handleClick}>
                            Logout
                    </Button>
                    </Box>
                )}
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