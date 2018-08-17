const express = require('express');
const router = express.Router();
const Status = require('../db/models/Status');

router.route('/').get((req, res) => {
  return Status.fetchAll()
    .then(stats => {
      return res.json(stats);
    })
    .catch(err => {
      console.log(err.message);
    });
});

router.route('/cards').get((req, res) => {
  return Status.fetchAll({ withRelated: ['cards.creator','cards.assigned', 'cards.priority'] })
    .then(status => {
      // console.log(status.toJSON()[0].cards);
      // console.log(status.toJSON()[0].cards[0].creator);
      res.json(status);
    })
    .catch(err => {
      console.log(err.message);
      res.send(err.message);
    });
});
module.exports = router;
