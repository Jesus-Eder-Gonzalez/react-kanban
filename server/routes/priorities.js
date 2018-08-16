const express = require('express');
const router = express.Router();
const Priority = require('../db/models/Priority');

router.route('/').get((req, res) => {
  return Priority.fetchAll()
    .then(priorities => {
      return res.json(priorities);
    })
    .catch(err => {
      console.log(err.message);
    });
});
module.exports = router;
