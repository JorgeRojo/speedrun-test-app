import React from 'react';
import Title from '../Title';
import GoBackBtb from '../GoBackBtb';
import VideoBtn from './VideoBtn';
import TimeDisplay from './TimeDisplay';
import GameCard from '../GamesList/GameCard';

const RunScreen = ({ run, player, game }) => {

    const { videoLink, time } = run;

    return (
        <>
            <GoBackBtb />
            <VideoBtn videoLink={videoLink} />
            <Title>Player: <b>{player.name}</b></Title>
            <TimeDisplay time={time} />
            <GameCard game={game} hideButton />
        </>
    );
}

export default RunScreen;