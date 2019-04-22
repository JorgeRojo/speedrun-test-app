import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';

import App from './components/App';


const state = window.__STATE__;

delete window.__STATE__;

const store = configureStore(state);

hydrate((
    <Provider store={store} >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.querySelector('#app'));


if (window.Cypress) {
    window.reduxStore = store;
}