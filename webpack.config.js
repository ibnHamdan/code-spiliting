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
					minChunks: 2,
					maxInitialRequests: 5, // The default limit is too small to showcase the effect
					minSize: 0 // This is example is too small to create commons chunks
				},
      }
    },
    runtimeChunk: true
  },


}