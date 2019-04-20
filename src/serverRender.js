import React from 'react';
import { renderToString } from 'react-dom/server';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { getGames } from './redux/entities/games/actions';

import App from './components/App';

const render = async (req, initialState) => {

    const store = configureStore(initialState);

    // load games
    await store.dispatch(getGames());

    const content = renderToString(
        <Provider store={store} >
            <StaticRouter location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    );

    return {
        content,
        state: store.getState()
    };
}

export default render