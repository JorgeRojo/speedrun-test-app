import React from 'react';
import Title from '../Title';
import GoBackBtb from '../GoBackBtb';
import VideoBtn from './VideoBtn';

const RunScreen = ({ run }) => {

    const { id, videoLink } = run;

    return (
        <>
            <GoBackBtb />
            {videoLink &&
                <VideoBtn videoLink={videoLink} />
            }
            <Title>{id}</Title>
        </>
    );
}

export default RunScreen;