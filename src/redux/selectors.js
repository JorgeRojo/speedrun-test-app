import get from 'lodash.get';
import { createSelector } from 'reselect';

export const parseRouteGameId = ({ path }) => path.split('/')[1];

export const runGameSelector = (state, gameId) => createSelector(
    () => state.entities.runs,
    runs => runs.data.find(run => run.gameId === gameId)
);

export const playerRunSelector = (state, gameId) => createSelector(
    runGameSelector(state, gameId),
    run => playerByUri(state, get(run, 'playerUri'))
);

export const playerByUri = (state, uri) => {
    const { data } = state.entities.players;
    return data.find(player => player.uri === uri);
};

export const gameSelector = (state, gameId) => createSelector(
    () => state.entities.games,
    games => games.data.find(game => game.id === gameId)
);