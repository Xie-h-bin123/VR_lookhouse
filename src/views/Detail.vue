<!-- 视图层 -->
<template>
    <div class="detail">
		<NavBar></NavBar>
		<Img_Select></Img_Select>
		<div class="text1">
			<span>整租|马王堆 万家丽 浏阳河畔 采光很好 带燃气 民水名电 精装修</span>
		</div>
		<div class="text2">
			<span>2000元/月</span><span>面议</span>
		</div>
		<Strip></Strip>
		<Strip1></Strip1>
		<Grid></Grid>
		<Grid1></Grid1>
		<div style="height: 50px;"></div>
		<Tabbar></Tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
import NavBar from '../components/detail/NavBar.vue';
import Img_Select from '../components/detail/Img_Select.vue'
import Tabbar from '../components/detail/Tabbar.vue'
import Strip from '../components/detail/Strip.vue'
import Strip1 from '../components/detail/Strip1.vue'
import Grid from '../components/detail/Grid.vue'
import Grid1 from '../components/detail/Grid1.vue'
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	:root:root {
	  --van-nav-bar-icon-color:#fff;
	  --van-nav-bar-text-color:#fff;
	}
.detail{
	width: 100vw;
	.navbar{

	}
	.img{
	}
}
.text1{
	margin: 10px 10px;
	font-size: 20px;
}
.text2{
	margin: 0 10px;
	span{
		&:nth-child(1){
			font-size: 20px;
			color: red;
			margin-right: 10px;
		}
		&:nth-child(2){
			font-size: 15px;
			color: #999;
		}
	}
}
</style> 