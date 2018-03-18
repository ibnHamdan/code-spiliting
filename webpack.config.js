const path = require('path')
const webpack = require('webpack')
module.exports = {
  mode: 'development',
  entry: {
    components: './components.js',
    pageLayouts: './page-layout.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './dist'),
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: "initial",
          minSize: 0
        }
      }
      // chunks: 'all',
      // minSize: 0,
    },
  },
  plugins: [
    new webpack.optimize.AggressiveMergingPlugin({
      minSizeReduce: 1,
      moveToParents: true,
    }),
  ]
}