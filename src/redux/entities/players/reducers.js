import get from 'lodash.get';
import { REQUEST_PLAYERS, RECEIVE_PLAYERS, ROLLBACK_PLAYERS } from './actions';
import initialState from '../../initialState';

export default function runs(state = initialState.entities.players, action) {
    const { type, payload } = action;

    switch (type) {
        case REQUEST_PLAYERS:
            return ({
                ...state,
                isFetching: true,
                fetchError: false,
            });
        case RECEIVE_PLAYERS: 
            return ({
                data: [
                    ...state.data,
                    ...payload.map(player => ({
                        name: get(player, 'name') || get(player, 'names.international'),
                        uri: player.links.reduce((uri, link) => (
                            link.rel === 'self' ? link.uri : uri
                        ), undefined)
                    })),
                ],
                isFetching: false,
            });
        case ROLLBACK_PLAYERS:
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
