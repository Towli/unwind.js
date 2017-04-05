var express = require('express');
var router = express.Router();

/* GET landing page of app. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'unwind.js' });
});

/* GET landing page of app. */
router.get('/paint', function(req, res, next) {
  res.render('canvas/index', { title: 'paint' });
});

router.get('/write', function(req, res, next) {
  res.render('editor/index', { title: 'write' });
});

module.exports = router;
