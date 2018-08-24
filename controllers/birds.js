const express = require('express');

const router = express.Router();

const loggedIn = require('../middleware/loggedIn');

router.get('/', (req, res) => res.render('birds/index') );

module.exports = router;