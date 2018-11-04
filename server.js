'use strict';

import http from 'http';
// Utils
import normalizePort from 'utils/normalizePort';
// App
import app from './src/app';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server  = http.createServer(app);

server.listen(port, () => {
    console.log('Serving on Port:', port);
});