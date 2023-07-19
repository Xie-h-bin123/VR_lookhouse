<!-- 视图层 -->
<template>
    <div class="tab">
		<van-tabs v-model:active="activeName" color=#37bb93 line-width="20px ">
		  <van-tab title="我要买房" name="a">
			  <div class="main_block_middle"><span>在售房源112658套</span></div>
			  <div class="main_block_bottom">
			  	<div>
			  		<svg class="icon" aria-hidden="true">
			  		  <use xlink:href="#icon-yidianzan"></use>
			  		</svg>
			  		<span>房源推荐</span>
			  	</div>
			  	<div>
			  		<svg class="icon" aria-hidden="true">
			  		  <use xlink:href="#icon-redu"></use>
			  		</svg>
			  		<span>最新消息</span>
			  	</div>
			  	<div>
			  		<svg class="icon" aria-hidden="true">
			  		  <use xlink:href="#icon-jiangbei"></use>
			  		</svg>
			  		<span>房型甄选</span>
			  	</div>
			  	<div>
			  		<svg class="icon" aria-hidden="true">
			  		  <use xlink:href="#icon-aixin"></use>
			  		</svg>
			  		<span>定制服务</span>
			  	</div>
			  </div>	
		  </van-tab>
		  <van-tab title="我要租房" name="b">内容 2</van-tab>
		  <van-tab title="我是房东" name="c">内容 3</van-tab>
		</van-tabs>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less"  scoped>
	.van-tabs{
		:deep(.van-tab){
		}
	}
	:deep(.van-tab__text){
		font-size: 4vw;
	}
	@blue:#6291f6;
	@green: #37bb93;
	.main_block_middle{
		height: 5vh;
		display: flex;
		align-items: center;
		>span{
			color: #5e5e5e;
		}
	}
	.main_block_bottom{
		display: grid;
		grid-template-columns: auto auto;
		grid-template-rows: auto auto;
		justify-content: space-between;
		height: 15vh;
		>div{
			display: flex;
			justify-content: center;
			align-items: center;
			.icon{
				width: 2em;
				height: 2em;
				fill: @green !important;
			}
		}
	}
</style> 