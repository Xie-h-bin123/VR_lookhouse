<!-- 视图层 -->
<template>
    <div class="strip">
		<div class="content">
			<div>
				<span>启航租房节</span>
				<span>千万房源 百万补贴</span>
			</div>
			<div>
				<span>GO</span>
				<span class="iconfont icon-fanhui1"></span>
			</div>
			
		</div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less" scoped>
.strip{
	height: 50px;
	.content{
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 10px;
		background-color: #316ce1;
		border-radius: 3px;
		color: #fff;

		div{
			
			&:nth-child(1){
				padding-left: 5px;
				font-size: 15px;
				span{
					&:nth-child(2){
						font-size: 18px;
						margin-left: 5px;
					}
				}
			}
			&:nth-child(2){
				font-size: 15px;
				margin-right: 5px;
			}
		}
	}
}
</style> 