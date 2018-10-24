import webpack from 'webpack'
import path from 'path'
import fs from 'fs'
import lessToJs from 'less-vars-to-js'

// load custom theme
const common = lessToJs(fs.readFileSync(path.join(__dirname, './app/config/common.css'), 'utf8'))

export default {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8081,
  },

  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './js/bundle.js',
  },
  module: {
    noParse: [/jszip.js$/],
    loaders: [
      {
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        // css modules
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
        ],
      },
      {
        test: /\.less$/,
        loaders: ['style-loader', 'css-loader', 'less-loader'],
        include: path.resolve(__dirname, 'app'),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loader: `style!css!less?{"sourceMap":true,"modifyVars":${JSON.stringify(common)}}`,
        include: path.resolve(__dirname, 'node_modules'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url',
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
  ],
}
