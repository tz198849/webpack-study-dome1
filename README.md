# webpack-study-dome1
学习webpack的应用。

安装nodejs
安装vpn代理，推荐使用：http://1024speed.com/#12331  用户名：tz49@qq.com  密码 wzx20141214
安装 babel 执行命令：npm install babel-cli -g
安装CNPM ： https://npm.taobao.org/  去淘宝镜像安装：npm install -g cnpm --registry=https://registry.npm.taobao.org


前端自动化工具第一步初始化一个web环境：npm init  

然后通过 cnpm install babel-cli --save-dev 安装一个  node_modules 的文件夹，这个可以不需要，直接全局安装依赖：npm install

用cnpm 安装全局（安装一个标准） babel  es2015：  cnpm install --save-dev babel-preset-es2015 -g
安装了es2015后再进行这个es的本地化的依赖安装：  cnpm install --save-dev babel-preset-es2015




——————————————————
webpack安装：
1、npm install webpack -g   全局安装
2、npm init -y（懒一点可以输入-y） 初始化工作环境
3、npm install --save-dev webpack  本地环境安装依赖   也可以用  cnpm install webpack --save-dev

4、写好东西后，找到入口文件：webpack src/js/index.js assets/js/index.js  生成到生产环境
4、2、如果配置了 webpack.config.js  可以直接使用 webpack 来生成到生产环境
4、3、配置好 package.json 可以直接 npm start 来生成

5、 安装 jquery 依赖 ： 全局安装：cnpm install jquery -g   项目依赖：cnpm install jquery --save
6、 1安装 webpack 服务器依赖 全局  cnpm install webpack-dev-server -g
6、 2安装 webpack 服务器依赖： cnpm install webpack-dev-server --save-dev

7、配置好一切之后用：webpack-dev-server 来启动本地服务，有3个参数第一个是：最简单的方法是："start": "webpack"
7、1、webpack-dev-server --iFrame  框架模式
7、2、webpack-dev-server --inline  无框架模式启动

7、3、webpack-dev-server --inline --hot  无框架模式启动
7、4、webpack-dev-server --iFrame --hot  框架模式，热插拔机制，需要重新配置。webpack.config.js （
	var webpack = require("webpack") //引入这个插件 并在module.exports中插入以下代码
	plugins:[new webpack.HotModuleReplacementPlugin()]
）

8、打包 css 和js
8、1、 cnpm install css-loader --save-dev
8、2、 cnpm install style-loader --save-dev
8、把这2个包加入后需要配置 webpack.config.js文件如下
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'}
		]
	},
8、如果要引入某种配置，可以在git上搜索 某某-loader，例如：https://github.com/webpack/less-loader ，这个是less样式的引入
	通过网站给的命令：cnpm install less-loader less --save-dev  安装less的依赖
	然后在webpack.config.js文件中配置相关的模块支持：同上面类似。看页面中给的方法即可。

9、比如要引入josn模块可以使用：cnpm install json-loader 来进行安装，然后在webpack.config.js文件中配置模块

10、如果要使用某一个模块，比如这里使用babel的一些功能：cnpm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react,然后在webpack.config.js文件中配置安装的这个模块。（可以一个一个的安装哦） 注释位置：// babel-loader 等等



11、【extract-text-webpack-plugin】打包CSS的插件，安装：cnpm install extract-text-webpack-plugin --save-dev  这个使用是跟webpack.config.js配合使用，需要在webpack.config.js引入这个功能。见webpack.config.js  备注：//插件的使用方法之生成css文件

12、精选的一个webpack模块：https://github.com/ampedandwired/html-webpack-plugin ，这个插件可以打包html
——————————————————————————————
//npm install 全局依赖  开发环境依赖
//npm install --production 生产环境的依赖关系安装



babel --watch -src -d build  (自动监控这个src文件夹，让文件自动变异，易于试试预览）



使用 browser  进行页面同步刷新：www.browsersync.cn
1、安装：  npm install browser-sync -g
2、npm install browser-sync --save-dev  安装本地依赖。

