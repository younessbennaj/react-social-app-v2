import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link as RouteLink, Switch } from "react-router-dom";
import axios from 'axios';
import jwtDecode from 'jwt-decode';

//Containers
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './containers/Home';
import Profile from './containers/Profile';
import Post from './containers/Post';

//Hoc 
import requireAuth from './hoc/requiresAuth';

//Context Provider
import { UserProvider } from './user-context';

//Layout
import Layout from './hoc/layout/Layout';

//Style
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme';
import preset from '@rebass/preset'
import {
    Link
} from 'rebass/styled-components'

import Navbar from "./containers/Navbar";

//Redux
import store from './helpers/store';
import * as actions from './actions/actionTypes';
import { getUserData, signOut } from './actions';

//axios 

if (process.env.NODE_ENV === 'production') {
    axios.defaults.baseURL =
        'https://europe-west1-my-tcc-project-66a43.cloudfunctions.net/api';
}

// if (process.env.NODE_ENV === 'development') {
//     token = "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjczNzVhZmY3MGRmZTNjMzNlOTBjYTM2OWUzYTBlZjQxMzE3MmZkODIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktdGNjLXByb2plY3QtNjZhNDMiLCJhdWQiOiJteS10Y2MtcHJvamVjdC02NmE0MyIsImF1dGhfdGltZSI6MTYwMDE3ODIxOCwidXNlcl9pZCI6IjVqeGh6UmFGWVVQM1RydXVPblR5a1RuTURhQTMiLCJzdWIiOiI1anhoelJhRllVUDNUcnV1T25UeWtUbk1EYUEzIiwiaWF0IjoxNjAwMTc4MjE4LCJleHAiOjE2MDAxODE4MTgsImVtYWlsIjoiamFjay5ibGFja0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamFjay5ibGFja0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.JYeoSec4lYc8B-NXbEeT_insMIbHY6G2tq_V__uF5KmZ0U7IKiUweqqvvTc7A0mUBDs88m443XpZliOgUmGOCsszTO1zmov2kAeHFMm3Ik1Phvv8PTRkRP_KPZGg7OYaRNU9i84r5z0PFy8p9ToxFsQ5lnmstMXxLwLzf5vPn9b6CN5ZuYUKZQpBDbTsABsM5G3_wS2XSTPZWkPicjlOSJjp8upiQroi2JyOr7ZV4fAVAw52YOsKZVFcZMtflnALDP8U63whtw5D0L5WTGHdCCXOglyGtINUyIa2EK9-u-WioGJnp3gFbXLiJ4gPkLNVp1kO1vaL831Z9hWhvrezkA.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbXktdGNjLXByb2plY3QtNjZhNDMiLCJhdWQiOiJteS10Y2MtcHJvamVjdC02NmE0MyIsImF1dGhfdGltZSI6MTYwMDA5NDY2MSwidXNlcl9pZCI6IjVqeGh6UmFGWVVQM1RydXVPblR5a1RuTURhQTMiLCJzdWIiOiI1anhoelJhRllVUDNUcnV1T25UeWtUbk1EYUEzIiwiaWF0IjoxNjAwMDk0NjYxLCJleHAiOjE2MDAwOTgyNjEsImVtYWlsIjoiamFjay5ibGFja0BlbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiamFjay5ibGFja0BlbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.UVIIO7MRlZ766mQpsQglyxRP6U4E_qXAARDwPk51F0YHqGykh-JTi8I_O-v7icOhtC1v1jRJx1JBXosKlcxhrQOPvhch2T5W4H5i4sT-ltlQLm89BoYHfFfDLrJz1-plmDJttlN90pcJs9ZqV2oPN5YGvr36TG04Jb0ylDeT92-wjIXi6BmcPEOJJK_uerkH4-ru-MModKbIFgkGJvQgjVdtjmsop7HIVYAMRg52BEuKPBvm1f9lvGW9GiwM9kjMzHzFtvw0eNZNX6c9BqGwTBvNYOC4vJTN_RNefc-bd0idAAoCC__PKsLmlAdTeiOHdk7-nZ4CTOtIDgeU3iSbKg";
// }

import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const App = () => {

    let token = localStorage.getItem('FBIdToken');

    //user credentials => Server Cache
    const [user, setUser] = useState({});

    //boolean, true if the user is authenticated => Client State
    const [authenticated, setAuthenticated] = useState(!!token);

    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Layout>
                    <Navbar authenticated={authenticated} setAuthenticated={setAuthenticated} />
                    <Switch>
                        <UserProvider>
                            <Route path="/" exact component={() => <Home authenticated={authenticated} />} />
                            <Route path="/profile" exact component={requireAuth(Profile, authenticated)} />
                            <Route path="/post/:id" exact component={requireAuth(Post, authenticated)} />
                        </UserProvider>
                        <Route path="/login" exact render={routeProps => <Login {...routeProps} setAuthenticated={setAuthenticated} />} />
                        <Route path="/signup" exact render={routeProps => <Signup {...routeProps} setAuthenticated={setAuthenticated} />} component={Signup} />
                        <Route path="*" component={() => "404 not found"} />
                    </Switch>
                </Layout>
            </Router>
        </ThemeProvider >
    );
}

export default App;