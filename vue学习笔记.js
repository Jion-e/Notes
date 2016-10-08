/*** ������Ӧ ***/
vue��ͨ���ݹ������ʼ�����е��������ԣ�����object.defineProperty������ת��Ϊgetter��setter��ʵ�����ݹ۲�ġ�
�����һ�����Բ����ڳ�ʼ�����У���ô���޷��۲�������ԣ�
������Ӻ�ɾ�����ԣ�
obj.$add(key, value)
obj.$set(key, value)
obj.$delete(key)


/***������Ӧ��***/
���췽������������Щ�������������أ�������Щ�������������Ӧ����
push��pop��shift��unshift��splice��sort��reverse����

�Ǳ��췽����
filter��concat��slice
�����������ص�������һ����ͬ��ʵ��������Ҫ���������������飺
arr = arr.filter(function(index){
	return arr[index].match(/hello/)
})
ͨ�������޸��������ݣ�vue�޷���⵽�������
��չ������
arr.$set(index, value)
arr.$remove(index | value)

/***�Զ����������***/
ͨ��ȫ��Vue.filter()����ע��,��������������������ID�͹��˺���
ע�᣺
Vue.filter('reverse', function(value){
	return value.split('').reverse().join('')
})
ʹ�ã�
<span v-text="message | reverse"></span>

�������
Vue.filter('wrap', function(value, begin, end){
	return begin + value + end
})
<span v-text="message | wrap 'before', 'after'"}></span>

/***�Զ���ָ�***/
Vue.directive(id, definition)
���ӣ�
Vue.directive('my-directive', {
	bind: function(){ //������һ�Σ���ָ���һ�ΰ�Ԫ�ص�ʱ��
		//���󶨵�׼���������磺����¼�����
	},
	update: function(newValue, oldValue){//��һ���ǽ�����bind�󱻵��ã��Ժ�ÿ���󶨵�ֵ�����仯�ͻᱻ����
		//��ȡ��ֵ�;�ֵ��������
	},
	unbind: function(){//������һ�Σ���ָ����Ԫ�ص�ʱ��
		//�����������磺�Ƴ��¼�������
	}
})

ʹ�ã�
<div v-my-directive="someValue"></div>



 
 �������˳��
 ���js -> ���뼰�󶨸���� ->  ���ظ���� -> ���������
js:


vue ����ʵ������һ��data����Ӧ����data��Ϊһ�������������������һ������elͬ��
//�����
1.������
Vue.component('mine', {
	template: '<p>Its OK</p>'
})

2.ʹ�ã�
<div id="vueInstance">
	<mine></mine>
</div>

var V = new Vue({
	el: '#vueInstance'
})

//�Զ������ 
<template id="mineTp1">
	<p>Its ok</p>
	<button>click me</button>
</template>

Vue.component('mine', {
	template: '#mineTp1'
})

//����ͨ�ţ�props (component�ж���)
1.props���飺
Vue.component('mine', {
	template: '<p>its {{city}}</p>',
	props: ['city']
});

2.props����ʹ�õĸ��������
Vue.component('mine', {
	template: '<p>its {{city}}</p>'��
	props: {
		city: {
			type: string, //����
			required:true, //����
			default: 'china' //Ĭ��ֵ
		}
	}
});

3.ʹ�ã�
<mine city="HongKong"></mine>

4.ajax��
<div id="vueInstance">  //�Ⱥ���ߵ��ֶ�������ָ���������props������������
	<mine :name='name'  //�Ⱥ��ұߵ��ֶ�������ָ�ڸ����ﶨ����ֶε����֡�
      :title='title'	//htmlд���⴮ʽ��������props��д���շ�ʽ
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


//��̬props:����������ݱ仯,�������������Ҳ��仯
<div>
  <input v-model="parentMsg">
  <br>
  <child :my-message="parentMsg"></child>
</div>

//ǿ��˫�򡢵���󶨣�
<mine :msg="parentMsg"></mine>			//Ĭ�ϵ����
<mine :msg.sync="parentMsg"></mine>		//ǿ��˫��󶨣���������� msg ����ͬ���ظ������ parentMsg ����
<mine :msg.once="parentMsg"></mine>		//ǿ�Ƶ����

�¼���
$on()    //�����¼�
$emit()  //�����¼�
$dispatch()  //�ɷ��¼� :ð��
$broadcast()  //�㲥�¼� ������

������ͨ�ţ�
1.ð���¼��� $dispatch  //��getMsg�¼����ݸ������
������� events: 	getMsg(msg){...}
������� methods��  this.$dispatch('getMsg', msg);

2.�㲥�¼��� $broadcast //��postMsg�¼����ݸ������
������� methods�� this.$broadcast('postMsg', message);
������� events��  postMsg(message){...}
	
	
Vue.js ��� API ����������:
prop �����ⲿ�����������ݸ������
�¼� ������������ⲿ������ action��
slot �����ⲿ�����������ݵ��������ͼ�ṹ�ڡ�

	