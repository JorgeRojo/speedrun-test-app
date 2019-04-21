import get from 'lodash.get';
import { REQUEST_GAMES, RECEIVE_GAMES, ROLLBACK_GAMES } from './actions';
import initialState from '../../initialState';

export default function games(state = initialState.entities.games, action) {
    const { type, payload } = action;

    switch (type) {
        case REQUEST_GAMES:
            return ({
                ...state,
                isFetching: true,
                fetchError: false,
            });
        case RECEIVE_GAMES:
            return ({
                data: [
                    ...state.data,
                    ...payload.map(game => ({
                        id: game.id,
                        name: get(game, 'names.twitch') || get(game, 'names.international'),
                        logoUri: get(game, 'assets.logo.uri'),
                    })),
                ],
                isFetching: false,
            });
        case ROLLBACK_GAMES:
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
