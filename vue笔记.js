注：methods 里定义的函数为驼峰式结构，不能是肉串。
css: scoped
[v-cloak] {visibility: hidden;}

//打印
vm.log()

//响应式数据
  route: { data(transition) {this.getCurData();} },
  
//style
:style="{'background-image': 'url(' + item.fn_bg + ')'}"

//tab标签切换：
:class="{'current-tab':iscur == $index}" @click="iscur = $index" 
v-show="iscur == $index? true: false"

//v-link
v-link="{'name': 'news', 'params': {'id': '5456'}}"

//多事件绑定
<div v-on="click: onClick, keyup: onKeyup, keydown: onKeydown"></div>

//获取元素自身：
@click = "getMe($event)"
getMe(event) { 
	var el = event.currentTarget;  //转jQuery对象：$(el)
}

//传递数字：
<mine :num = "1"></mine>

for循环：
{{$index}} 获取索引 	{{ $key }}获取key
 1.对象： v-for="(key, picSrc) of pics"  使用：{{key}} {{picSrc}}
	  或：v-for="value of pics" 		 使用：{{ $key }} : {{ value }}
	  
 2.数组： v-for="item of items"  		 使用：{{item.message }}
 
 3.循环个数: v-for="n of 10" 			 使用{{ n }}
 
 过滤器：
 <div v-for="item in items | filterBy 'hello'"></div>  //只显示包含字符串 "hello" 的元素。
 <div v-for="user in users | filterBy 'Jack' in 'name'"></div> //用户对象的 name 属性中搜索 "Jack"
 <div v-for="user in users | filterBy 'wzp' in 'name' 'phone'"></div> //'name' 'phone' 属性中搜索 "wzp"
 
 排序：
  <li v-for="user in users | orderBy 'name'">	//按名字排序用户
  <li v-for="user in users | orderBy 'name' -1"> //降序
  <li v-for="user in users | orderBy 'lastName' 'firstName'"> //使用两个键名排序
  
  <button @click="order = order * -1">Reverse Sort Order</button>
  <li v-for="user in users | orderBy 'name' order">//动态排序

  
 