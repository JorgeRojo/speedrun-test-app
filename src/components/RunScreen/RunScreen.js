import React from 'react';
import Title from '../Title';
import GoBackBtb from '../GoBackBtb';
import VideoBtn from './VideoBtn';
import TimeDisplay from './TimeDisplay';

const RunScreen = ({ run }) => {

    const { id, videoLink, time } = run;

    return (
        <>
            <GoBackBtb />
            <VideoBtn videoLink={videoLink} />
            <Title>{id}</Title>
            <TimeDisplay time={time} />
        </>
    );
}

export default RunScreen;