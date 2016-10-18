反引号：$(`[data-control="${index}"]`)

/*** Promise对象 ***/
Promise对象：异步编程解决方案；
Promise对象的特点：
1.对象的状态不受外界影响：只有异步操作的结果才会影响Pending(进行中)、Resolved(成功)、Rejected(失败)这三种状态，
						  其他操作无法改变这个状态（这也是Promise名字的由来）
2.一旦状态改变，就不会再变，任何时候都能得到这个结果。不同于事件，事件是错过了再去监听就无法得到结果。
缺点：
1.无法取消promise，一旦建立它就会立即执行，无法中途取消。
2.如果不设置回调函数，promise对象内部抛出的错误，不会反应到外部。
3.处于pedding状态时无法知道进展到哪一个阶段。

基本用法：	
resolve和reject参数是两个函数，有JavaScript引擎提供，返回异步操作的结果
//创造Promise实例
var promise = new Promise(function(resolve, reject){
	//... some code
	if(/* 异步操作成功 */){
		resolve(value);  //pedding -> resolve
	}else{
		reject(error);	 //pedding -> reject
	}
})	

//指定回调函数
promise.then(function(value){
	//sucess		//状态为resolve调用
}, function(value){
	//failure		//状态为reject调用
})

//简单例子
function timeout(ms){
	return new Promise((resolve, reject) => {
	  setTimeout(resolve, ms, 'done');
	})
}
timeout(100).then((value) => {
	console.log(value);
})

注：Promise对象会立即执行，但.then 方法指定的回调函数，要在所有同步任务完成后才会执行。

编程风格：
模块化：
如果模块默认输出一个函数，函数名的首字母应该小写。export default makeStyleGuide;
如果模块默认输出一个对象，对象名的首字母应该大写。export default StyleGuide;

export {square, diag};
import { square, diag } from 'lib'; 导入lib模块下的square和diag属性

export default function () { ... };
import myFunc from 'myFunc';  导入整个模块


1.块级作用域
let 取代 var
优先使用const，尤其是全局环境

2.字符串
静态字符串使用单引号，动态字符串使用反引号

3.解构赋值
数组对变量赋值：
const arr = [1,2,3,4];
const[first, second] = arr;  //first:1, second:2

函数的参数如果是对象的成员：
function getFullName(obj){
	const { firstName, lastName } = obj; //firstName:obj.firstName, lastName:obj.lastName
}
// best
function getFullName({ firstName, lastName }) {
}

如果函数返回多个值，优先使用对象的解构赋值，而不是数组的解构赋值。
function processInput(input) {
  return { left, right, top, bottom };
}
const { left, right } = processInput(input);  //left:left, right:right

4.数组：
使用扩展运算符（...）拷贝数组
const itemsCopy = [...items];

使用Array.from方法，将类似数组的对象转为数组
const nodes = Array.from(foo);

5.函数：
需要使用函数表达式的场合，尽量用箭头函数代替
function (naem){}  等价于 (name) => {}
(() => {
  console.log('Welcome to the Internet.');
})();

使用rest运算符（...）代替arguments
concatenateAll('a','b','22');
function concatenateAll(...args) {
	console.log(args);   //["a", "b", "22"]
	return args.join(''); //"ab22"
}

使用默认值语法设置函数参数的默认值
function handleThings(opts = {}) {
  // ...
}

6.class
用Class，取代需要prototype的操作
// bad
function Queue(contents = []) {
  this._queue = [...contents];
}
Queue.prototype.pop = function() {
  const value = this._queue[0];
  this._queue.splice(0, 1);
  return value;
}

// good
class Queue {
  constructor(contents = []) {
    this._queue = [...contents];
  }
  pop() {
    const value = this._queue[0];
    this._queue.splice(0, 1);
    return value;
  }
}
使用extends实现继承
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
  Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function() {
  return this._queue[0];
}

// good
class PeekableQueue extends Queue {
  peek() {
    return this._queue[0];
  }
}