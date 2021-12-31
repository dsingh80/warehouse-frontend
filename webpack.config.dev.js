const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        resolve: {
          extensions: ['.js', '.jsx']
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build/'),
    publicPath: '/build/',
    filename: '[name].bundle.js'
  },
  devServer: {
    static: true,
    port: 3000,
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
}