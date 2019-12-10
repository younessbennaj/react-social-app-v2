import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import GlobalStyles from './styles/global-styles';

import App from './App';
import reducers from './reducers';

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
        <GlobalStyles />
    </Provider>,
    document.getElementById('root'));
