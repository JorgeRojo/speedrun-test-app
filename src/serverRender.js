import React from 'react';
import { renderToString } from 'react-dom/server';

import App from './components/App';

const render = async (req, initialState) => { 

    const content = renderToString(<App />);

    return {
        content,
        state: initialState
    };
};

export default render;