import React from 'react';
import { BrowserRouter as Router, Route, Link as RouteLink, Switch } from "react-router-dom";
import axios from 'axios';

//Containers
import Navbar from './containers/Navbar';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Home from './containers/Home';
import Profile from './containers/Profile';


//Style
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

//Redux
import store from './helpers/store';
import * as actions from './actions/actionTypes';
import { getUserData } from './actions';

//axios 
const instance = axios.create({
    baseURL: 'http://localhost:5000/my-tcc-project-66a43/europe-west1/api',
});

const token = localStorage.getItem('FBIdToken');

//Persisting login state
if (token) {
    store.dispatch({ type: actions.AUTH_SUCCESS });
    instance.defaults.headers.common['Authorization'] = token;
    store.dispatch(getUserData(instance));
}

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