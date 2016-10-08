/*** 对象响应 ***/
vue是通过递归遍历初始数据中的所有属性，并用object.defineProperty把它们转化为getter和setter来实现数据观察的。
如果有一个属性不存在初始数据中，那么就无法观测这个属性；
对象添加和删除属性：
obj.$add(key, value)
obj.$set(key, value)
obj.$delete(key)


/***数组响应：***/
变异方法（对下面这些方法进行了拦截，调用这些方法会数组会响应）：
push、pop、shift、unshift、splice、sort、reverse方法

非变异方法：
filter、concat、slice
上述方法返回的数组是一个不同的实例，所以要用新数组代替旧数组：
arr = arr.filter(function(index){
	return arr[index].match(/hello/)
})
通过索引修改数组数据，vue无法侦测到这类操作
扩展方法：
arr.$set(index, value)
arr.$remove(index | value)

/***自定义过滤器：***/
通过全局Vue.filter()方法注册,接收两个参数：过滤器ID和过滤函数
注册：
Vue.filter('reverse', function(value){
	return value.split('').reverse().join('')
})
使用：
<span v-text="message | reverse"></span>

多参数：
Vue.filter('wrap', function(value, begin, end){
	return begin + value + end
})
<span v-text="message | wrap 'before', 'after'"}></span>

/***自定义指令：***/
Vue.directive(id, definition)
钩子：
Vue.directive('my-directive', {
	bind: function(){ //仅调用一次，当指令第一次绑定元素的时候
		//做绑定的准备工作，如：添加事件监听
	},
	update: function(newValue, oldValue){//第一次是紧跟在bind后被调用，以后每当绑定的值发生变化就会被调用
		//获取新值和旧值两个参数
	},
	unbind: function(){//仅调用一次，当指令解绑元素的时候
		//做清理工作，如：移除事件监听器
	}
})

使用：
<div v-my-directive="someValue"></div>



 
 组件加载顺序：
 入口js -> 引入及绑定父组件 ->  加载父组件 -> 加载子组件
js:


vue 所有实例共享一个data对象，应当将data作为一个函数，这个函数返回一个对象，el同理
//组件：
1.创建：
Vue.component('mine', {
	template: '<p>Its OK</p>'
})

2.使用：
<div id="vueInstance">
	<mine></mine>
</div>

var V = new Vue({
	el: '#vueInstance'
})

//自定义组件 
<template id="mineTp1">
	<p>Its ok</p>
	<button>click me</button>
</template>

Vue.component('mine', {
	template: '#mineTp1'
})

//数据通信：props (component中定义)
1.props数组：
Vue.component('mine', {
	template: '<p>its {{city}}</p>',
	props: ['city']
});

2.props对象：使用的父组件数据
Vue.component('mine', {
	template: '<p>its {{city}}</p>'，
	props: {
		city: {
			type: string, //类型
			required:true, //必须
			default: 'china' //默认值
		}
	}
});

3.使用：
<mine city="HongKong"></mine>

4.ajax：
<div id="vueInstance">  //等号左边的字段名，是指在子组件的props中声明的名字
	<mine :name='name'  //等号右边的字段名，是指在父级里定义的字段的名字。
      :title='title'	//html写成肉串式，但是在props中写成驼峰式
      :city='city'
      :content='content'
	></mine>
</div>

<template id="mineTp1">  
	<h1>{{name}}</h1>
	<h2>{{title}}</h2>	
	<h3>{{city}}</h3>
	<p>{{content}}</p> 
</template>

Vue.component('mine', {
	template: '#mineTp1',
	props: ['name', 'title', 'city', 'content']
})
var V = new Vue({
	el: '#vueInstance',
	data: {
		name: 'wzp',
		title: 'its title',
		city: 'cd',
		content: 'its ok'
	}
});


//动态props:父组件的数据变化,子组件接收数据也会变化
<div>
  <input v-model="parentMsg">
  <br>
  <child :my-message="parentMsg"></child>
</div>

//强制双向、单向绑定：
<mine :msg="parentMsg"></mine>			//默认单项绑定
<mine :msg.sync="parentMsg"></mine>		//强制双向绑定：把子组件的 msg 属性同步回父组件的 parentMsg 属性
<mine :msg.once="parentMsg"></mine>		//强制单向绑定

事件：
$on()    //监听事件
$emit()  //触发事件
$dispatch()  //派发事件 :冒泡
$broadcast()  //广播事件 ：捕获

组件间的通信：
1.冒泡事件： $dispatch  //将getMsg事件传递给父组件
父组件： events: 	getMsg(msg){...}
子组件： methods：  this.$dispatch('getMsg', msg);

2.广播事件： $broadcast //将postMsg事件传递给子组件
父组件： methods： this.$broadcast('postMsg', message);
子组件： events：  postMsg(message){...}
	
	
Vue.js 组件 API 来自三部分:
prop 允许外部环境传递数据给组件；
事件 允许组件触发外部环境的 action；
slot 允许外部环境插入内容到组件的视图结构内。

	