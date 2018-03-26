const path = require('path')

module.exports = {
  //mode: 'development',
  entry: {
    components: './components.js',
    pageLayouts: './page-layout.js'
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, './dist'),
    //chunkFilename: '[name].bundle.js',
    library: "operation"
  },
  optimization: {
    // splitChunks: {
    //   cacheGroups: {
    //     utilities: {
    //       minChunks: 3,
    //       name: "utilities",
    //       maxInitialRequests: 12,
    //     },
    //     sharedVendors: {
    //       minChunks: 3,
    //       name:"modules",
    //     },
    //   },
    //      chunks: 'all',
    //      minSize: 0,
    // },
  },

}