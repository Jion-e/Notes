<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8" %>
toFixed(2)  //�������뱣����λС��
meta��ǩ 
	//��ֹ�����ʶ���ֻ�����
	<meta name="format-detection" content="telephone=no">
	//ҳ���ʺ����ƶ��豸�Ͻ������
    <meta name="applicable-device" content="mobile">
����������õ����⣺ arr.concat() //���鸴��
��ȡ������ֵ $("#FinanceCostType").find("option:selected").text();
��ȡ���������� $("select[name='select1']").get(0).selectedIndex;

��ֹĬ���¼� e.preventDefault();
��ֹ�¼�ð�� e.stopPropagation();
 
//ת�룺
1.js�ļ���ʹ��encodeURI()����(����������)��
login_name = encodeURI(encodeURI(login_name));  
2.action��URLDecoder����
loginName = java.net.URLDecoder.decode(loginName,"UTF-8"); 

$(".mis-slide").each(function(index){
    $(this).attr("data-index", index);
});

//jsonת��:
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

//�Զ������¼�
$('#loadBtn').trigger("click");

//ȥ���ո�
$.trim($("#AccounId").val());


/^((\d*[1-9](.\d{1,2})?)|(0\.\d{1,2}))$/; 
/^(\d*[0-9](.\d{1,2})?)$/; 
/(^\d{15}$)|(^\d{17}(\d|X)$)/ 
/(^0\d{2,3}-?\d{7,8}$)|(^1[0-9]{10}$)/ 

//��Ǯ��ʽ������ǧ�ֺţ�������λС����
var money = (money.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,'); 

window.history.go(-1):
history.go(-1)

window.history.back():
history.back()

window.location.reload();

//���˲�ˢ��ҳ�棺
self.location=document.referrer; (���ص�������ǰ��ҳ�ĳ�����������ҳ��URL)

��ѡ��ȫѡ
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
layer.alert(e.responseText, true, "?�?, function () {
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
return this.Json("true|�ɹ�");

//���ύ
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


//���������л�
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

//��ȡ URL �д��ݵĲ���  
$.urlParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results) { return 0; }
    return results[1] || 0;
}

//alert�����㣺
alertDiv: function(divID, title) {
var DomTitle = title ? title : '��ϸ����';

var layerIndex = $.layer({
type: 1,
fix : false,
offset:['100px',''],
area : ['auto','auto'],//�������þ��峤���Զ���㲻��Ҫ�����ã���Ҳ�������ó�auto������Ӧ�Զ���㳤��
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

// ����ղؼ�
function addFavorite(url, title) {
	if (document.all) {
		window.external.addFavorite(url, title);
	} else if (window.sidebar) {
		window.sidebar.addPanel(title, url, "");
	}
}

// html�ַ���ת��
function htmlEscape(htmlString) {
	htmlString = htmlString.replace(/&/g, '&amp;');
	htmlString = htmlString.replace(/</g, '&lt;');
	htmlString = htmlString.replace(/>/g, '&gt;');
	htmlString = htmlString.replace(/'/g, '&acute;');
	htmlString = htmlString.replace(/"/g, '&quot;');
	htmlString = htmlString.replace(/\|/g, '&brvbar;');
	return htmlString;
}

// ����Cookie
function setCookie(name, value) {
	var expires = (arguments.length > 2) ? arguments[2] : null;
	document.cookie = name + "=" + encodeURIComponent(value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ";path=" + window.location.href;
}

// ��ȡCookie
function getCookie(name) {
	var value = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (value != null) {
		return decodeURIComponent(value[2]);
    } else {
		return null;
	}
}

// ɾ��cookie
function removeCookie(name) {
	var expires = new Date();
	expires.setTime(expires.getTime() - 1000 * 60);
	setCookie(name, "", expires);
}

//���ض���
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

//�ж��Ƿ�Ϊpc�����
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
//�ж��Ƿ�Ϊ�ֻ��������ipad�����
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

//�ж��Ƿ�Ϊ΢�������
function isWeiXin(){ 
	var ua = navigator.userAgent.toLowerCase(); 
	if(ua.match(/MicroMessenger/i) == 'micromessenger'){ 
		return true; 
	}else{ 
		return false; 
	} 
} 

//��ֹҳ�����
document.ontouchstart=function(){
  return false;
}

��ȡ������꣺
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

