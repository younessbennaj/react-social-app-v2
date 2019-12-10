import React from 'react';
import styled from 'styled-components';


const Navbar = () => {
    return (
        <header>
            <img src="https://via.placeholder.com/100x50.png" alt="" />
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Signup</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;