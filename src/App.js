import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Signup from './containers/Signup';

import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { color } from 'styled-system'

import theme from './styles/theme';

const Box = styled.div`
  ${color}
`

function Index() {
    return (
        <Box color="black" bg="blue">
            <h1>Home</h1>
        </Box>
    );
}

function Login() {
    return (
        <div>
            <h1>Login</h1>
        </div>
    );
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div>
                    <header>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login/">Login</Link>
                                </li>
                                <li>
                                    <Link to="/signup/">Signup</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <Route path="/" exact component={Index} />
                    <Route path="/login/" component={Login} />
                    <Route path="/signup/" component={Signup} />
                </div>
            </Router>
        </ThemeProvider>
    );
}

export default App;