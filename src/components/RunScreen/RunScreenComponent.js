import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getRuns } from '../../redux/entities/runs/actions';
import { parseRouteGameId, runGameSelector } from '../../redux/selectors';

import Alert from '../Alert';
import Loading from '../Loading';
import RunScreen from './RunScreen';

const RunScreenComponent = ({ isFetching, fetchError, match, run, getRuns }) => {

    const gameId = parseRouteGameId(match);

    useEffect(() => {
        if (gameId) {
            getRuns(gameId);
        }
    }, [run]);

    if (fetchError) {
        return (<Alert>Error getting data!</Alert>);
    }

    if (isFetching || !run) {
        return (<Loading />);
    }

    return (<RunScreen run={run} />);
};

const mapStateToProps = (state, { match }) => {
    const { runs } = state.entities;
    const gameId = parseRouteGameId(match);
    return ({
        isFetching: runs.isFetching,
        fetchError: runs.fetchError,
        run: runGameSelector(state, gameId)(),
    })
};

const mapDispatchToProps = (dispatch, { }) => ({
    getRuns: bindActionCreators(getRuns, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RunScreenComponent);