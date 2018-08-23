const express = require('express');

const router = express.Router();

router.get('/login', (req, res) => {
  res.send('stubbed auth login form page');
});

router.post('/login', (req, res) => {
  res.send('stubbed auth login post route');
});

router.get('/signup', (req, res) => {
  res.send('stubbed auth signup form page');
});

router.post('/signup', (req, res) => {
  res.send('stubbed auth signup post route');
});

router.get('/logout', (req, res) => {
  res.send('logout');
});


module.exports = router;
