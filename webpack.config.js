module.exports = {
  entry: './src/index.js',
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
