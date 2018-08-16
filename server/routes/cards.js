const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');

router.route('/').get((req, res) => {
  return Card.fetchAll()
    .then(cards => {
      return res.json(cards);
    })
    .catch(err => {
      console.log(err.message);
    });
});
module.exports = router;
