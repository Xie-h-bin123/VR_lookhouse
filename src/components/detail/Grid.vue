<!-- 视图层 -->
<template>
    <div class="grid">
		<div><span>2室1厅</span><span>房型</span></div>
		<div><span>79.82㎡</span><span>面积</span></div>
		<div><span>高/28层</span><span>楼层</span></div>
		<div><span>南</span><span>朝向</span></div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less" scoped>
.grid{
	display: grid;
	grid-template-columns: auto auto auto auto;
	place-items: center;
	height: 70px;
	border-bottom: 1px  solid #dedede;
	border-top: 1px  solid #dedede;
	div{
		display: flex;
		flex-direction: column;
		align-items: center;
		span{
			&:nth-child(1){
				font-size: 20px;
			}
			&:nth-child(2){
				font-size: 10px;
				color: #999;
			}
		}
	}
}
</style> 