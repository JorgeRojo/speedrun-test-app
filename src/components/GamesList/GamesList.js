import React from 'react';
import Title from './Title';
import GameCard from './GameCard';

const GamesList = ({ gamesList }) => (
    <>
        <Title>Speedrun games list</Title>
        <div className="row">
            {gamesList.map(game => (
                <div key={game.id} className="col-md-6 col-lg-4">
                    <GameCard game={game} />
                </div>
            ))}
        </div>
    </>
);

export default GamesList;