var path = require('path');
module.exports = {
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
//      options: vueLoaderConfig
    },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.vue','.js', 'json'],
    alias: {
      'components': '../index/',
    }
  },
}
