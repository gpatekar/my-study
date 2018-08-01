var express = require('express');
var router = express.Router();
var feedbackData = require('../data/feedback.json');
var bodyParser = require('body-parser');


/* GET users listing. */
router.get('/', function(req, res) {
  res.json(feedbackData);
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));


router.post('/', function(req, res) {
  feedbackData.unshift(req.body); // to shift the json data to bottom in the array
  res.json(feedbackData);
});


module.exports = router;