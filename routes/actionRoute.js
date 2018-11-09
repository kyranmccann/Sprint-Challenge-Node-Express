const express = require('express');
const router = express.Router();
const actionModel = require('../data/helpers/actionModel');

router.get('/', (req, res) => {
  actionModel
    .get()
    .then(posts=> res.status(200).json(posts))
    .catch(err => res.status(500).json({ error: "The project information could not be retrieved."}))
})

module.exports = router;