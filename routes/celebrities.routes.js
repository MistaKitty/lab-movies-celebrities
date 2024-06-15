const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('List of celebrities');
});

router.get('/create', (req, res) => {
    res.send('form of celebrities');
  });

module.exports = router;
