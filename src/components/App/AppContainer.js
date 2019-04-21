import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGames } from '../../redux/entities/games/actions';
import App from './App';
import GameList from '../GamesList';
import NotFound from '../NotFound';
import RunScreen from '../RunScreen';

const AppContainer = ({ gamesList }) => {

    useEffect(() => {
        getGames();
    }, []);

    const routes = [
        {
            path: '/',
            exact: true,
            component: GameList
        },
        ...(gamesList.map(game => ({
            path: `/${game.id}`,
            exact: true,
            component: RunScreen
        }))),
        {
            component: NotFound
        }
    ];

    return (<App routes={routes} />);
}

const mapStateToProps = ({ entities }) => ({
    gamesList: entities.games.data,
});

const mapDispatchToProps = (dispatch) => ({
    getGames: bindActionCreators(getGames, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppContainer);
