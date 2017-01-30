var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool:'inline-source-map',
  entry:[
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './client'
  ],

  output: {
    // path.join(__dirname, 'bundle'),//have issues with file loader
    path: path.join(__dirname, 'build'),
    publicPath: '/',
     filename: "bundle.js"
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
    // new webpack.optimize.OccurenceOrderPlugin(),
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
        loaders: [ 'babel-loader']
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
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      }
    ]

  },
  resolve: {
      extensions: ["", ".js", ".css"]
  }

  ,devServer: {
		contentBase: './build'
		, historyApiFallback: true
	}
}
