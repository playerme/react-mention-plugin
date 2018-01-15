var path = require('path');

module.exports = {
  entry: './src/mentions/index.js',
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'popper.js': 'popper.js',
    'prop-types': 'prop-types',
    'react-onclickoutside': 'react-onclickoutside',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src'),
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
