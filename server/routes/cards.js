const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');

router
  .route('/')
  .get((req, res) => {
    return Card.fetchAll()
      .then(cards => {
        return res.json(cards);
      })
      .catch(err => {
        console.log(err.message);
      });
  })
  .post((req, res) => {
    let { title, body, priority_id, status_id, created_by, assigned_to } = req.body;
    const card = {
      title: title ? title : null,
      body: body ? body : null,
      priority_id,
      status_id,
      created_by,
      assigned_to
    };

    return new Card(card).save().then(card => {
      return res.json(card);
    });
  });
module.exports = router;
