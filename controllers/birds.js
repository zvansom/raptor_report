const express = require('express');

const router = express.Router();

const loggedIn = require('../middleware/loggedIn');

const db = require('../models');

router.get('/', loggedIn, (req, res) => {
    console.log(req.user);
    db.bird.findAll({ where: { userId: req.user.id } 
    })
    .then( birds => { 
        console.log(birds);
        res.render('birds/index', { birds }) })
    .catch( err => {
        console.log(err);
        res.send('oops');
    });
});

module.exports = router;