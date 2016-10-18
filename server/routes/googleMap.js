const express = require('express');

const router = new express.Router();

const Direction = require('../models/direction');

router.route('/location')
  .get((req, res) => {
    Direction.getLoacation(req.query, res.handle);
  });


router.route('/places')
  .get((req, res) => {
    Direction.getPlaces(req.query, res.handle);
  });

router.route('/places/details')
  .get((req, res) => {
    Direction.getDetails(req.query, res.handle);
  });

module.exports = router;
