<!-- 视图层 -->
<template>
    <div class="othervr">
		<van-nav-bar
		  title="所有房间VR展示"
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<van-tabs v-model:active="active">
		  <van-tab title="卧室">
			  <div class="bedroom">
			  	<div class="rooms">
			  	<!-- 轮播与VR组件 -->
			  	<bedroom></bedroom>
			  	<!-- 详情页组件 -->
			  	<!-- <Details></Details> -->
			  	</div>
			  </div>
		  </van-tab>
		  <van-tab title="子卧室">
			  <div class="childroom">
			  	<div class="rooms">
			  	<!-- 轮播与VR组件 -->
			  	<childroom></childroom>
			  	<!-- 详情页组件 -->
			  	<!-- <Details></Details> -->
			  	</div>
			  </div>
		  </van-tab>
		  <van-tab title="厨房">
			  <div class="kitchen">
			  	<div class="rooms">
			  	<!-- 轮播与VR组件 -->
			  	<kitchen></kitchen>
			  	<!-- 详情页组件 -->
			  	<!-- <Details></Details> -->
			  	</div>
			  </div>
		  </van-tab>
		  <van-tab title="客厅">
			  <div class="living">
			  	<div class="rooms">
			  	<!-- 轮播与VR组件 -->
			  	<living></living>
			  	<!-- 详情页组件 -->
			  	<!-- <Details></Details> -->
			  	</div>
			  </div>
		  </van-tab>
		  <van-tab title="休息室">
			  <div class="restroom">
			  	<div class="rooms">
			  	<!-- 轮播与VR组件 -->
			  	<restroom></restroom>
			  	<!-- 详情页组件 -->
			  	<!-- <Details></Details> -->
			  	</div>
			  </div>
		  </van-tab>
		</van-tabs>
    </div>
	<Tabbar></Tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
 const onClickLeft = () => history.back();
 import bedroom from '../components/otherVR/bedroom/VR_banner.vue'
 import childroom from '../components/otherVR/childroom/VR_banner.vue'
 import kitchen from '../components/otherVR/kitchen/VR_banner.vue'
 import living from '../components/otherVR/living/VR_banner.vue'
 import restroom from '../components/otherVR/restroom/VR_banner.vue'
 import Tabbar from '../components/detail/Tabbar.vue'
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	:deep(.van-nav-bar){
		.van-icon{
			color: #000;
			font-size: 20px;
		}
		.van-nav-bar__text{
			color: #000;
			font-size: 15px;
		}
	}	
</style> 