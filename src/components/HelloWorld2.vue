<template>
	<div id="goods" class="goods-box">
		<ul class="goods-body">
			<li v-for="(list,index) in goods.goodsData" :key="list.id">
				<div class="goods-main">
					<img :src="list.image" />
				</div>
				<div class="goods-info">
					<h3 class="goods-title">{{ list.title }}</h3>
					<p class="goods-price">¥ {{ list.price }}</p>
					<div class="goods-compute">
						<!--在dom中使用方法为：$store.commit()加上store.js中的属性的名称，示例如下-->
						<button class="goods-reduce" @click="reduceGoods(index)">-</button>
						<input readonly v-model="list.num" />
						<button class="goods-add" @click="addGoods(index)">+</button>
					</div>
				</div>
			</li>
		</ul>
		<div class="goods-footer">
			<div class="goods-total">
				合计：¥ {{ goods.totalPrice }}
			</div>
			<button
				class="goods-check"
				:class="{activeChecke: goods.totalNum <= 0}"
			>去结账({{ goods.totalNum }})</button>
		</div>
	</div>
</template>
<script>
import {mapState, mapGetters, mapMutations} from 'vuex';
export default {
	name: "Goods",
	computed: {
		...mapState(['goods']),
		...mapGetters(['totalPrice','totalNum'])
	},
	methods: {
		...mapMutations(['reduceGoods','addGoods']),
	}
};
</script>
<style>
  li {
    list-style: none;
  }

  img {
    width: 160px;
  }
</style>