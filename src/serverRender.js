import React from 'react';
import { renderToString } from 'react-dom/server';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { getGames } from './redux/entities/games/actions';
import { getRuns } from './redux/entities/runs/actions';
import { getPlayer } from './redux/entities/players/actions';
import { parseRouteGameId, runGameSelector } from './redux/selectors';

import App from './components/App';

const render = async (req, initialState) => {

    const store = configureStore(initialState);
    const gameId = parseRouteGameId({ path: req.url });
    let run;

    // load games
    await store.dispatch(getGames());

    // load runs
    if (gameId) {
        await store.dispatch(getRuns(gameId));
        run = runGameSelector(store.getState(), gameId)(); 
    }
    
    // load player
    if (run && run.playerUri) {
        await store.dispatch(getPlayer(run.playerUri)); 
    }

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