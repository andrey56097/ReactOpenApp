var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  context: __dirname,
  entry: "./src/main.js",
  output: {
    path: __dirname + '/public',
    filename: "index.js"
  },
  devServer: {
    port: 7777
  },
  plugins: [
    new LiveReloadPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx$)/,
          
         
        exclude: /node_modules/,
        loader: "babel-loader",

          // test: /\.css$/, loader: "style-loader!css-loader",
        
        query: {
          presets: ["es2015", "react"]
        }
      },

      // {
      //   test: /\.css$/, loader: "css-loader" ,
      // }
    ]
  }
}