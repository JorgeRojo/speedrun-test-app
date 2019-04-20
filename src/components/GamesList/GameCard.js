import React from 'react'; 

const GameCard = ({ game, hideButton }) => {
    return (
        <div className="card mb-4 shadow-sm text-center">
            <div className="card-img-top bg-dark p-4" >
                <img className="img-fluid" alt={game.name} src={game.logoUri} />
            </div>
            <div className="card-body">
                <h2 className="card-title h5">{game.name}</h2>
                {!hideButton &&
                    <a href={game.id} className="btn btn-primary d-block"> show run </a>
                }
            </div>
        </div>
    );
}

export default GameCard;