var LiveReloadPlugin = require('webpack-livereload-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
    // new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [
      {
        test: /\.(js|jsx$)/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"]
        }
      },

      // {
      //   test: /\.css$/,
      //   loader: "style-loader!css-loader"
      // }
      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      // },
      // {
      //   test: /\.less$/,
      //   loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      // }

      	{
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style-loader'
      // },
      // {
      //   test: /\.css$/,
      //   loader: 'css-loader',
      //   query: {
      //     modules: true,
      //     localIdentName: '[name]__[local]___[hash:base64:5]'
      //   },
      //  },

      
    

    ]
  },
   watch: true
}