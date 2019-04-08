const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const browserConfig = {
  mode: 'development',
  target: 'web',
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        use: {
          loader: 'babel-loader' 
        }
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "true"
    })
  ]
}

const serverConfig = {
  mode: 'development',
  entry: ['./src/server/index.js'],
  target: 'node',
  node: {
    __dirname: false
  },
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'server.js',
    publicPath: '/public/'
  },
  devtool: 'source-map',
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions:  ['.js', '.jsx']
  },
  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "./src")
        ],
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ["es2015"]
        },
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]