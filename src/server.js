import path from 'path';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.resolve(__dirname, '../public')));

app.get('/*', async (req, res) => {
    res.send(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>
        <h1>Hello word</h1>
    </body>
    </html>
    `);
});

app.disable('x-powered-by');

app.listen(port, () => {
    console.log(`== server is running on localhost:${port} ==`);
});