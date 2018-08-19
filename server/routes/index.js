const express = require('express');
const router = express.Router();
const users = require('./users');
const status = require('./status');
const priorities = require('./priorities');
const cards = require('./cards');

router.use('/users', users);
router.use('/status', status);
router.use('/priorities', priorities);
router.use('/cards', cards);
module.exports = router;
