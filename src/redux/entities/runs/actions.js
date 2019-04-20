import fetch from 'isomorphic-fetch';
export const REQUEST_RUNS = 'REQUEST_RUNS';
export const RECEIVE_RUNS = 'RECEIVE_RUNS';
export const ROLLBACK_RUNS = 'ROLLBACK_RUNS';


const requestRuns = () => ({
    type: REQUEST_RUNS
});

const receiveRuns = (payload) => ({
    type: RECEIVE_RUNS,
    payload
});

const rollbackRuns = (payload) => ({
    type: ROLLBACK_RUNS,
    payload
});

const fetchRuns = (gameId) => async (dispatch, getState) => {

    dispatch(requestRuns());

    try {
        const response = await fetch(`https://www.speedrun.com/api/v1/runs?game=${gameId}&max=1`);
        const { data } = await response.json(); 
        return dispatch(receiveRuns(data));
    }
    catch (e) {
        const { entities } = getState();
        return dispatch(rollbackRuns(entities.runs.data));
    }
};

const shouldFetchRuns = (gameId, { entities }) => (
    !entities.runs.data.find(run => run.gameId === gameId)
);

export const getRuns = (gameId) => async (dispatch, getState) => {
    if (shouldFetchRuns(gameId, getState())) {
        return await dispatch(fetchRuns(gameId));
    }
};