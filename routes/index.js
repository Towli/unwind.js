var express = require('express');
var router = express.Router();

/* GET landing page of app. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'unwind.js' });
});

/* GET paint-app index page. */
router.get('/paint', function(req, res, next) {
  res.render('canvas/index', { title: 'paint' });
});

/* GET write-app index page. */
router.get('/write', function(req, res, next) {
  res.render('editor/index', { title: 'write' });
});

router.post('/write', function(req, res, next) {
	var response = {
		status: 200,
		success: 'Text-editor data received successfully'
	};
	res.end(JSON.stringify(response));
});

module.exports = router;
