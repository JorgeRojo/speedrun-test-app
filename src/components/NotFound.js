import React from 'react';
import Title from './Title';
import GoBackBtb from './GoBackBtb';

const Loading = ({ staticContext = {} }) => {

    staticContext.status = 404;

    return (
        <>
            <GoBackBtb />
            <Title>Ooops!</Title>
            <p><b>Error 404</b></p>
            <p>Page not found</p>
        </>
    );
};

export default Loading;