js文件传统加载方式弊端：
1.全局作用域下容易造成变量冲突
2.文件只能按照<script>的书写顺序进行加载
3.开发人员必须主观解决模块和代码库的依赖关系
4.在大型项目中各种资源难以管理，长期积累的问题导致代码库混乱不堪

模块管理规范：
/*** CommonJS ***/
核心思想：模块通过require方法加载，通过exports或module.exports来暴露接口
例：
require("module");
require("../file.js");
exports.doStuff = function(){};
module.exports = someValue;
实现：
1.服务端的Node.js
2.Browserify
3.modules-webmake（类似Browserify,但不够灵活）
4.wreq（Browserify的前身）
优点：
1.服务端模块便于重用
2.npm中已经有将尽20万个可以使用的模块包
3.简单并容易使用
缺点：
1.浏览器资源是异步加载的，同步加载的模块会阻塞加载
2不能非阻塞的并行加载多个模块

/*** AMD ***/
核心思想：只有一个主要接口 defined(id?, dependencies?, factory),声明模块指定所有的依赖dependencies,
		  并且还要当做形参传到factory中，对于依赖的模块提前执行依赖前置。
例：
define("module", ["dep1", "dep2"], function(d1, d2){
	return someExportedValue;
})
require(["module", "../file.js"], function(module, file){...})
实现：
RequireJS
curl
优点：
1.适合在浏览器环境中异步加载模块
2.可以并行加载多个模块
缺点：
1.提高了开发成本，代码阅读和书写比较困难，模块定义方式的语义不顺畅
2.不符合通用的模块化思维方式，是一种妥协的实现

/*** CMD ***/
Common Module Definition 规范和AMD很相似，尽量保持简单，并与CommonJS和Node.js的Modules规范保持了很大兼容性。
例：
define(function(require, exports, module){
	var $ = require('jquery');
	var Spinning = require('./spinning')
	exports.doSomething = ...
	module.exports = ...
})
实现：
1.sea.js
2.coolie
优点：
1.依赖就近，延迟执行
2.可以很容易在node.js中运行
缺点：
1.依赖SPM打包，模块的加载逻辑偏重

/*** UMD ***/
Universal Module Definition 规范类似于兼容CommonJS和AMD的语法糖，是模块定义的跨平台解决方案。

/*** ES6模块 ***/
设计思想：尽量的静态化，使得编译时就确定模块的依赖关系，以及输入和输出的变量。
例：
import "jquery";
export function doStuff() {}
module "localModule" {}
实现：
Babel
优点：
1.容易进行静态分析
2.面向未来的EcmaScript标准
缺点：
1.原生浏览器端还没有实现该标准
2.全新的命令字，新版的Node.js才支持