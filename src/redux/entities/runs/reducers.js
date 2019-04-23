import get from 'lodash.get';
import { REQUEST_RUNS, RECEIVE_RUNS, ROLLBACK_RUNS } from './actions';
import initialState from '../../initialState';

export default function runs(state = initialState.entities.runs, action) {
    const { type, payload } = action;

    switch (type) {
        case REQUEST_RUNS:
            return ({
                ...state,
                isFetching: true,
                fetchError: false,
            });
        case RECEIVE_RUNS:
            return ({
                data: [
                    ...state.data,
                    ...payload.map(record => ({
                        id: get(record, 'runs[0].run.id'),
                        gameId: get(record, 'runs[0].run.game'),
                        videoLink: get(record, 'runs[0].run.videos.links[0].uri'),
                        time: get(record , 'runs[0].run.times.primary_t'),
                        playerUri: get(record, 'runs[0].run.players[0].uri'),
                    })),
                ],
                isFetching: false,
            });
        case ROLLBACK_RUNS:
            return ({
                data: [
                    ...state.data,
                    ...payload,
                ],
                isFetching: false,
                fetchError: true,
            });
        default:
            return state;
    }
}
