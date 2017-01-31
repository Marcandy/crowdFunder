var express = require('express');
// var path = require('path')
var bodyParser = require('body-parser');
var cors 		= require('cors');
var session = require('express-session');
var config 		= require('./config.js');
var massive = require('massive');
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: config.secret
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/build'));

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

passport.use(new GoogleStrategy({
  clientID: config.google.clientID,
  clientSecret: config.google.clientSecret,
  callbackURL: "http://localhost:8080/auth/google/callback",
  profileFields: ['id', 'displayName']
},
function(accessToken, refreshToken, profile, cb) {
  db.getUserBygoogleId([profile.id], function(err, user) {
    user = user[0];
    if (!user) {
      console.log('CREATING USER');
      db.create_user([profile.displayName, profile.id], function(err, user) {
        console.log('USER CREATED', user);
        return cb(err, user);
      })
    } else {
      return cb(err, user);
    }
  })
}));

passport.serializeUser(function(user, done) {
  console.log(user);
  return done(null, user.google_id);
})

passport.deserializeUser(function(id, done) {
  db.getUserBygoogleId([id], function(err, user) {
    user = user[0];
    if (err) console.log(err);
    else console.log('RETRIEVED USER');
    console.log(user);
    return done(null, user);
  })
})

app.get('/auth/google', passport.authenticate('google',{scope:['https://www.googleapis.com/auth/plus.login',
       'https://www.googleapis.com/auth/plus.me']}, (req, res) => {
    const token = jwt.sign()
}))

app.get('/auth/google/callback',
  passport.authenticate('google', {successRedirect: '/' }), function(req, res) {
    res.status(200).send(req.user);
  })

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})

app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})
var usersCtrl = require('./server/controllers/usersCtrl') ;
var projectsCtrl = require('./server/controllers/projectsCtrl') ;




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


// app.post('/user', usersCtrl.Create);


app.get('/api/user', function(req, res) {
  if (!req.user) return res.sendStatus(404);
  res.status(200).send(req.user);
})

app.get('/api/projects', projectsCtrl.GetAll)
app.post('/api/project', projectsCtrl.Create)

app.get('*', (req,res)=>{
  res.sendFile(`${__dirname}/build/index.html`)
})
app.listen(8080, function () {
  console.log('Running localhost 8080')
})
