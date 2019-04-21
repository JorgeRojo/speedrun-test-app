import React from 'react';
import Title from '../Title';
import GoBackBtb from '../GoBackBtb';
import VideoBtn from './VideoBtn';
import TimeDisplay from './TimeDisplay';

const RunScreen = ({ run, player }) => {

    const { id, videoLink, time } = run;

    return (
        <>
            <GoBackBtb />
            <VideoBtn videoLink={videoLink} />
            <Title>Player: {player.name}</Title>
            <TimeDisplay time={time} />
        </>
    );
}

export default RunScreen;