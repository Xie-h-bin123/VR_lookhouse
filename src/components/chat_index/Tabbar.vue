<!-- 视图层 -->
<template>
    <div class="tabbar">
		<van-tabbar v-model="active" route >
		  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
		  <van-tabbar-item icon="chat-o" to="/chat_index">消息</van-tabbar-item>
		  <van-tabbar-item icon="video-o" to="/video"> 视频探房</van-tabbar-item>
		  <van-tabbar-item icon="like-o" to="/recommend">推荐</van-tabbar-item>
		  <van-tabbar-item icon="manager-o" to="/me">我的</van-tabbar-item>
		</van-tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
import { ref } from 'vue'
const active = ref(0);

</script>


<!-- 样式层 -->
<style lang="less" scoped>
.iconfont {
	font-size: 20px;
}
</style> 