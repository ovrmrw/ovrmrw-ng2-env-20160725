'use strict';

const webpack = require('webpack');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';


module.exports = {
  entry: {
    vendor: './config/vendor.production.ts',
    main: './src/main.ts',
  },
  output: {
    path: '.dest',
    filename: 'webpack.bundle.[name].js'
  },
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: { screw_ie8: true },
      compress: { screw_ie8: true },
      comments: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        loaders: [
          'awesome-typescript-loader?tsconfig=config/tsconfig.bundle.json',
          'angular2-template-loader'
        ],
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.html$/,
        loader: "raw-loader",
      },
      {
        test: /\.css$/,
        loader: 'raw-loader'
      }
    ]
  }
};