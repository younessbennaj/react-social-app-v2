import React from 'react';
import { BrowserRouter as Router, Route, Link as RouteLink, Switch } from "react-router-dom";

import Navbar from './containers/Navbar';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Home from './containers/Home';
import Profile from './containers/Profile';

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import preset from '@rebass/preset'

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

function Index() {
    return (
        <Box
            sx={{
                p: 4,
                color: 'text',
                bg: 'background',
                fontFamily: 'body',
                fontWeight: 'body',
                lineHeight: 'body',
            }}>
            <Heading as='h1' variant='display'>Hello</Heading>
            <Text mb={4}>This is a social app demo</Text>
            <Button mr={3}>
                Login
            </Button>
            <Button variant='secondary'>
                Signup
            </Button>
        </Box>
    );
}

// function Navbar() {
//     return (
//         <header>
//             <Flex
//                 px={2}
//                 py={3}
//                 color='white'
//                 bg='blue'
//                 alignItems='center'>
//                 <Text p={2} fontWeight='bold'>Social App</Text>
//                 <Box mx='auto' />
//                 <Link as={RouteLink} variant='nav' to="/" color="white" pr={2}>Home</Link>
//                 <Link as={RouteLink} to="/login/" color="white" pr={2}>Login</Link>
//                 <Link as={RouteLink} to="/signup/" color="white">Signup</Link>
//             </Flex>
//         </header>
//     )
// }

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/profile" exact component={Profile} />
                        <Route path="*" component={() => "404 not found"} />
                    </Switch>
                </div>
            </Router>
        </ThemeProvider >
    );
}

export default App;