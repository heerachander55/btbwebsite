var express = require('express');
var router = express.Router();

var user = "";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'List', user:"" });
  res.render('card', {});
});
/* GET home page. */
router.post('/list', function(req, res, next) {
  res.render('list', { title: 'List', user:"" });
});

module.exports = router;

