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

//Components
import ProfileDetails from '../components/ProfileDetails';

const Profile = ({ user: { credentials, loading }, auth, signOut, history }) => {


    const handleClick = () => {
        signOut(history);
        console.log('clicked');
    }

    useEffect(() => {
        console.log(loading);
    }, [loading])

    return (
        <Box bg="#F6F6F6">

            {loading ? (
                <Text textAlign="center">Loading...</Text>
            ) : (
                    <Box>
                        <ProfileDetails user={credentials} />
                        <Button mr={3} onClick={handleClick}>
                            Logout
                        </Button>
                    </Box>
                )}
        </Box >

    );
}

function mapStateToProps(state) {
    const { user, auth } = state;
    return { user, auth };
}

export default connect(mapStateToProps, {
    signOut
})(Profile);