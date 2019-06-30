const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('babel-polyfill')

module.exports = {
  entry: ['./src/index.js', 'babel-polyfill'],
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(sass|scss|css)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }
    ]
  }
}