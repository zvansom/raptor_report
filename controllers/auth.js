const express = require('express');

const db = require('../models');

const router = express.Router();

router.get('/login', (req, res) => {
  res.render('auth/login');
});

router.post('/login', (req, res) => {
  res.send('stubbed auth login post route');
});

router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

router.post('/signup', (req, res) => {
  console.log(req.body)
  req.body.admin = false;
  db.user.findOrCreate({
    where: { email: req.body.email },
    defaults: req.body })
  .spread( (user, wasCreated) => {
    if (wasCreated) { // Expected behavior
      // Log the user in
      res.redirect('/profile');
    } else { // User already exists
      // TODO: Send an error message.
      res.redirect('/auth/login');
    }
  }).catch( err => {
    console.log(err);
    res.send(err);
  })
});

router.get('/logout', (req, res) => {
  res.render('auth/logout');
});


module.exports = router;
