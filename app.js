var express = require('express');
var session = require('express-session');
var helmet = require('helmet');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var app = express();

/* Use helmet early to ensure headers are sure to be set */
app.use(helmet());

/* Setup the view engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* Configure general dependencies */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'ke9375v0m44o0009473n3ann',
  resave: true,
  saveUninitialized: true,
  name: 'sessionId'
}));
  
/* Application entry point -> uses the Router */
app.use('/', index);

/* Catch 404 and forward to error handler */
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* Configure error handler */
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('shared/error');
});

module.exports = app;
