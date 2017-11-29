const express = require('express');
const router = express.Router();

// modules this api provides routing for
const timestamp = require('../timestamp/timestamp');

// Timestamp Microservice Routes
router.route('/timestamp/api/v1/:query').get(timestamp.parse);
router.route('/timestamp/api/:query').get(timestamp.parse);
router.route('/timestamp/:query').get(timestamp.parse);

// If not an api request, display the index page
router.get('*', (req, res) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.render('index.pug', {
    fullUrl: fullUrl,
    title: 'Timestamp Microservice'
  });
});

module.exports = router;
