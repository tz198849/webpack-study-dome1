var $ = require('../../node_modules/jquery/dist/jquery.min.js'); //引入全局直接写入jquery即可，文中是本地jquery引入,只要在入口文件引入一次即可
var stuJson = require('./stu.json');  //引入json文件
//css-loader
require('../css/index.css'); //引入css文件


jsonTxt  = '就是简单的测试了一下而已-' + stuJson.name;  //定义一个json测试下

$('#welcome').html('<h1>hello1 world</h1>' + jsonTxt  ) //用jquery输出hello world

document.write("<h1> 去而无2无无无 </h1>" + jsonTxt)

//使用amd方式来加载json  并且追加到了 上面jquery的后面
define(["./stu1.json"],function(stuJson1){
  console.log(stuJson1);
  return $('#welcome').append(stuJson1.names)
})
