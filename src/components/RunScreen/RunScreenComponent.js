import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRuns } from '../../redux/entities/runs/actions';
import { getPlayer } from '../../redux/entities/players/actions';
import {
    parseRouteGameId,
    runGameSelector,
    playerRunSelector
} from '../../redux/selectors';

import Alert from '../Alert';
import Loading from '../Loading';
import RunScreen from './RunScreen';

const RunScreenComponent = ({ isFetching, fetchError, match, run, player, getRuns, getPlayer }) => {

    const gameId = parseRouteGameId(match);

    useEffect(() => {
        if (gameId) {
            getRuns(gameId);
        }
        if (run) {
            getPlayer(run.playerUri);
        }
    }, [run, player]);

    if (fetchError) {
        return (<Alert>Error getting data!</Alert>);
    }

    if (isFetching || !run || !player) {
        return (<Loading />);
    }

    return (<RunScreen run={run} player={player} />);
};

const mapStateToProps = (state, { match }) => {
    const { runs, players } = state.entities;
    const gameId = parseRouteGameId(match);
    return ({
        isFetching: runs.isFetching || players.isFetching,
        fetchError: runs.fetchError || players.fetchError,
        run: runGameSelector(state, gameId)(),
        player: playerRunSelector(state, gameId)(),
    })
};

const mapDispatchToProps = (dispatch, { }) => ({
    getRuns: bindActionCreators(getRuns, dispatch),
    getPlayer: bindActionCreators(getPlayer, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RunScreenComponent);