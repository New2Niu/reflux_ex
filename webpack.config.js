/*
* @Author: Administrator
* @Date:   2016-10-12 13:45:38
* @Last Modified by:   Administrator
* @Last Modified time: 2016-10-12 17:42:52
*/

'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let webpackConfig={
	devtool:'cheap-module-eval-source-map',
	entry:{
		index:[
			'./src/js/index.js'
		]
	},
	output:{
		path:path.join(__dirname,'dist'),
		publicPath:'/',
		filename:'js/bundle.js',
		chunkFilename:'js/[id].chunk.js'
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style!css!autoprefixer'},
			{test:/\.scss/,loader:'style!css!autoprefixer!scss'},
			{test:/\.(js|jsx)$/,loader:'babel',exclude:/node_modules/,include:__dirname},
			{test:/\.(jpg|png)$/,loader:'url?limit=8192&&name=images/[name].[ext]'}
		]
	},
	plugins:[
		new webpack.NoErrorsPlugin(), //启用报错不打断模式
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			favicon:'./src/favicon.ico',
			title:'refulx',
			template:'./src/index.html',
			inject:'body',
			chunks:['index']
		})
	],
	resolve:{
		extensions:['','.js','.jsx']
	},
	devServer:{
		contentBase:'./dist',
		port:9999
	}
}

module.exports = webpackConfig;