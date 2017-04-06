var express = require('express');
var session = require('express-session');
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
	var timestampStr = "";
	if (req.session.timestamp)
		timestampStr = "Last edit: " + req.session.timestamp;
	res.render('editor/index', {
		title: "write",
		content: req.session.lastSave,
		timestamp: timestampStr
	});
});

router.post('/write', function(req, res, next) {
	var content = req.body.data;
	var currentDate = new Date();
	currentDate = currentDate.toUTCString();

	req.session.lastSave = content;
	req.session.timestamp = currentDate;

	res.end(currentDate);
});

module.exports = router;
