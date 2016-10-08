获取浏览器宽高:
window.screen.height 获取浏览器高度
$(window).height()   获取浏览器可视化窗口的高度
$(document).height() 获取浏览器当前窗口文档高度
$(document.body).height() 获取浏览器当前窗口body高度

window.screen.width 获取浏览器宽度
$(window).width()   获取浏览器可视化窗口的宽度
$(document).width() 获取浏览器当前窗口文档宽度
$(document.body).width() 获取浏览器当前窗口body宽度

window.screenTop  滚动条距离Top
window.screenLeft 滚动条距离Left 

插入：
.after()： 在现存元素的 外部，从 后面 插入元素  
.before()：在现存元素的 外部，从 前面 插入元素  
.append()：在现存元素的 内部，从 后面 插入元素  
.prepend():在现存元素的 内部，从 前面 插入元素
.wrap(): 元素包裹
.wrapAll(): 元素包裹
.empty(): 删除元素的所有子节点
.remove(): 删除匹配元素
.clone(): 克隆元素
.replaceWith(): 替换节点
.replaceAll(): 替换节点

节点遍历：
.children(): 获取全部子节点
.next(): 获取下一个兄弟节点
.prev(): 获取前一个兄弟节点
.siblings(): 获取所有兄弟节点
.closest(): 获取最近的匹配节点

获值：
.val():  获取vaule值
.attr(): 获取属性值  	.removeAttr(): 移除属性
.text(): 获取元素内容
.html(): 获取html内容

css操作：
.css() :内联样式操作
.width(): 获取元素宽度
.height(): 获取元素高度
.offset(): 获取元素在当前窗口的相对偏移量 left,top;
.position(): 获取元素相对最近一个设置了position属性的父节点的相对偏移量 left,top;
.scrollTop(): 获取当前元素的滚动条相对当前元素顶部的位置
.scrollLeft(): 获取当前元素的滚动条相对当前元素左边的位置

.addClass(): 增加class
.removeClass(): 删除class
.toggleClass(): 切换class
.hasClass(): 是否使用样式

动画效果：
.hide(): 隐藏
.show(): 显示
.toggle(): 显示开关

.fadeIn(): 淡入
.fadeOut(): 淡出
.fadeTo(): 渐变开关

.slideUp(): 向上滑动
.slideDown(): 向下滑动
.slideToggle(): 滑动开关

.animate({params},speed,callback): 自定义动画 ( 位置可相加：{left: "+=150px"} )
.stop(): 停止正在进行的动画

数组操作：
.pop()去除数组最后一个元素