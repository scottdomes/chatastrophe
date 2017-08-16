var webpack = require('webpack');

module.exports = {
  entry:  __dirname + "/src/index.js",
  output: {
   path: __dirname + "/build",
   filename: "bundle.js",
    publicPath: './'
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
  ],
};