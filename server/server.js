import express from 'express';
import path from 'path'
import bodyParser from 'body-parser';
import cors from 'cors';
import massive from 'massive';
import config from './../config';

let app = module.exports = express();


let massiveInstance = massive.connectSync({
  connectionString : config.connectionString
});
app.set('db', massiveInstance);
let db = app.get('db');

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';
const compiler = webpack(webpackConfig);
app.use(webpackMiddleware(compiler, {
  hot: true,
  publicPath: webpackConfig.output.publicPath,
  noInfo: false
}));
app.use(webpackHotMiddleware(compiler));

app.use(bodyParser.json());

import usersCtrl from './controllers/usersCtrl';





app.post('/api/users', usersCtrl.create)




app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
})

app.listen(3000, () => console.log('Running localhost 3000'))

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
