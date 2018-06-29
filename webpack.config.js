const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

var config = {
  output: {
    path: path.resolve(__dirname + '/dist/'),
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        include: __dirname,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.css$/,
        loader: 'style!less!css'
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ]
};


module.exports = [
  merge(config, {
    entry: path.resolve(__dirname + '/src/main.js'),
    output: {
      filename: 'vue-clock.min.js',
      libraryTarget: 'window',
      library: 'VueClock',
    }
  }),
  merge(config, {
    entry: path.resolve(__dirname + '/src/components/MoneyFormat.vue'),
    output: {
      filename: 'vue-money-format.js',
      libraryTarget: 'umd',
      library: 'vue-money-format',
      umdNamedDefine: true
    }
  })
];
