'use strict';
var webpack = require('webpack');
var commonsPlugin =
  new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    index: './src/index.js',
    a: './src/a.js',
    b: './src/b.js'
  },
  output: {
    path: 'build',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
          presets: ['es2015']
      }
    },{
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx', '.css']
  },
  plugins: [commonsPlugin]
};