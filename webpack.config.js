const path = require('path');
const process = require('process');
const exitHook = require('exit-hook');
const createHotFile = require('./resources/assets/js/create.hot');

/* Write hotfile if HOT_ENV === true */
createHotFile.createHotFile(process.env.HOT_ENV);

/* Remove hotfile on exit. */
exitHook(() => {
  createHotFile.createHotFile(false);
});

module.exports = {
  entry: [
    'regenerator-runtime/runtime',
    'babel-polyfill',
    './resources/assets/js/index.js',
  ],
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(`${__dirname}/public/dist`),
    publicPath: process.env.HOT_ENV ? 'http://localhost:8888/dist/' : '/dist/',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
    port: 8888,
    hot: true,
    contentBase: path.join(__dirname, 'public/'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ],
  },
};
