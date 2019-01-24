const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = (options) => {
  console.log("options",options)
  const env = require('./env/' + options.config + '.js');
  const port = env.port || 5555
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
const isLocal = options.local;
  return {
    // 是否开启压缩文件
    mode:isLocal ? 'development' : 'production',
    entry: {
      index:'./src/index.js',
    },
    output: {
      publicPath:'//' + env.host.cdn + (options.hot? ':' + port : '' ) +'/animation-demo',
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
      chunkFilename:'[name].bundle.js'
    },
    plugins:[
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        timplate:path.resolve(__dirname, 'dist'),
        filename:'index.html',
        title:'nanfang',
        minify
      }),
     
      new webpack.HotModuleReplacementPlugin()
    ],
    // inline-source-map 将打包在一起，source-map 会单独打包一个.map 文件
    devtool:'source-map',
    devServer: {
      port:4500,
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
        {
          test:/\.(png|svg|jpg|gif)$/,
          use:[
            'file-loader'
          ]
        }
      ]
    }
  }
};