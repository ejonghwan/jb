const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  mode: 'production', //production  devalopment  none
  entry: './src/index.js',
  output: {
    filename: '[name].js', //id chunkhash name
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [ { loader: MiniCssExtractPlugin.loader },"css-loader" ]
      },
      {
        test: /\.png|jpg|svg|gif$/,
        use: [{
          loader: 'file-loader',
          options: {
            name:'[name].[ext]?[hash]',
            outputPath: './src/assets/images',
          }
        }]
      },
      {
        test: /\.woff|woff2|eot|ttf|otf$/,
        use: [{
          loader: 'file-loader',
          options: {
            // name:'[name].[ext]?[hash]',
            outputPath: './src/assets/font',
          }
        }]
      },
      
    ]
  },
  devServer: {
    port: 9000,
  }
  ,
  plugins: [
    new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({ 
    //   template: './index.html',
    // }),

    new HtmlWebpackPlugin({ 
      template:'./index.html',
      filename:'./index.html',
    //   chunks:['main']
      // chunks:['index'] //특정 js만 불러올수있게
    }),
    new HtmlWebpackPlugin({ 
      template:'./src/pages/css/index.html',
      filename:'./src/pages/css/index.html',
      
    }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/html/accessibility.html',
        filename:'./src/pages/html/accessibility.html',
   
    }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/html/index.html',
        filename:'./src/pages/html/index.html',
 
      }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/html/standards.html',
        filename:'./src/pages/html/standards.html',
   
      }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/js/index.html',
        filename:'./src/pages/js/index.html',
     
      }),
    new CleanWebpackPlugin(),
  ],
}