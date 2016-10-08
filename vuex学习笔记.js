vuex使用：
//注意事项
组件永远不应该直接改变Vuex store的状态，只能读取状态
mutation必须是同步函数
mutation第一个参数为state，其他的参数称为payload
action第一个参数为store
当添加一个不存在的属性时，需要：
1：使用Vue.set(obj, 'newProp', 123);
2：state.obj = {...state.obj, newProp: 123}



/*** state(状态/数据) ***/
//根组件引入store实例
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

//子组件通过vuex.getter方法读取数据
export default {
	data(){...},
	vuex:{
		getters: {
			count: function(state){   		   => 				 count: state => state.count	
				return state.count   		(es6写法)
			}
		}
	}
}
注：在getter中无法使用this关键字,如果需要this,需要另外单开一个计算属性。
例：
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

getter中的过滤器运用：
vuex: {
	getters: {
		filteredMessages: state => {
			return state.message.filter(message => {
				return message.threadID === state.currentThreadID
			})
		}
	}
}

多组件共享getter函数：
//getters.js
export function filteredMessages(state){
	reutrn state.message.filter(message => {
		return message.threadID === state.currentThreadID
	})
}

//组件中
import { filteredMessages } from './getters'
export default{
	vuex: {
		getters: {
			filteredMessages
		}
	}
}



/*** Mutations(异变/事件) ***/
Mutations 本质是一个事件系统：每个mutation都有一个事件名和一个回调函数，任何一个Mutation handler的第一个参数永远为所属store的整个state对象：
//注册mutations
import Vuex from 'vuex'
const store = new Vuex.Store({
	state: {
		count: 1,
	},
	mutations: {
		INCREMENT (state){  //mutation 全部大写命名
			//改变state
			state.count++
		}
	}
})	

//调用mutation handle
store.dispatch('INCREMENT')

//带参数的dispatch
mutations: {
	INCREMENT(state, n){
		state.count += n
	}
}
store.dispatch('INCREMENT', 10) //所有的额外参数称为该mutation的payload（有效负载）

另外：
使用常亮去命名一个mutation，并把这些常亮放在单独的地方
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

/*** action(活动/分发) ***/
action用于分发mutations的函数，执行异步操作，第一个参数为store实例
//最简单的action
function increment(store){
	store.dispatch('INCREMENT')
}

//带附加参数的action，使用es6参数解构
function incremmentBy({ dispatch }, amount){
	dispatch('INCREMENT', amount)
}

购物车实例（调用异步API和分发多重mutations）：
function checkout ({ dispatch, state }, products){
	const savedCartItems = [...state.cart.added]  //保存购物车
	dispatch(types.CHECKOUT_REQUEST)			  //发出检出请求
	shop.buyProducts(			
		products,
		() => dispatch(types.CHECKOUT_SUCCESS),		//成功
		() => dispatch(types.CHECKOUT_FAILURE, savedCartItems) //失败
	)
}

/*** 完整实例 ***/
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
	strict: true //严格模式，state在mutation handles外部被修改会报错
	strict: proess.env.NODE_ENV !== 'production'  //不在生产环境中开启严格模式
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

总结：
整个应用的数据流是单向的
1.用户在组件中的输入操作触发action调用
2.Actions通过分发mutations来修改store实例的状态
3.Store实例的状态变化反过来又通过getters被组件获知

规范：
1.应用state存在于单个对象中
2.只有mutation handles可以改变state
3.Mutations必须是同步的，它们做的应该仅仅是改变state
4.所有类似数据获取的异步操作细节都应封装在actions里面
5.组件通过getter从store中获取state，并通过调用actions来改变state


/*** 表单处理 ***/
v-model 属于mutation handles以外的操作，不允许修改state
处理方法：
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
	msg: { //msg的getter和setter
		get: {
			return this.msg
		},
		set(val) {
			this.updateMessage(val)
		}
	}
}