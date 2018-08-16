const express = require('express');
const router = express.Router();
const Status= require('../db/models/Status');

router.route('/').get((req, res) => {
  return Status.fetchAll()
    .then(stats => {
      return res.json(stats);
    })
    .catch(err => {
      console.log(err.message);
    });
});
module.exports = router;
