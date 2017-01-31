var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // devtool:'source-map',
  entry:[
    // 'webpack/hot/dev-server',
    // 'webpack-hot-middleware/client?',
    // 'webpack-hot-middleware/client',
    // ?path=http://localhost:8080/__webpack_hmr',
    './client/index.js'
  ],

  output: {
    // path.join(__dirname, 'bundle'),//have issues with file loader
    path: path.join(__dirname, '/build'),
    filename: "bundle.js"
  },

  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({template:'./client/index.html'})
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude:/node_modules/,
        // include: [
        //   path.join(__dirname, 'client'),
        //   path.join(__dirname, 'server/shared'),
        //   path.join(__dirname, 'server')
        // ],
        loaders: [ 'babel']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // {test:/\.(jpg|png)$/, loader:"file-loader"},
    //       {
    //     test: /\.png$/,
    //     loader: "url-loader"
    // }
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader'
        // options: {
        //   name: '[path][name].[hash].[ext]',
        // },
      }
    ]

  },
  resolve: {
      extensions: ["", ".js", ".css"]
  }

  // ,devServer: {
	// 	contentBase: './'
	// 	, historyApiFallback: true
	// }
}
