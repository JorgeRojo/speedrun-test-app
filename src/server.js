import path from 'path';
import express from 'express';

import pageTemplate from './pageTemplate';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.get('/*', async (req, res) => {
    const response = pageTemplate({
        content: 'template loaded',
        state: { hello: 'world'},
        title: "Speedrun games",
    });
    res.send(response);
});

app.disable('x-powered-by');

app.listen(port, () => {
    console.log(`== server is running on localhost:${port} ==`);
});