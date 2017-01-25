var express = require('express');
// var path = require('path')
var bodyParser = require('body-parser');
var cors 		= require('cors');
// import massive from 'massive';
var config 		= require('./config.js');
var massive = require('massive');

var app = express();
app.use(bodyParser.json());
app.use(cors());
let router = express.Router();
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config.dev';
// const compiler = webpack(webpackConfig);
// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: false
// }));
// app.use(webpackHotMiddleware(compiler));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// })




var connect = massive.connectSync({connectionString: config.connectionString});
app.set('db', connect);
var db = app.get('db');


// var db = massive.connect({connectionString: config.connectionString},
//   function(err, localdb){
//     db = localdb;
//     app.set('db', db);
//   }
// )


// var usersCtrl = require('./controllers/usersCtrl') ;





// router.post('/api/users', (req, res) => {
//   const {username, password, timezone, email} = req.body;
//   dom.create_user([username, password, timezone, email], function (err, result) {
//     if (err) {
//       res.status(500).send(err)
//     }else {
//       res.json({ success: true });
//     }
// })
// })


app.post('/api/users', function (req, res) {



  // let { errors, isValid } = validateInput(req.body);
console.log('helo');
  // const {username, password, timezone, email} = req.body;
  db.create_user([req.body.username, req.body.password, req.body.timezone,
     req.body.email], function (err, result) {
    if (err) {
      res.status(500).send(err)
    }else {
      res.json({ success: true });
    }

  })
})







app.listen(3000, function () {
  console.log('Running localhost 3000')
})




//
// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';
//
// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config.dev';
//
// import users from './controllers/usersCtrl';
//
// let app = express();
//
// app.use(bodyParser.json());
//
// app.use('/api/users', users);
//
// const compiler = webpack(webpackConfig);
//
// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: true
// }));
// app.use(webpackHotMiddleware(compiler));
//
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });
//
// app.listen(3000, () => console.log('Running on localhost:3000'));
