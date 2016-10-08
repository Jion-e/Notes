�����ţ�$(`[data-control="${index}"]`)

/*** Promise���� ***/
Promise�����첽��̽��������
Promise������ص㣺
1.�����״̬�������Ӱ�죺ֻ���첽�����Ľ���Ż�Ӱ��Pending(������)��Resolved(�ɹ�)��Rejected(ʧ��)������״̬��
						  ���������޷��ı����״̬����Ҳ��Promise���ֵ�������
2.һ��״̬�ı䣬�Ͳ����ٱ䣬�κ�ʱ���ܵõ�����������ͬ���¼����¼��Ǵ������ȥ�������޷��õ������
ȱ�㣺
1.�޷�ȡ��promise��һ���������ͻ�����ִ�У��޷���;ȡ����
2.��������ûص�������promise�����ڲ��׳��Ĵ��󣬲��ᷴӦ���ⲿ��
3.����pedding״̬ʱ�޷�֪����չ����һ���׶Ρ�

�����÷���	
resolve��reject������������������JavaScript�����ṩ�������첽�����Ľ��
//����Promiseʵ��
var promise = new Promise(function(resolve, reject){
	//... some code
	if(/* �첽�����ɹ� */){
		resolve(value);  //pedding -> resolve
	}else{
		reject(error);	 //pedding -> reject
	}
})	

//ָ���ص�����
promise.then(function(value){
	//sucess		//״̬Ϊresolve����
}, function(value){
	//failure		//״̬Ϊreject����
})

//������
function timeout(ms){
	return new Promise((resolve, reject) => {
	  setTimeout(resolve, ms, 'done');
	})
}
timeout(100).then((value) => {
	console.log(value);
})

ע��Promise���������ִ�У���.then ����ָ���Ļص�������Ҫ������ͬ��������ɺ�Ż�ִ�С�

��̷��
ģ�黯��
���ģ��Ĭ�����һ��������������������ĸӦ��Сд��export default makeStyleGuide;
���ģ��Ĭ�����һ�����󣬶�����������ĸӦ�ô�д��export default StyleGuide;

export {square, diag};
import { square, diag } from 'lib'; ����libģ���µ�square��diag����

export default function () { ... };
import myFunc from 'myFunc';  ��������ģ��


1.�鼶������
let ȡ�� var
����ʹ��const��������ȫ�ֻ���

2.�ַ���
��̬�ַ���ʹ�õ����ţ���̬�ַ���ʹ�÷�����

3.�⹹��ֵ
����Ա�����ֵ��
const arr = [1,2,3,4];
const[first, second] = arr;  //first:1, second:2

�����Ĳ�������Ƕ���ĳ�Ա��
function getFullName(obj){
	const { firstName, lastName } = obj; //firstName:obj.firstName, lastName:obj.lastName
}
// best
function getFullName({ firstName, lastName }) {
}

����������ض��ֵ������ʹ�ö���Ľ⹹��ֵ������������Ľ⹹��ֵ��
function processInput(input) {
  return { left, right, top, bottom };
}
const { left, right } = processInput(input);  //left:left, right:right

4.���飺
ʹ����չ�������...����������
const itemsCopy = [...items];

ʹ��Array.from����������������Ķ���תΪ����
const nodes = Array.from(foo);

5.������
��Ҫʹ�ú������ʽ�ĳ��ϣ������ü�ͷ��������
function (naem){}  �ȼ��� (name) => {}
(() => {
  console.log('Welcome to the Internet.');
})();

ʹ��rest�������...������arguments
concatenateAll('a','b','22');
function concatenateAll(...args) {
	console.log(args);   //["a", "b", "22"]
	return args.join(''); //"ab22"
}

ʹ��Ĭ��ֵ�﷨���ú���������Ĭ��ֵ
function handleThings(opts = {}) {
  // ...
}

6.class
��Class��ȡ����Ҫprototype�Ĳ���
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
ʹ��extendsʵ�ּ̳�
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