��ҳ
$.pagination({
url: "/ReconciliationCenter/QueryUserReport",
data: { "accountID": AccountID, "startTime": StartTime, "endTime": EndTime },
type: "post",
updateId: "cacheTable",
templateId: "cacheTemp",
callBack: function (data) { // �ص���������ʽ������
if (data.code === 4) {
layer.alert(data.message);
return;
}
}
pagerSuccess: function(){} // ��ҳ�����ݳɹ��ص�����
)}

// layer ���ز�
beforeSend: function () {
layer.load(0, 2, true, "������");
},
// �ر�loding��
layer.loadClose();

jqueryģ�黯
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

jquery��չ
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

seajsģ�黯
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

vue��
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

��ȡ��ҳ������
���ã�commonFunction.js�ļ�
����ҳ�洫���ݣ�<a href="/FinanceExpense/ExpenseCheck?k={{:KeyID}}&u={{:BankReceiptAddress}}&a={{:AddTime}}&t=1">�鿴</a>
globalData: {
keyID: $.queryString('k'),
addTime: $.queryString('a'),
imgUrl: $.queryString('u'),
type: $.queryString('t')
},

bootstrap-js
Modal:
���ã�
<button type="button" data-toggle="modal" data-target="#exampleModal">Launch modal</button>
��$('#exampleModal').modal(options)
��������:<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel">...</div>


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

jquery validation����֤
$.validator.setDefaults({
    submitHandler: function() {
      alert("�ύ�¼�!");
    }
});
$().ready(function() {
    $("#commentForm").validate();
});
