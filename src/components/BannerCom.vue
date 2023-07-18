<!-- 视图层 -->
<template>
<div class="details">
<h3 class="title">整租|整租实拍 中建梅溪湖中心一线湖景随时看房!近二号线地铁</h3>
<div class="price"><span>5500元/月</span> 面议</div>
<div class="house-type">
	<span>房屋户型：2室1厅1卫</span>
	<span>房屋面积：90㎡</span>
	<span>房屋朝向：南</span>
	<span>楼层：中层/共18层</span>
	<span>装修：精装修</span>
	<span>租期：1年</span>
</div>
<div class="others">
	<span>邻地铁&gt;</span>
	<span>有阳台&gt;</span>
	<span>预约看房&gt;</span>
	<span>配套齐全&gt;</span>
	<span>随时看房&gt;</span>
	<span>微聊&gt;</span>
	<span>精装修&gt;</span>
</div>
<div class="contact">
<div><van-icon name="invitation" />预约看房</div>
<div><van-icon name="friends" />聊天</div>
<div><van-icon name="phone" />电话</div>
</div>
</div>
</template>
<!-- 逻辑层 -->
<script setup>
</script>
<!-- 样式层 -->
<style scoped>
.details {
	padding: 10px 10px 50px;
}
.details .price {
	margin: 10px 0;
}
.details .price span {
	font-size: 18px;
	color: #ff0000;
	font-weight: bold;
}
.details .house-type {
	border: 1px solid #209706;
	border-radius: 5px;
	padding: 10px;
	margin-bottom: 10px;
}
.details .house-type span {
	display: block;
}
.details .others span {
	margin: 5px 0;
	display: inline-block;
	border: 1px solid #209706;
	border-radius: 5px;
	padding: 5px;
	margin-right: 10px;
}
.details .contact {
	display: flex;
	justify-content: space-around;
	align-items: center;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	text-align: center;
	background-color: #fff;
	}
.details .contact div:nth-child(1) {
	width: 100px;
}
.details .contact div:nth-child(2) {
	flex: 3;
	background-color: #e2881a;
	color: #fff;
}
.details .contact div:nth-child(3) {
	flex: 3;
	background-color: #53dc41;
	color: #fff;
}
</style>