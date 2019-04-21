import fetch from 'isomorphic-fetch'; 
export const REQUEST_GAMES = 'REQUEST_GAMES';
export const RECEIVE_GAMES = 'RECEIVE_GAMES';
export const ROLLBACK_GAMES = 'ROLLBACK_GAMES';

const requestGames = () => ({
    type: REQUEST_GAMES
});

const receiveGames = (payload) => ({
    type: RECEIVE_GAMES,
    payload
});

const rollbackGames = (payload) => ({
    type: ROLLBACK_GAMES,
    payload
});


const fetchGames = () => async (dispatch, getState) => {

    dispatch(requestGames());

    try {
        const response = await fetch(`https://www.speedrun.com/api/v1/games?offset=0`);
        const { data } = await response.json();
        return dispatch(receiveGames(data));
    }
    catch (e) {
        const { entities } = getState();
        return dispatch(rollbackGames(entities.games.data));
    }
};

const shouldFetchGames = ({ entities }) => (
    entities.games.data.length === 0
);

export const getGames = () => async (dispatch, getState) => {
    if (shouldFetchGames(getState())) {
        return await dispatch(fetchGames());
    }
};
 