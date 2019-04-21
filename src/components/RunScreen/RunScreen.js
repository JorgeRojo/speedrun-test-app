import React from 'react';
import Title from '../Title';
import GoBackBtb from '../GoBackBtb';

const RunScreen = ({ run }) => { 

    return (
        <>
            <GoBackBtb /> 
            <Title>{run.id}</Title> 
        </>
    );
}

export default RunScreen;