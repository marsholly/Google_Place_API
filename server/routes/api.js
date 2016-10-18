const express = require('express');

const router = new express.Router();

router.use('/googleMap', require('./googleMap'));

module.exports = router;
