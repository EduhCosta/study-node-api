'use strict';

// Express
import express from 'express';
// Controllers
import * as authentication from 'controllers/authentication';

const router = express.Router();

// Authentication
router.post('/login', authentication.login);
router.get('/logout', authentication.logout);

export default router;
