'use strict';

// Express
import express from 'express';
// Middleware
import verifyToken from 'middleware/verifyToken';
// Controllers
import * as users from 'controllers/users';

const router = express.Router();

// Users
router.post('/', users.createUser);
router.get('/', users.allUsers);
router.get('/:id', users.user);
router.put('/:id', users.refreshUser);
router.delete('/:id', users.deleteUser);

export default router;
