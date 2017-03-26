import config from './config';
import apiRouter from './api';

import express from 'express';

const server = express();

server.get('/', (req, res) => {

    res.render('index', {
        content: 'Express and <em>EJS</em>'
    });
});

server.set('view engine', 'ejs');

server.use('/api', apiRouter)
server.use(express.static('public'));


server.listen(config.port, () => {
    console.info('Express listening on port ', config.port)
});



