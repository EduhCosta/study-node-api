'use strict';

export const get = (req, res, next) => {
    console.log('GET: `/`');
    res.status(200).send({
        name: 'Node API',
        version: '0.0.3'
    });
};