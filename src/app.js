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

// Models
import Users from 'models/users';
Users.sync({ force: true }).then(() => console.log('Sync `users` table') );

// Support Json
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

// Loading Routes
app.use('/', rootRoutes);
app.use('/auth', authRoutes);
app.use('/users', usersRoutes);

export default app;
