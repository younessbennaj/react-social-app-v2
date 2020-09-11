import React from 'react';
import { BrowserRouter as Router, Route, Link as RouteLink, Switch } from "react-router-dom";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

//Containers
import Signup from './containers/Signup';
import Login from './components/Login';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Post from './containers/Post';

//Hoc 
import requireAuth from './hoc/requiresAuth';

//Layout
import Layout from './hoc/layout/Layout';

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
import { getUserData, signOut } from './actions';

//axios 

axios.defaults.baseURL =
    'https://europe-west1-my-tcc-project-66a43.cloudfunctions.net/api';

const token = localStorage.getItem('FBIdToken');

//Persisting login state
if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
        store.dispatch(signOut());
    } else {
        //On dispatch directement une action en utilisant store.dispatch
        store.dispatch({ type: actions.AUTH_SUCCESS });
        axios.defaults.headers.common['Authorization'] = token;
        store.dispatch(getUserData());
    }
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" exact component={Login} />
                        <Route path="/signup" exact component={Signup} />
                        <Route path="/profile" exact component={requireAuth(Profile)} />
                        <Route path="/post/:id" exact component={requireAuth(Post)} />
                        <Route path="*" component={() => "404 not found"} />
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider >
    );
}

export default App;