import path from 'path';
import webpack from 'webpack';

export default {
  devtool:'inline-source-map',
  entry:[
    'webpack-dev-server/client?http://127.0.0.1:8080/',
    'webpack/hot/only-dev-server',
    './client'
  ],

  output: {
    path:path.join(__dirname, 'bundle'),
    publicPath: '/',
     filename: "bundle.js"
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
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
        loaders: [ 'react-hot', 'babel']
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]

  },
  resolve: {
      extensions: ["", ".js", ".css"]
  },

  // devServer: {
	// 	contentBase: './bundle'
	// 	, historyApiFallback: true
	// 	, stats: {
	// 		colors: true
	// 	}
	// }
}
