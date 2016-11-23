var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //插件的使用方法之生成css文件
var extractCSS = new ExtractTextPlugin('../css/[name].css');	//把上面的代码实例化，并修改路径
module.exports = {
	entry: __dirname + "/src/js/index.js", //唯一入口文件
	output:{
		path: __dirname + "/assets/js", 	//输出路径 生产环境的路径。
		filename : "index.js",
		publicPath:"/temp/", 	//这个文件在目录上是没有的,只是想象成一个内存，快速读取的地方
	},
	devServer:{
		contentBase:"./", 	//程序的根目录
		host:'192.168.1.49', 	//本地的ip
		port:'7777',				//默认端口号
		color:true,				//输出的代码添加颜色
	},
	module:{
		loaders:[
			// {
			// 	//loader 共有4个选项  test、loader、include(编译)/exclude（禁止编译）、query
			// 	test:/\.css$/,	//引入css样式
			// 	loader:'style-loader!css-loader'
			// },
			{	//插件的使用方法之生成css文件,上面的不是插件引入的方法
				test:/\.css$/, 	//识别css文件
				loader:/*ExtractTextPlugin=*/extractCSS.extract("style-loader","css-loader")
			},

			{
        test: /\.less$/,	//引入 less 样式
        loader: "style-loader!css-loader!less-loader"
      },
			{
				test:/\.json$/,		//引入json文件
				loader: "json"
			},
			{
				test:/\.js$/,		// babel-loader 等等
				exclude:'/node_modules/',
				loader:'babel',
				query:{
					presets:['es2015','react']
				}
			}

		]
	},


	plugins:[
		new webpack.HotModuleReplacementPlugin(), 	//这个插件好像没有人用
		extractCSS/*=new ExtractTextPlugin("indexa.css")*/  //插件的使用方法之生成css文件
	]

}
