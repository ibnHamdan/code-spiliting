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
          // chunks: "all",
          // name: "common",
					 minSize: 0
        },

      }
    },
    occurrenceOrder: true,

  }
}