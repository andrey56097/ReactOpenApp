var LiveReloadPlugin = require('webpack-livereload-plugin');
var path = require('path');
var webpack = require('webpack');
process.noDeprecation = true;
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
    new LiveReloadPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.(js||jsx$)/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      },
      {
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.(eot|svg|ttf|woff|woff2)$/, 
        loader: 'file-loader?name=public/fonts/[name].[ext]' 
      },
    ]
  },
  //  watch: true
  
}