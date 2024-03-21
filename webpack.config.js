const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const terserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack'); //웹팩 기본 플로그인은 여기있음
const childProcess = require('child_process') // 터미널 명령어를 이거로 실행 할 수 있음 

const webpackMode = process.env.NODE_ENV || 'development';

module.exports = {
  mode: webpackMode, //production  devalopment  none
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkhash].js', //id chunkhash name
    path: path.resolve('./dist'),
    clean: {
      keep: /\.git/,
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [ { loader: MiniCssExtractPlugin.loader }, "css-loader" ]
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
  
  plugins: [
    new MiniCssExtractPlugin(),
    // new HtmlWebpackPlugin({ 
    //   template: './index.html',
    // }),

    new HtmlWebpackPlugin({ 
      template:'./index.html',
      filename:'./index.html',
      minify: process.env.NODE_ENV === 'production' ? {
        collapseWhitespace: true, 
        removeComments: true, 
      } : false,
    //   chunks:['main']
      // chunks:['index'] //특정 js만 불러올수있게
    }),
    new HtmlWebpackPlugin({ 
      template:'./src/pages/css/index.html',
      filename:'./src/pages/css/index.html',
      minify: process.env.NODE_ENV === 'production' ? {
        collapseWhitespace: true, 
        removeComments: true, 
      } : false,
    }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/html/accessibility.html',
        filename:'./src/pages/html/accessibility.html',
			  minify: process.env.NODE_ENV === 'production' ? {
				collapseWhitespace: true,
				removeComments: true,
			} : false
    }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/html/index.html',
        filename:'./src/pages/html/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/html/standards.html',
        filename:'./src/pages/html/standards.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
    new HtmlWebpackPlugin({ 
        template:'./src/pages/js/index.html',
        filename:'./src/pages/js/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/js/index.html',
        filename:'./src/pages/js/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/node/index.html',
        filename:'./src/pages/node/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/mongodb/index.html',
        filename:'./src/pages/mongodb/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/tool/index.html',
        filename:'./src/pages/tool/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/spa/index.html',
        filename:'./src/pages/spa/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/js/canvas.html',
        filename:'./src/pages/js/canvas.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
      new HtmlWebpackPlugin({ 
        template:'./src/pages/ts/index.html',
        filename:'./src/pages/ts/index.html',
        minify: process.env.NODE_ENV === 'production' ? {
          collapseWhitespace: true, 
          removeComments: true, 
        } : false,
      }),
    new CleanWebpackPlugin(),
    new webpack.BannerPlugin({ 
      banner: `
        Build Data: ${new Date().toLocaleDateString() }
        GIT Commit Ver: ${childProcess.execSync('git rev-parse --short HEAD')} 
        User Name : ${childProcess.execSync('git config user.name')}  
      `
    }),
  ],


  optimization : {
    // minimizer: process.env.NODE_ENV === 'production' ? [
    minimizer: process.env.NODE_ENV === 'production' ? [

      new terserPlugin({ 
        terserOptions: {
          compress: {
            drop_console: true, //콘솔지우는
          }
        }
      }) 
    ] : [],
    splitChunks: { // 이게 4번 코드스플리팅 소스옵션
      chunks: "all" 
    }
  },


  devServer: {
    port: 9000,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    hot: true,
  },


  // 웹팩 5 기본 모듈 지원 
  // https://namespaceit.com/blog/how-fix-breaking-change-webpack-5-used-to-include-polyfills-for-nodejs-core-modules-by-default-error

  
}