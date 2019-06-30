const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].production.min.js'
  },
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    noEmitOnErrors: true,
    mangleWasmImports: true,
    minimizer: [
      new UglifyJSPlugin(), new OptimizeCSSAssetsPlugin({})
    ],
    runtimeChunk: false,
    splitChunks: {
      maxInitialRequests: 5,
      maxAsyncRequests: 7,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash].production.min.css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
})
