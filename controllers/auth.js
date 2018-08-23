const express = require('express');

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
  res.send('stubbed auth signup post route');
});

router.get('/logout', (req, res) => {
  res.render('auth/logout');
});


module.exports = router;
