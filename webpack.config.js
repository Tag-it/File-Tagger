const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: `${__dirname}/frontend/src/main.jsx`,
  plugins: [new HtmlPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ]
  }
}