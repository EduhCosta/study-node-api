'use strict';

import express from 'express';
import bodyParser from 'body-parser'; 
import envSafe from 'dotenv-safe';
envSafe.load();
// Routes
import rootRoutes from 'routes/root';
import authRoutes from 'routes/authentication';
import usersRoutes from 'routes/users';

const app = express();

// Support Json
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Loading Routes
app.use('/', rootRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

export default app;
