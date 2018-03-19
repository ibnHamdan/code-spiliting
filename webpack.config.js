const path = require('path')

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
          minSize: 0,
        },
        vendors: {
          chunks: 'all',
          name: 'vendor'

        }
      }
      //  chunks: 'initial',
      //  minSize: 0,
    },
  },

}