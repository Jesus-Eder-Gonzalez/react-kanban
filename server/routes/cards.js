const express = require('express');
const router = express.Router();
const Card = require('../db/models/Card');

router
  .route('/')
  .get((req, res) => {
    return Card.fetchAll({ withRelated: ['creator', 'assigned', 'priority'] })
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

    return new Card(card)
      .save()
      .then(response => {
        return response.refresh({ withRelated: ['creator', 'assigned', 'priority'] });
      })
      .then(card => {
        return res.json(card);
      });
  })
  .put((req, res) => {
    console.log(req.body);
    // let {
    //   title,
    //   body,
    //   priority_id,
    //   status_id,
    //   created_by,
    //   assigned_to,
    //   id
    // } = req.body;
    // const card = {
    //   id,
    //   title,
    //   body,
    //   priority_id,
    //   status_id,
    //   created_by,
    //   assigned_to
    // };
    return new Card(req.body)
      .save()
      .then(response => {
        return response.refresh({ withRelated: ['creator', 'assigned', 'priority'] });
      })
      .then(card => {
        return res.json(card);
      });
  })
  .delete((req, res) => {
    return new Card({ id: req.body.id })
      .destroy()
      .then(() => {
        return Card.fetchAll({
          withRelated: ['creator', 'assigned', 'priority']
        });
      })
      .then(cards => {
        return res.json(cards);
      });
  });

module.exports = router;
