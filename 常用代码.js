<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
toFixed(2)  //四舍五入保留两位小数
meta标签 
	//禁止浏览器识别手机号码
	<meta name="format-detection" content="telephone=no">
	//页面适合在移动设备上进行浏览
    <meta name="applicable-device" content="mobile">
解决数组引用的问题： arr.concat() //数组复制
获取下拉框值 $("#FinanceCostType").find("option:selected").text();
获取下拉框索引 $("select[name='select1']").get(0).selectedIndex;

阻止默认事件 e.preventDefault();
阻止事件冒泡 e.stopPropagation();
 
//转码：
1.js文件中使用encodeURI()方法(必须套两层)。
login_name = encodeURI(encodeURI(login_name));  
2.action中URLDecoder解码
loginName = java.net.URLDecoder.decode(loginName,"UTF-8"); 

$(".mis-slide").each(function(index){
    $(this).attr("data-index", index);
});

//json转意:
eval("("+data+")")
			
$.param(data) 

JSON.parse(str);

JSON.stringify(obj);

JsonConvert.DeserializeObject<VMInfo>(jsonstr)

JsonConvert.SerializeObject(viewModel)

reset: function () {
	$("#StartTime").val($("#hidStartTime").val());
	$("#EndTime").val($("#hidEndTime").val());
	$("#BankName option[value='']").attr("selected", true);
	$("#Status option[value='']").attr("selected", true);
	$("#FinanceCostType option[value='']").attr("selected", true);
	$("#formTable input[type='text']").val("");
	$("#formTable select").each(function () {
		$(this).find("option:first").attr("selected", "selected");
	});
},

//自动触发事件
$('#loadBtn').trigger("click");

//去除空格
$.trim($("#AccounId").val());


/^((\d*[1-9](.\d{1,2})?)|(0\.\d{1,2}))$/; 
/^(\d*[0-9](.\d{1,2})?)$/; 
/(^\d{15}$)|(^\d{17}(\d|X)$)/ 
/(^0\d{2,3}-?\d{7,8}$)|(^1[0-9]{10}$)/ 

//金钱格式化（加千分号，保留两位小数）
var money = (money.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'); 

window.history.go(-1):
history.go(-1)

window.history.back():
history.back()

window.location.reload();

//后退并刷新页面：
self.location=document.referrer; (返回导航到当前网页的超链接所在网页的URL)

复选框全选
$(function() {
	$("#checkAll").click(function() {
		$('input[name="subBox"]').attr("checked",this.checked); 
	});
	var $subBox = $("input[name='subBox']");
	$subBox.click(function(){
		$("#checkAll").attr("checked",$subBox.length == $("input[name='subBox']:checked").length ? true : false);
	});
});

error: function (e) {
layer.alert(e.responseText, true, "?鎭?, function () {
layer.closeAll();
});
}

function checkInfo() {
var flag = $.compareDate($('#StartClearDate').val(), $('#EndClearDate').val(), 1, "");
if (flag !== "" & typeof flag !== "undefined") {
layer.alert(flag);
return false;
}
return true;
}


//Better517na.Core.AsyncInfrastructure.CommonCallHelper.dll
WcfCallHelper.Instance.Invoke<IUserInfoService, string, bool>(info, "AddCompanyCertificationInfo");

return this.Json(new { Result = result, Error = 0 });
return this.Json("true|成功");

//表单提交
var frm = $('#validationLoginForm');

frm.submit(function (e) {
$.ajax({
type: frm.attr('method'),
url: frm.attr('action'),
data: frm.serialize(),
success: function (data) {
alert('ok');
},
error:function(data){
alert(data);
}
});
e.preventDefault();
});


//表单数据序列化
serializeJson: function(obj) {
var jsonObj = {};

$.each(obj, function() {
var value = $.trim($(this).val());

if (value !== '') {
var key = $(this).attr('name');
key && (jsonObj[key] = value);
}
});
return jsonObj;
}
var objData = $.serializeJson($("#tableCondition").find("select,input[type='text']"));

queryCon: JSON.stringify(objData),

//获取 URL 中传递的参数  
$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) { return 0; }
    return results[1] || 0;
}

//alert弹出层：
alertDiv: function(divID, title) {
var DomTitle = title ? title : '详细内容';

var layerIndex = $.layer({
type: 1,
fix : false,
offset:['100px',''],
area : ['auto','auto'],//可以设置具体长宽（自定义层不需要再设置），也可以设置成auto来自适应自定义层长宽
border : [10 , 0.3 , '#000', true],
title : [DomTitle, true],
closeBtn : ['0', true],
page: {
dom : '#'+divID
}
});
return layerIndex;
},

var LAYLER;
LAYLER = comm.alertDiv('editChuTime');

// 添加收藏夹
function addFavorite(url, title) {
	if (document.all) {
		window.external.addFavorite(url, title);
	} else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	}
}

// html字符串转义
function htmlEscape(htmlString) {
	htmlString = htmlString.replace(/&/g, '&amp;');
	htmlString = htmlString.replace(/</g, '&lt;');
	htmlString = htmlString.replace(/>/g, '&gt;');
	htmlString = htmlString.replace(/'/g, '&acute;');
	htmlString = htmlString.replace(/"/g, '&quot;');
	htmlString = htmlString.replace(/\|/g, '&brvbar;');
	return htmlString;
}

// 设置Cookie
function setCookie(name, value) {
	var expires = (arguments.length > 2) ? arguments[2] : null;
	document.cookie = name + "=" + encodeURIComponent(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ";path=" + window.location.href;
}

// 获取Cookie
function getCookie(name) {
	var value = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (value != null) {
		return decodeURIComponent(value[2]);
    } else {
		return null;
	}
}

// 删除cookie
function removeCookie(name) {
	var expires = new Date();
	expires.setTime(expires.getTime() - 1000 * 60);
	setCookie(name, "", expires);
}

//返回顶部
 // fade in .back-to-top
$(window).scroll(function () {
	if ($(this).scrollTop() > 500) {
		$('.back-to-top').fadeIn();
	} else {
		$('.back-to-top').fadeOut();
	}
});

// scroll body to 0px on click
$('.back-to-top').click(function () {
	$('html, body').animate({
		scrollTop: 0,
		easing: 'swing'
	}, 750);
	return false;
});   

//判断是否为pc浏览器
function isPc() { 
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
//判断是否为手机浏览器或ipad浏览器
function isMobile() {
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var flag = true;
    if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) ){
        flag = false;
    }
	return flag;
}

//判断是否为微信浏览器
function isWeiXin(){ 
	var ua = navigator.userAgent.toLowerCase(); 
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
		return true; 
	}else{ 
		return false; 
	} 
} 

//阻止页面滚动
document.ontouchstart=function(){
  return false;
}

获取鼠标坐标：
function getMousePos(event) {
	var e = event || window.event;
	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
	var x = e.pageX || e.clientX + scrollX;
	var y = e.pageY || e.clientY + scrollY;
	return { 'x': x, 'y': y };
}
onmousemove="getMousePos(event)"
getMousePos(e).x
getMousePos(e).y

