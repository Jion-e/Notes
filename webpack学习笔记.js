/*** 杂项 ***/
webpacke本身只能处理js模块，其他类型文件需要loader转换

/*** webpack出现的原因 ***/
一、现有模块化工具不能很好的完成如下目标：
1.将依赖树拆分成按需加载的块
2.初始化加载的耗时尽量少
3.各种静态资源都可以视为模块
4.将第三方库整合为模块的能力
5.可以自定义打包逻辑的能力
6.适合大项目，无论是单页还是多页Web应用

二、webpack的优势：
1.代码拆分： 可同步和异步，每一个异步区块都作为一个文件打包
2.Loader: 处理不同的资源
3.智能分析： 可以有多种模块加载方式
4.插件系统： 丰富的插件系统
5.快速运行： 使用异步I/O和多级缓存提高运行效率

/*** 安装 ***/
全局安装：
npm install webpack -g

将webpack安装到项目的依赖中，这样就可以使用本地版本的webpack：
npm install webpack --save-dev
注：上步骤需要有package.json,没有需要npm init创建

--save	   放在package.json的dependencies，   生产模式
--save-dev 放在package.json的devDependencies，开发模式

查看webpack版本信息：
npm info webpack

安装指定版本的webpack:
npm install webpack@1.12.x --save-dev

安装webpack开发工具:
npm install webpack-dev-server --save-dev

/*** loader(加载器) ***/
使用方法:
npm install css-loader style-loader
1.require("!style!css!./style.css")   //载入style.css
2.require("./style.css")
  webpack enter.js bunldle.js --module-bind 'css=style!css' //根据扩展名自动绑定loader
  