const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    index: [path.join(__dirname, 'src', 'index.js')],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  output: {
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 8000,
  },
}
