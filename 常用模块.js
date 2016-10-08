分页
$.pagination({
url: "/ReconciliationCenter/QueryUserReport",
data: { "accountID": AccountID, "startTime": StartTime, "endTime": EndTime },
type: "post",
updateId: "cacheTable",
templateId: "cacheTemp",
callBack: function (data) { // 回调函数，格式化数据
if (data.code === 4) {
layer.alert(data.message);
return;
}
}
pagerSuccess: function(){} // 分页绑定数据成功回调函数
)}

// layer 加载层
beforeSend: function () {
layer.load(0, 2, true, "申请中");
},
// 关闭loding层
layer.loadClose();

jquery模块化
;(function(win) {
    win.page = {
        initPage: function() {
            page.clickEvent();
        },
        clickEvent: function() {

        },
    };
    $(function() {
        page.initPage();
    });
}(window));

jquery扩展
(function($){
	 $.extend({
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
	 })
})(jQuery)

seajs模块化
define(function(require, exports, module){
var mainMoudle = {
initEvent: function(){
mainMoudle.query();
},
query: function(){
alert("hi");
},
main: function(){
mainMoudle.initEvent();
},
};
$(function(){
mainMoudle.main();
});
})

vue：
import comA from './components/comA.vue'
import comB from './components/comB.vue'
export default {
	components: {comA, comB},
	data() {
	  return {
		  person:{
			  'name': 'wzp'
		  }
	  }	
	},
	props: {
		defaultCls: {
		  type: String,
		  default: 'card'
		},
		className: {
		  type: String,
		  default: ''
		}
	},
	methods: {
		getName(){
			
		}
	},
	events: {
		
	}
}

获取跨页面数据
引用：commonFunction.js文件
其他页面传数据：<a href="/FinanceExpense/ExpenseCheck?k={{:KeyID}}&u={{:BankReceiptAddress}}&a={{:AddTime}}&t=1">查看</a>
globalData: {
keyID: $.queryString('k'),
addTime: $.queryString('a'),
imgUrl: $.queryString('u'),
type: $.queryString('t')
},

bootstrap-js
Modal:
调用：
<button type="button" data-toggle="modal" data-target="#exampleModal">Launch modal</button>
或$('#exampleModal').modal(options)
弹出内容:<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">...</div>


exports.types = {

"css": "text/css",

"gif": "image/gif",

"html": "text/html",

"ico": "image/x-icon",

"jpeg": "image/jpeg",

"jpg": "image/jpeg",

"js": "text/javascript",

"json": "application/json",

"pdf": "application/pdf",

"png": "image/png",

"svg": "image/svg+xml",

"swf": "application/x-shockwave-flash",

"tiff": "image/tiff",

"txt": "text/plain",

"wav": "audio/x-wav",

"wma": "audio/x-ms-wma",

"wmv": "video/x-ms-wmv",

"xml": "text/xml"

};


java:

@Controller
@RequestMapping(value = "/Home", produces = "text/html;charset=utf-8")
public class Home extends BaseController {

private static Gson gson = new GsonBuilder().setDateFormat("yyyy-MM-dd HH:mm:ss").create();

@Resource(name = "properties")
private Properties properties;

@Resource(name = "bussinse")
private Interface interface;

@RequestMapping(value = "/Index", produces = "text/html;charset=utf-8")
public String index(){
return "ViewPack/Home/Index";
}

@RequestMapping(value = "/Query", produces = "text/html;charset=utf-8")
public String query(HttpServletRequest request){
return gson.toJson(res);
}

}

jquery validation表单验证
$.validator.setDefaults({
    submitHandler: function() {
      alert("提交事件!");
    }
});
$().ready(function() {
    $("#commentForm").validate();
});
