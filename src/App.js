import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from 'styled-components';

function Index() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function Login() {
    return (
        <div>
            <h2>Login</h2>
        </div>
    );
}

function Signup() {
    return (
        <div>
            <h2>Signup</h2>
        </div>
    );
}

const App = () => {
    return (
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
    );
}

export default App;