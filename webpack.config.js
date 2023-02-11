const path = require('path');

module.exports = {
  devtool: 'eval-source-map', // gives chance to look at the error after creating build
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dest'), // takes current this file folder as a base and adds relative path to it
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  devServer: {
    static: './dest',
    port: 5000,
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
}