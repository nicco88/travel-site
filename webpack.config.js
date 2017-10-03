var path = require('path'); // already included in node

module.exports = {
  entry: "./app/assets/scripts/App.js",
  output: {
    // path.resolve() creates an absoute path, which is compulsory
    path: path.resolve(__dirname, "./app/temp/scripts"),
    filename: "App.js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
