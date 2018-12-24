  const path = require('path');

  module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer:{
      contentBase: './dist',
      disableHostCheck: true,
    },
    output: {
     filename: 'main.js',
     filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
  };