var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/allads', function(req, res, next) {
  res.render('allads');
});

module.exports = router;
