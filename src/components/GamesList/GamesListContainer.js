import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGames } from '../../redux/entities/games/actions';

import Alert from '../Alert';
import Loading from '../Loading';
import GamesList from './GamesList';


const GamesListContainer = ({ isFetching, fetchError, gamesList, getGames }) => {

    useEffect(() => {
        getGames();
    }, []);

    if (fetchError) {
        return ( <Alert>Error getting data!</Alert>);
    }

    if (isFetching) {
        return (<Loading />);
    }

    return (<GamesList gamesList={gamesList} />);
}

const mapStateToProps = ({ entities }) => ({
    isFetching: entities.games.isFetching,
    fetchError: entities.games.fetchError,
    gamesList: entities.games.data,
});

const mapDispatchToProps = (dispatch) => ({
    getGames: bindActionCreators(getGames, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GamesListContainer);