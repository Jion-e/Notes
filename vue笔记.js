ע��methods �ﶨ��ĺ���Ϊ�շ�ʽ�ṹ���������⴮��
css: scoped
[v-cloak] {visibility: hidden;}

//��ӡ
vm.log()

//��Ӧʽ����
  route: { data(transition) {this.getCurData();} },
  
//style
:style="{'background-image': 'url(' + item.fn_bg + ')'}"

//tab��ǩ�л���
:class="{'current-tab':iscur == $index}" @click="iscur = $index" 
v-show="iscur == $index? true: false"

//v-link
v-link="{'name': 'news', 'params': {'id': '5456'}}"

//���¼���
<div v-on="click: onClick, keyup: onKeyup, keydown: onKeydown"></div>

//��ȡԪ������
@click = "getMe($event)"
getMe(event) { 
	var el = event.currentTarget;  //תjQuery����$(el)
}

//�������֣�
<mine :num = "1"></mine>

forѭ����
{{$index}} ��ȡ���� 	{{ $key }}��ȡkey
 1.���� v-for="(key, picSrc) of pics"  ʹ�ã�{{key}} {{picSrc}}
	  ��v-for="value of pics" 		 ʹ�ã�{{ $key }} : {{ value }}
	  
 2.���飺 v-for="item of items"  		 ʹ�ã�{{item.message }}
 
 3.ѭ������: v-for="n of 10" 			 ʹ��{{ n }}
 
 ��������
 <div v-for="item in items | filterBy 'hello'"></div>  //ֻ��ʾ�����ַ��� "hello" ��Ԫ�ء�
 <div v-for="user in users | filterBy 'Jack' in 'name'"></div> //�û������ name ���������� "Jack"
 <div v-for="user in users | filterBy 'wzp' in 'name' 'phone'"></div> //'name' 'phone' ���������� "wzp"
 
 ����
  <li v-for="user in users | orderBy 'name'">	//�����������û�
  <li v-for="user in users | orderBy 'name' -1"> //����
  <li v-for="user in users | orderBy 'lastName' 'firstName'"> //ʹ��������������
  
  <button @click="order = order * -1">Reverse Sort Order</button>
  <li v-for="user in users | orderBy 'name' order">//��̬����

  
 