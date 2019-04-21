import fetch from 'isomorphic-fetch';
import { playerByUri } from '../../selectors';
export const REQUEST_PLAYERS = 'REQUEST_PLAYERS';
export const RECEIVE_PLAYERS = 'RECEIVE_PLAYERS';
export const ROLLBACK_PLAYERS = 'ROLLBACK_PLAYERS';


const requestPlayers = () => ({
    type: REQUEST_PLAYERS
});

const receivePlayers = (payload) => ({
    type: RECEIVE_PLAYERS,
    payload
});

const rollbackPlayers = (payload) => ({
    type: ROLLBACK_PLAYERS,
    payload
});

const fetchPlayer = (playerUri) => async (dispatch, getState) => {
    dispatch(requestPlayers());

    try {
        const response = await fetch(playerUri);
        const { data } = await response.json();
        return dispatch(receivePlayers([data]));
    }
    catch (e) {
        const { entities } = getState();
        return dispatch(rollbackPlayers(entities.players.data));
    }
};

export const getPlayer = (playerUri) => (dispatch, getState) => {
    if (!playerByUri(getState(), playerUri)) {
        return dispatch(fetchPlayer(playerUri));
    }
};