const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack')
const autoprefixer = require('autoprefixer');

config = {
  entry: ['./src/app.js', './src/scss/main.scss'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // Automatically compile when files change.
  watch: true,
  // Automatically reload the page when compilation is done.
  // devServer: {
  //   port: 8080,
  //   inline: true,
  //   watchOptions: {
  //     poll: true
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // resolve-url-loader may be chained before sass-loader if necessary
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [autoprefixer]
      }
    })
  ]
}

module.exports = config;
