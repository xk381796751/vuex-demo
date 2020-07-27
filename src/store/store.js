import Vue from 'vue'; //首先引入vue
import Vuex from 'vuex'; //引入vuex
Vue.use(Vuex)

export default new Vuex.Store({
	// state: {
	// 	// state 类似 data
	// 	//这里面写入数据
	// },
	// getters: {
	// 	// getters 类似 computed 
	// 	// 在这里面写个方法
	// },
	// mutations: {
	// 	// mutations 类似methods
	// 	// 写方法对数据做出更改(同步操作)
	// },
	// actions: {
	// 	// actions 类似methods
	// 	// 写方法对数据做出更改(异步操作)
	// }


	state: {
		goods: {
			totalPrice: 0,
			totalNum: 0,
			goodsData: [{
					id: '1',
					title: '好吃的苹果',
					price: 8.00,
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595845336303&di=4329272ed85c6163f1f63d44ee1bee99&imgtype=0&src=http%3A%2F%2Fwww.240ps.com%2Fjc%2Fdfile%2F20170814%2Fjc1708141_15.jpg',
					num: 0
				},
				{
					id: '2',
					title: '美味的香蕉',
					price: 5.00,
					image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595845365379&di=148a12604a6a91639ebaf5e1e09e6e1f&imgtype=0&src=http%3A%2F%2Fimg.yzcdn.cn%2Fupload_files%2F2015%2F06%2F06%2FFvZNxCm5eyda1t7Etz_BnO0jGyUF.jpg',
					num: 0
				}
			]
		}
	},
	getters: { //其实这里写上这个主要是为了让大家明白他是怎么用的，
		totalNum(state) {
			let aTotalNum = 0;
			state.goods.goodsData.forEach((value) => {
				aTotalNum += value.num;
			})
			return aTotalNum;
		},
		totalPrice(state) {
			let aTotalPrice = 0;
			state.goods.goodsData.forEach((value) => {
				aTotalPrice += value.num * value.price
			})
			return aTotalPrice.toFixed(2);
		}
	},
	mutations: {
		reselt(state, msg) {
			console.log(msg) //我执行了一次；
			state.goods.totalPrice = this.getters.totalPrice;
			state.goods.totalNum = this.getters.totalNum;
		},
		reduceGoods(state, index) {
			//第一个参数为默认参数，即上面的state,后面的参数为页面操作传过来的参数
			state.goods.goodsData[index].num -= 1;

			let msg = '我执行了一次'
			this.commit('reselt', msg);
		},
		addGoods(state, index) {
			state.goods.goodsData[index].num += 1;

			let msg = '我执行了一次'
			this.commit('reselt', msg);
			/**
				想要重新渲染store中的方法，一律使用commit 方法 
				你可以这样写 commit('reselt',{
					state: state
				})
				也可以这样写 commit({
					type: 'reselt',
					state: state 
				})
				主要看你自己的风格
			**/
		}
	},
	actions: {
		//这里主要是操作异步操作的，使用起来几乎和mutations方法一模一样
		//除了一个是同步操作，一个是异步操作，这里就不多介绍了，
		//有兴趣的可以自己去试一试
		//比如你可以用setTimeout去尝试一下
	}
})