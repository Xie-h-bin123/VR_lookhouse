<!-- 视图层 -->
<template>
    <div class="strip">
		<div class="content">
			<div>
				<span>人气好房</span>
				<span>全城热租·甄选好房</span>
			</div>
			<div>
				<span>保障免费领</span>
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
	.content{
		height: 30px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 10px 10px;
		background-color: #e45542;
		border-radius: 3px;
		color: #fff;
		div{			
			&:nth-child(1){
				padding-left: 5px;
				font-size: 4vw;
				span{
					&:nth-child(1){
						font-size: 5vw;
						margin-right: 5px;
					}
				}
			}
			&:nth-child(2){
				margin-right: 5px;
				font-size: 5vw;
			}
		}
	}
}
</style> 