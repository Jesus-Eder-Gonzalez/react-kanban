const express = require('express');
const router = express.Router();
const User = require('../db/models/User');

router.route('/').get((req, res) => {
  return User.fetchAll()
    .then(users => {
      return res.json(users);
    })
    .catch(err => {
      console.log(err.message);
    });
});
module.exports = router;
