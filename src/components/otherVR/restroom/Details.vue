<!-- 视图层 -->
<template>
<div class="banner">
<van-swipe>
	<van-swipe-item v-for="item in imgList">
		<img :src="item" alt="">
	</van-swipe-item>
	<template #indicator="{ active, total }">
		<div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
	</template>
</van-swipe>
</div>
</template>
<!-- 逻辑层 -->
<script setup>
let imgList = [
	"./imgs/restroom/2_b.jpg",
	"./imgs/restroom/2_d.jpg",
	"./imgs/restroom/2_f.jpg",
	"./imgs/restroom/2_l.jpg",
	"./imgs/restroom/2_r.jpg",
	"./imgs/restroom/2_u.jpg"
];
</script>
<!-- 样式层 -->
<style scoped>
	.custom-indicator {
	position: absolute;
	right: 5px;
	bottom: 5px;
	padding: 2px 5px;
	font-size: 12px;
	background: rgba(0, 0, 0, 0.1);
}
.banner img {
	width: 100%;
	height: 100%;
}
</style>