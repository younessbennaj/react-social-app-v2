import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('<https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap>');

    *,
    *::before,
    * {
        margin: 0;
        padding: 0;
        outline: 0; 
        border: 0;
        box-sizing: inherit;
    }

    *:focus {
        outline: 0;
    }

    html, body, #root {
        height: 100%;
    }
    
    html {
        box-sizing: border-box;
    }
    
    body {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        line-height: 1.6em;
        color: #494949;
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
    
    button {
        cursor: pointer;
    }
  
`
