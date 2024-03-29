var HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var webpack = require('webpack'); //to access built-in plugins
var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [{
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer:{
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({template: './app/index.html'})
  ]
};
