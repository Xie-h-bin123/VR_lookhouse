<!-- 视图层 -->
<template>
    <div class="page_1">
		<div>
		<List></List>	
		</div>
		
		<Tabbar></Tabbar>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
import Tabbar from '../components/Tabbar.vue'
import List from '../components/chat_index/List.vue'
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	@green1:#54ad84
.page_1{
	
}
</style> 