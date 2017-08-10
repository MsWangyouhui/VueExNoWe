const HtmlWebpackPlugin=require("html-webpack-plugin");
const webpack = require('webpack');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
const config = {
  entry: ['../public/index.js'],
  output: {
    path: path.resolve(__dirname, '../index/'),
    filename: '[name].[hash].js',
  },
  module: {
    rules:[
      {
        test: /\.js/,
        include:[path.resolve(__dirname,'index')],
        loader: 'babel',
        options: {
          presets: 'es2015',
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.vue','.js', 'json'],
    alias: {
      'components': '../index/',
    }
  },
};

module.exports = config;
