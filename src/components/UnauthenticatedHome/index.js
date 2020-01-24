import React from 'react';
import { Link as RouterLink } from 'react-router-dom'

//Style
import {
    Box,
    Heading,
    Text,
    Button,
    Link
} from 'rebass/styled-components';

const UnauthenticatedHome = () => {
    return (
        <Box
            sx={{
                p: 4,
                color: 'text',
                bg: 'background',
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
                textAlign: 'center'
            }}>
            <Heading
                as='h1'
                variant='mainTitle'
            >
                Hello !
            </Heading>
            <Text variant='subTitle' mb={4}>This is a social app demo</Text>
            <Button as={RouterLink} to='/login' mr={3}>
                Login
            </Button>
            <Button as={RouterLink} to='/signup' variant='secondary'>
                Signup
            </Button>
        </Box>
    )
}

export default UnauthenticatedHome;