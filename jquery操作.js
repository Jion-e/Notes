jquery:
scrollTop(offset):  		返回或设置匹配元素的滚动条的垂直距离
scrollLeft(offset):			返回或设置匹配元素的滚动条的水平距离

offset().left, offset.top:  返回匹配元素的偏移量
offset({top:100,left:200}): 设置匹配元素的偏移量

offsetParent() :            返回最近的祖先定位元素（ CSS position 属性被设置为 relative、absolute 或 fixed 的元素。）

position().left, position().top  返回匹配元素相对于父元素的位置            

jQuery 遍历函数
.add()	将元素添加到匹配元素的集合中。
.andSelf()	把堆栈中之前的元素集添加到当前集合中。
.children()	获得匹配元素集合中每个元素的所有子元素。
.closest()	从元素本身开始，逐级向上级元素匹配，并返回最先匹配的祖先元素。
.contents()	获得匹配元素集合中每个元素的子元素，包括文本和注释节点。
.each()	对 jQuery 对象进行迭代，为每个匹配元素执行函数。
.end()	结束当前链中最近的一次筛选操作，并将匹配元素集合返回到前一次的状态。
.eq()	将匹配元素集合缩减为位于指定索引的新元素。
.filter()	将匹配元素集合缩减为匹配选择器或匹配函数返回值的新元素。
.find()	获得当前匹配元素集合中每个元素的后代，由选择器进行筛选。
.first()	将匹配元素集合缩减为集合中的第一个元素。
.has()	将匹配元素集合缩减为包含特定元素的后代的集合。
.is()	根据选择器检查当前匹配元素集合，如果存在至少一个匹配元素，则返回 true。
.last()	将匹配元素集合缩减为集合中的最后一个元素。
.map()	把当前匹配集合中的每个元素传递给函数，产生包含返回值的新 jQuery 对象。
.next()	获得匹配元素集合中每个元素紧邻的同辈元素。
.nextAll()	获得匹配元素集合中每个元素之后的所有同辈元素，由选择器进行筛选（可选）。
.nextUntil()	获得每个元素之后所有的同辈元素，直到遇到匹配选择器的元素为止。
.not()	从匹配元素集合中删除元素。
.offsetParent()	获得用于定位的第一个父元素。
.parent()	获得当前匹配元素集合中每个元素的父元素，由选择器筛选（可选）。
.parents()	获得当前匹配元素集合中每个元素的祖先元素，由选择器筛选（可选）。
.parentsUntil()	获得当前匹配元素集合中每个元素的祖先元素，直到遇到匹配选择器的元素为止。
.prev()	获得匹配元素集合中每个元素紧邻的前一个同辈元素，由选择器筛选（可选）。
.prevAll()	获得匹配元素集合中每个元素之前的所有同辈元素，由选择器进行筛选（可选）。
.prevUntil()	获得每个元素之前所有的同辈元素，直到遇到匹配选择器的元素为止。
.siblings()	获得匹配元素集合中所有元素的同辈元素，由选择器筛选（可选）。
.slice()	将匹配元素集合缩减为指定范围的子集。   

jQuery 属性操作方法
addClass()	向匹配的元素添加指定的类名。
attr()	设置或返回匹配元素的属性和值。
hasClass()	检查匹配的元素是否拥有指定的类。
html()	设置或返回匹配的元素集合中的 HTML 内容。
removeAttr()	从所有匹配的元素中移除指定的属性。
removeClass()	从所有匹配的元素中删除全部或者指定的类。
toggleClass()	从匹配的元素中添加或删除一个类。
val()	设置或返回匹配元素的值。

jQuery 文档操作方法
addClass()	向匹配的元素添加指定的类名。
after()	在匹配的元素之后插入内容。
append()	向匹配元素集合中的每个元素结尾插入由参数指定的内容。
appendTo()	向目标结尾插入匹配元素集合中的每个元素。
attr()	设置或返回匹配元素的属性和值。
before()	在每个匹配的元素之前插入内容。
clone()	创建匹配元素集合的副本。
detach()	从 DOM 中移除匹配元素集合。
empty()	删除匹配的元素集合中所有的子节点。
hasClass()	检查匹配的元素是否拥有指定的类。
html()	设置或返回匹配的元素集合中的 HTML 内容。
insertAfter()	把匹配的元素插入到另一个指定的元素集合的后面。
insertBefore()	把匹配的元素插入到另一个指定的元素集合的前面。
prepend()	向匹配元素集合中的每个元素开头插入由参数指定的内容。
prependTo()	向目标开头插入匹配元素集合中的每个元素。
remove()	移除所有匹配的元素。
removeAttr()	从所有匹配的元素中移除指定的属性。
removeClass()	从所有匹配的元素中删除全部或者指定的类。
replaceAll()	用匹配的元素替换所有匹配到的元素。
replaceWith()	用新内容替换匹配的元素。
text()	设置或返回匹配元素的内容。
toggleClass()	从匹配的元素中添加或删除一个类。
unwrap()	移除并替换指定元素的父元素。
val()	设置或返回匹配元素的值。
wrap()	把匹配的元素用指定的内容或元素包裹起来。
wrapAll()	把所有匹配的元素用指定的内容或元素包裹起来。
wrapinner()	将每一个匹配的元素的子内容用指定的内容或元素包裹起来。

jQuery DOM 元素方法
.get()	获得由选择器指定的 DOM 元素。
.index()	返回指定元素相对于其他指定元素的 index 位置。
.size()	返回被 jQuery 选择器匹配的元素的数量。
.toArray()	以数组的形式返回 jQuery 选择器匹配的元素。

jQuery 选择器
*	$("*")	所有元素
#id	$("#lastname")	id="lastname" 的元素
.class	$(".intro")	所有 class="intro" 的元素
element	$("p")	所有 <p> 元素
.class.class	$(".intro.demo")	所有 class="intro" 且 class="demo" 的元素
 	 	 
:first	$("p:first")	第一个 <p> 元素
:last	$("p:last")	最后一个 <p> 元素
:even	$("tr:even")	所有偶数 <tr> 元素
:odd	$("tr:odd")	所有奇数 <tr> 元素
 	 	 
:eq(index)	$("ul li:eq(3)")	列表中的第四个元素（index 从 0 开始）
:gt(no)	$("ul li:gt(3)")	列出 index 大于 3 的元素
:lt(no)	$("ul li:lt(3)")	列出 index 小于 3 的元素
:not(selector)	$("input:not(:empty)")	所有不为空的 input 元素
 	 	 
:header	$(":header")	所有标题元素 <h1> - <h6>
:animated	 	所有动画元素
 	 	 
:contains(text)	$(":contains('W3School')")	包含指定字符串的所有元素
:empty	$(":empty")	无子（元素）节点的所有元素
:hidden	$("p:hidden")	所有隐藏的 <p> 元素
:visible	$("table:visible")	所有可见的表格
 	 	 
s1,s2,s3	$("th,td,.intro")	所有带有匹配选择的元素
 	 	 
[attribute]	$("[href]")	所有带有 href 属性的元素
[attribute=value]	$("[href='#']")	所有 href 属性的值等于 "#" 的元素
[attribute!=value]	$("[href!='#']")	所有 href 属性的值不等于 "#" 的元素
[attribute$=value]	$("[href$='.jpg']")	所有 href 属性的值包含以 ".jpg" 结尾的元素
 	 	 
:input	$(":input")	所有 <input> 元素
:text	$(":text")	所有 type="text" 的 <input> 元素
:password	$(":password")	所有 type="password" 的 <input> 元素
:radio	$(":radio")	所有 type="radio" 的 <input> 元素
:checkbox	$(":checkbox")	所有 type="checkbox" 的 <input> 元素
:submit	$(":submit")	所有 type="submit" 的 <input> 元素
:reset	$(":reset")	所有 type="reset" 的 <input> 元素
:button	$(":button")	所有 type="button" 的 <input> 元素
:image	$(":image")	所有 type="image" 的 <input> 元素
:file	$(":file")	所有 type="file" 的 <input> 元素
 	 	 
:enabled	$(":enabled")	所有激活的 input 元素
:disabled	$(":disabled")	所有禁用的 input 元素
:selected	$(":selected")	所有被选取的 input 元素
:checked	$(":checked")	所有被选中的 input 元素