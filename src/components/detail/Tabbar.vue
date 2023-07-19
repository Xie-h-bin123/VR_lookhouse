<!-- 视图层 -->
<template>
    <div class="tabbar">
		<van-tabbar v-model="active">
		  <van-tabbar-item>
			<template #icon="props">
				<span class="iconfont icon-rili"></span>
			</template>
		    <span>预约看房</span>
		  </van-tabbar-item>
		  <van-tabbar-item>
			<span class="iconfont icon-weiliao"></span>
		    <span>微聊</span>
		  </van-tabbar-item>
		  <van-tabbar-item>
			<span class="iconfont icon-dianhua"></span>
		    <span>电话</span>
		  </van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less" scoped>
.tabbar{
	.van-tabbar-item{
		&:nth-child(1){
			flex: 2;
			margin-left: 10px;
			margin-right: 10px;
			color: #000;
		}
		&:nth-child(2){
			flex: 3;
			background-color:#e47640;
			color: #fff;
			font-size: 15px;
			border-radius: 2px;
			margin-right: 5px;
		}
		&:nth-child(3){
			flex:3;
			background-color: #60c797;
			color: #fff;
			font-size: 15px;
			border-radius: 2px;
			margin-right: 10px;
		}
	}
}
</style> 