'use strict';

// Express
import express from 'express';
// Controllers
import * as rootController from 'controllers/root';

const router = express.Router();

router.get('/', rootController.get);

export default router;
