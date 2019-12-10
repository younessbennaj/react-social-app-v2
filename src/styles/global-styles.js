import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *,
    *::before,
    * {
        margin: 0px;
        padding: 0px;
        box-sizing: inherit;
    }
    
    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }
    
    body {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        line-height: 1.6em;
        color: #494949;
        // padding: 30px;
    }
    
    ul {
        list-style: none;
    }
    
    li, a, button {
        font-weight: 500;
        font-size: 1.6rem;
        text-decoration: none;
        color: #4b4b4b;
    }
`
