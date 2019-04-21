import path from 'path';
import express from 'express';

import pageTemplate from './pageTemplate';
import serverRender from './serverRender';
import initialState from './redux/initialState';

const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'development') {
    const webpack = require('webpack');
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('../webpack.config.js');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.get('/*', async (req, res) => {
    const response = pageTemplate({
        ...(await serverRender(req, initialState)),
        title: "Speedrun games",
    });
    res.send(response);
});

app.disable('x-powered-by');

app.listen(port, () => {
    console.log(`== server is running on localhost:${port} ==`);
});