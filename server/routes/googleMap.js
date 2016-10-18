const express = require('express');

const router = new express.Router();

const Direction = require('../models/direction');


router.route('/places')
  .get((req, res) => {
    Direction.getPlaces(req.query, res.handle);
  });

module.exports = router;
