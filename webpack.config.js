var webpack = require('webpack');

module.exports = {
  entry:  [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    __dirname + "/src/index.js"
  ],
  output: {
   path: __dirname + "/public",
   filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react'],
          plugins: ['react-hot-loader/babel', 'transform-class-properties']
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
    hot: true
  }
};