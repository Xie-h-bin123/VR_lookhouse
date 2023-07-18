<!-- 视图层 -->
<template>
	<div class="navbar">
	<van-nav-bar left-arrow @click-left="onClickLeft">
	  <template #right>
		<span class="iconfont icon-shoucang"></span>
		<span class="iconfont icon-31zhuanfa"></span>
	    <span class="iconfont icon-xiaoxi"></span>
		<div class="cursor-pointe non-selectable"><van-icon name="ellipsis" size="20"/>
		  <q-menu>
			<q-list dense style="min-width: 100px">
			  <q-item clickable v-close-popup>
				<q-item-section @click="go_other_VR">查看更多信息</q-item-section>
			  </q-item>
			  </q-list>
		  </q-menu>
		</div>
	  </template>
	</van-nav-bar>	
	</div>


</template>

<!-- 逻辑层 -->
<script setup>
import {useRouter} from 'vue-router'
const router = useRouter();
const onClickLeft = () => history.back();
const go_other_VR = () =>{
	router.push({
		name:'register'
	})
}
</script>


<!-- 样式层 -->
<style lang="less" scoped>


.navbar{
	border: none;
	.van-nav-bar{
		background-color: transparent;
		border:none;
		color: #000 !important;
		height: 0px;
		:deep(.van-icon-arrow-left){
			color: #000;
		}
		.iconfont{
			padding-right: 20px;
			font-size: 20px;

		}
		.van-icon{
			color: #ff5500;
		}
	}
}

</style> 