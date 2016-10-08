vuexʹ�ã�
//ע������
�����Զ��Ӧ��ֱ�Ӹı�Vuex store��״̬��ֻ�ܶ�ȡ״̬
mutation������ͬ������
mutation��һ������Ϊstate�������Ĳ�����Ϊpayload
action��һ������Ϊstore
�����һ�������ڵ�����ʱ����Ҫ��
1��ʹ��Vue.set(obj, 'newProp', 123);
2��state.obj = {...state.obj, newProp: 123}



/*** state(״̬/����) ***/
//���������storeʵ��
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store'
import MyComponent from './MyComponent'

Vue.use(Vuex)

var app = new Vue({
	el: '#app',
	store: store,
	components: {MyComponent}
})

//�����ͨ��vuex.getter������ȡ����
export default {
	data(){...},
	vuex:{
		getters: {
			count: function(state){   		   => 				 count: state => state.count	
				return state.count   		(es6д��)
			}
		}
	}
}
ע����getter���޷�ʹ��this�ؼ���,�����Ҫthis,��Ҫ���ⵥ��һ���������ԡ�
����
vuex: {
	getters: {
		currentId: state => state.currentId
	}
},
computed: {
	isCurrent(){
		return this.id === this.currentId
	}
}

getter�еĹ��������ã�
vuex: {
	getters: {
		filteredMessages: state => {
			return state.message.filter(message => {
				return message.threadID === state.currentThreadID
			})
		}
	}
}

���������getter������
//getters.js
export function filteredMessages(state){
	reutrn state.message.filter(message => {
		return message.threadID === state.currentThreadID
	})
}

//�����
import { filteredMessages } from './getters'
export default{
	vuex: {
		getters: {
			filteredMessages
		}
	}
}



/*** Mutations(���/�¼�) ***/
Mutations ������һ���¼�ϵͳ��ÿ��mutation����һ���¼�����һ���ص��������κ�һ��Mutation handler�ĵ�һ��������ԶΪ����store������state����
//ע��mutations
import Vuex from 'vuex'
const store = new Vuex.Store({
	state: {
		count: 1,
	},
	mutations: {
		INCREMENT (state){  //mutation ȫ����д����
			//�ı�state
			state.count++
		}
	}
})	

//����mutation handle
store.dispatch('INCREMENT')

//��������dispatch
mutations: {
	INCREMENT(state, n){
		state.count += n
	}
}
store.dispatch('INCREMENT', 10) //���еĶ��������Ϊ��mutation��payload����Ч���أ�

���⣺
ʹ�ó���ȥ����һ��mutation��������Щ�������ڵ����ĵط�
//mutation-types.js
export const SOME_MUTATION = 'SOME_MUTATION'

//store.js
import Vuex form 'vuex'
import { SOME_MUTATION } from './mutation-types'

const store = new Vuex.Store({
	state: {...},
	mutations: {
		[SOME_MUTATION](state){
			...
		}
	}
})

/*** action(�/�ַ�) ***/
action���ڷַ�mutations�ĺ�����ִ���첽��������һ������Ϊstoreʵ��
//��򵥵�action
function increment(store){
	store.dispatch('INCREMENT')
}

//�����Ӳ�����action��ʹ��es6�����⹹
function incremmentBy({ dispatch }, amount){
	dispatch('INCREMENT', amount)
}

���ﳵʵ���������첽API�ͷַ�����mutations����
function checkout ({ dispatch, state }, products){
	const savedCartItems = [...state.cart.added]  //���湺�ﳵ
	dispatch(types.CHECKOUT_REQUEST)			  //�����������
	shop.buyProducts(			
		products,
		() => dispatch(types.CHECKOUT_SUCCESS),		//�ɹ�
		() => dispatch(types.CHECKOUT_FAILURE, savedCartItems) //ʧ��
	)
}

/*** ����ʵ�� ***/
//store.js
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	count: 0
}

const mutations = {
	INCREMENT(state){
		state.count++
	},
	DECREMENT(state){
		state.count--
	}
}

export default new Vuex.Store({
	state,
	mutation,
	strict: true //�ϸ�ģʽ��state��mutation handles�ⲿ���޸Ļᱨ��
	strict: proess.env.NODE_ENV !== 'production'  //�������������п����ϸ�ģʽ
})

//actions.js
export const increment = ({ dispatch }) => dispatch('INCREMENT')
export const decrement = ({ dispatch }) => dispatch('DECREMENT')

//app.vue
<div>
	Clicked: {{ count }} times
	<button @click="increment">+</button>
	<button @click="decrement">-</button>
</div>

import store from './store'
import { increment, decrement } from './actions'
const app = new Vue({
	el: '#app',
	store,
	Vuex: {
		getters: {
			count: state => state.count
		},
		actions: {
			increment,
			decrement
		}
	}
})

�ܽ᣺
����Ӧ�õ��������ǵ����
1.�û�������е������������action����
2.Actionsͨ���ַ�mutations���޸�storeʵ����״̬
3.Storeʵ����״̬�仯��������ͨ��getters�������֪

�淶��
1.Ӧ��state�����ڵ���������
2.ֻ��mutation handles���Ըı�state
3.Mutations������ͬ���ģ���������Ӧ�ý����Ǹı�state
4.�����������ݻ�ȡ���첽����ϸ�ڶ�Ӧ��װ��actions����
5.���ͨ��getter��store�л�ȡstate����ͨ������actions���ı�state


/*** ������ ***/
v-model ����mutation handles����Ĳ������������޸�state
��������
<input v-model="msg">
mutations: {
	UPDATE_MESSAGE(state, msg){
		state.obj.message = msg
	}
}

vuex: {
	getter: {
		state => state.obj.message
	},
	actions: {
		updateMessage: ({ dispatch }, value) => {
			dispatch('UPDATE_MESSAGE', vale)
		}
	}
},
computed: {
	msg: { //msg��getter��setter
		get: {
			return this.msg
		},
		set(val) {
			this.updateMessage(val)
		}
	}
}