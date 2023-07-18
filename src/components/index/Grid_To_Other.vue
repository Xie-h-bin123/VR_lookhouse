<!-- 视图层 -->
<template>
    <van-grid :column-num="4" :border="false" clickable="true">
        <van-grid-item url="/second_hand">
			<span class="iconfont icon-fangzi"></span>
			<span>二手房</span>
        </van-grid-item>
		
		<van-grid-item>
			<span class="iconfont icon-xiaoqu-xianxing"></span>
			<span>新房</span>
		</van-grid-item>

        <van-grid-item>
			<span class="iconfont icon-dizhi"></span>
			<span>地图找房</span>
        </van-grid-item>
		
        <van-grid-item>
			<span class="iconfont icon-icon-test"></span>
			<span>智能找房</span>
        </van-grid-item>
		
		<van-grid-item>
			<span class="iconfont icon-qiandai"></span>
			<span>投资</span>
		</van-grid-item>	
		
		<van-grid-item>
			<span class="iconfont icon-gouwuche1"></span>
			<span>商城</span>
		</van-grid-item>
		
		<van-grid-item>
			<span class="iconfont icon-weibiaoti5"></span>
			<span>贷款</span>
		</van-grid-item>
		
		<van-grid-item>
			<span class="iconfont icon-noun__cc"></span>
			<span>计算机</span>	  
		</van-grid-item>
		
		<van-grid-item>
			<span class="iconfont icon-geren"></span>
			<span>经济人</span>
		</van-grid-item>
		
		<van-grid-item>
			<span class="iconfont icon-dunpai"></span>
			<span>查征信</span>	  
		</van-grid-item>
		  
    </van-grid>
</template>

<!-- 逻辑层 -->
<script setup>
	
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	.van-grid{
		.van-grid-item{
			span{
				&:nth-child(1){
					font-size: 20px;
				}
				&:nth-child(2){
					font-size: 10px;
					margin-top: 10px;
				}
			}
		}
	}
</style> 