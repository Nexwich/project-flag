const path = require('path');

var settings = {
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    }],
  },
};

var config = [
  {
    entry: {
      demo: './src/js/demo.js',
    },
    output: {
      filename: 'assets/js/[name].min.js',
      path: path.resolve(__dirname, 'test'),
    },
    ...settings,
  },
  {
    entry: {
      'project-flag': './src/js/project-flag.js',
    },
    output: {
      filename: 'assets/js/[name].min.js',
      path: path.resolve(__dirname, 'dist'),
    },
    ...settings,
  },
];

module.exports = config;
