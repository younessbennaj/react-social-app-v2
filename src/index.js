import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GlobalStyles from './styles/global-styles';
import store from './helpers/store';

import App from './App';
import reducers from './reducers';

import "./styles/index.scss";

ReactDOM.render(
    // <Provider store={store}>
    //     <GlobalStyles />
    //     <App />
    // </Provider>,
    <div>
        <h1>Hello World !</h1>
    </div>
    , document.getElementById('root'));
