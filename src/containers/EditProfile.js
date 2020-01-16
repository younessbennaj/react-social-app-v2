import React from 'react';

import styled from 'styled-components';

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

const EditProfile = () => {
    return (
        <Box
            sx={{
                p: 1,
                borderRadius: 2,
                boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
            }}
        >
            Edit Profile
        </Box>
    );
}

export default EditProfile;