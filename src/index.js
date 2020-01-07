import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GlobalStyles from './styles/global-styles';
import store from './store';

import App from './App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={store}>
        <App />
        <GlobalStyles />
    </Provider>,
    document.getElementById('root'));
