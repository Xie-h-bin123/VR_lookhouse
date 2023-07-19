<!-- 视图层 -->
<template>
<div class="vr_rooms">
	<VRCom v-if="isShow"></VRCom>
	<Details v-else></Details>
	<div class="title">
		<span @click="changed(index)" :class="[index == idx ? 'active' :
		'']" v-for="(item, index) in title">{{
		item.name
		}}</span>
	</div>
</div>
</template>
<!-- 逻辑层 -->
<script setup>
import { reactive, ref } from 'vue';
import Details from './Details.vue';
import VRCom from './VRCom.vue';
let idx = ref(0);
let isShow = ref(true);
let title = reactive([]);
title = [{
	id: 0,
	name: "VR"
}, {
	id: 1,
	name: " 图片"
}];
// 切换组件
const changed = (index) => {
// console.log(index);
if (index == 0) {
	idx = 0;
	isShow.value = true;
} else {
	idx = 1;
	isShow.value = false;
}
}
</script>
<!-- 样式层 -->
<style scoped>
.vr_rooms {
	position: relative;
	height: 56vh;
	overflow: hidden;
}
.vr_rooms .title {
	position: absolute;
	bottom: 10px;
	left: 50%;
	z-index: 999;
	transform: translateX(-50%);
	height: 36px;
	line-height: 36px;
	text-align: center;
	background-color: rgba(125, 122, 122, 0.5);
	font-size: 16px;
	font-weight: bold;
	border-radius: 40px;
	overflow: hidden;
}
.vr_rooms .title span {
	display: inline-block;
	width: 50px;
	height: 100%;
	cursor: pointer;
	color: #fff;
}
.vr_rooms .title span.active {
	background-color: #e4e1e1;
	color: #000;
}
</style>