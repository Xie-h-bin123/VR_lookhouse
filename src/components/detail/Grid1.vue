<!-- 视图层 -->
<template>
    <div class="grid1">
		<van-grid direction="horizontal" :column-num="4" reverse icon-size="10px" >
		  <van-grid-item  text="邻地铁" icon="arrow" icon-color="#0055ff"/>
		  <van-grid-item icon="arrow" text="精装修" icon-color="#0055ff"/>
		  <van-grid-item icon="arrow" text="随时看房" icon-color="#0055ff"/>
		  <van-grid-item icon="arrow" text="有电梯" icon-color="#0055ff"/>
		</van-grid>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less" scoped>
	.grid1{
		.van-grid{
			.van-grid-item{
				
			}
		}
	}
</style> 