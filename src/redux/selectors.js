import { createSelector } from 'reselect';

export const parseRouteGameId = ({ path }) => path.split('/')[1];

export const runGameSelector = (state, gameId) => createSelector(
    () => state.entities.runs,
    runs => runs.data.find(run => run.gameId === gameId)
);