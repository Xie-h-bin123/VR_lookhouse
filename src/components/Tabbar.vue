<!-- 视图层 -->
<template>
    <div class="bottom_toolbar">
    	<van-tabbar v-model="active" route>
    	  <van-tabbar-item icon="home-o" to="/">首页</van-tabbar-item>
    	  <van-tabbar-item icon="chat-o" to="/chat_index">消息</van-tabbar-item>
    	  <van-tabbar-item icon="newspaper-o" to="/wiki">百科</van-tabbar-item>
    	  <van-tabbar-item icon="manager-o" to="/me">我的</van-tabbar-item>
    	</van-tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script  setup>
import { ref } from 'vue';
const active = ref(0);
</script>


<!-- 样式层 -->
<style  scoped>

</style> 