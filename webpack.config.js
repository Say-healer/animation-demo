const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')
const webpack = require('webpack');


module.exports = (options) => {
  console.log("options",options)
  const env = require('./env/' + options.config + '.js');
  const port = env.port || 4500;
  const isLocal = options.local
  console.log("env",env)
  const minify = {
    minifyCSS: true,
    minifyJS: true,
    removeComments: true, // 删除HTML中的注释
    collapseWhitespace: true, // 删除空白符与换行符
    collapseBooleanAttributes: true, // 省略布尔属性的值 <input checked="true"/> ==> <input checked />
    removeEmptyAttributes: true, // 删除所有空格作属性值 <input id="" /> ==> <input />
    removeScriptTypeAttributes: true, // 删除script上的type
    removeStyleLinkTypeAttributes: true // 删除style上的type
}
  return {
    // 是否开启压缩文件
    mode:isLocal ? 'development' : 'production',
    entry: [
      './src'
    ],
    output: {
      publicPath:'//' + env.host.cdn + (options.hot? ':' + port : '' ) +'/animation-demo/',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename:'[name].bundle.js'
    },
    plugins:[
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        timplate:path.resolve(__dirname, 'dist'),
        filename:'index.html',
        title:'动画demo',
        minify
      }),
     
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackHarddiskPlugin({
        outputPath: path.resolve(__dirname, 'dist')
    })
    ],
    // inline-source-map 将打包在一起，source-map 会单独打包一个.map 文件
    devtool:options.pro ? false : 'source-map',
    devServer: {
      port:port,
      contentBase:'./dist'
    },
    module:{
      rules:[
        {
          test: /\.css$/,
          use:[
            'style-loader',
            'css-loader'
          ]
        },
        // {
        //   test:/\.(png|svg|jpg|gif)$/,
        //   use:[
        //     'file-loader'
        //   ]
        // },
        {
          test: /\.(png|jpg|gif|svg|ico)$/,
          use: [{
              loader: 'url-loader',
              options: {
                  name: 'images/[name]-[hash:8].[ext]',
                  limit: 1000
              }
          }]
      }
      ]
    }
  }
};