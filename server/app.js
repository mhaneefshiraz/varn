var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dbSetting = require('./src/config/env.config')
var env=require('./src/config/env.config')

var auth = require('./src/routes/auth.route');
var dashboard = require('./src/routes/dashboard.route');

var app = express();

app.set('dbSetting', dbSetting);


// Setup database _connection
let SETTINGS = app.get('dbSetting');
let db = require("./src/components/db").connect(SETTINGS);

app.set('db', db);


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', "*");

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,authorization');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '/client')));
console.log(path.join(__dirname, '/client'))

app.use('/apiV1/auth', auth);
app.use('/apiV1/dashboard', dashboard);

app.use('*',(req,res)=>{
  console.log(path.join(__dirname, '/client/index.html'))
  return res.sendFile(path.join(__dirname, '/client/index.html'))

})
// var data = ['2019-07-15'];
// app.get('/test', function(req, res){
//   // store in memory
//   data.push(req.body);
//   // send it back, updated, in json
//   res.setHeader('Content-Type', 'application/json');
//   res.send(data);
// });

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
