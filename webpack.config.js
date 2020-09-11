const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './src/index.js',
  externals: [
    nodeExternals(),
  ],
  output: {
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
