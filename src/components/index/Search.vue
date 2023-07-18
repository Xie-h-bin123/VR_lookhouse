<!-- 视图层 -->
<template>
    <div class="search_1" >
		<van-search placeholder="请输入小区或商圈名"></van-search>
		<div class="address">长沙</div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less" scoped>
	.search_1{
		position: absolute;
		width: 100vw;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.van-search{
			// ::placeholder {
			//     color: #FF5733; /* 你希望的颜色，这里使用橙色 */
			//     opacity: 1; /* 改变占位符透明度，取值范围为0到1 */
			// }
			flex:1;
			background-color: transparent;
			:deep(.van-search__content){
				border-radius: 8px;
			}
		}
		.address{
			padding-right: 10px;
			color: #fff;
		}
	}
</style> 