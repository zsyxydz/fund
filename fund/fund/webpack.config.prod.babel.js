import webpack from 'webpack'
import path from 'path'
// import ExtractTextPlugin from 'extract-text-webpack-plugin'
import fs from 'fs'
// import autoprefixer from 'autoprefixer'
import lessToJs from 'less-vars-to-js'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import CompressionPlugin from 'compression-webpack-plugin'

// load custom theme
const common = lessToJs(fs.readFileSync(path.join(__dirname, './app/config/common.css'), 'utf8'))

export default {
  entry: [
    // 'es6-promise',
    // 'whatwg-fetch',
    path.resolve(__dirname, 'app/index.jsx'),
  ],
  output: {
    path: path.resolve(__dirname, 'build/js'),
    publicPath: '/',
    filename: './bundle.js',
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
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.ProvidePlugin({
      // 'Promise': 'exports?global.Promise!es6-promise',
      // 'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_console: true,
      },
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0,
    }),
  ],
}
