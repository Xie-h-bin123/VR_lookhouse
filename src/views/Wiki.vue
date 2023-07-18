<!-- 视图层 -->
<template>
    <div class="wiki">
		<van-nav-bar
		  title="百科"
		  left-arrow
		  @click-left="onClickLeft"
		/>
		<van-tabs v-model:active="active">
		  <van-tab title="推荐">
			  <div class="content">
					<div class="advertise">房地产确定要回暖？</div>
					<div class="text_total">
						<div class="text1">
							<div>管清友：核心城市房地产触底回暖&nbsp;非核心城市泡沫回调</div>
							<div>
							  <span>凤凰网房产</span>
							  <span>1685次阅读</span>
							</div>
							<van-divider />
						</div>
						<div class="text1">
							<div>管清友：核心城市房地产触底回暖&nbsp;非核心城市泡沫回调</div>
							<div>
							  <span>凤凰网房产</span>
							  <span>1685次阅读</span>
							</div>
							<van-divider />
						</div>
					</div>
					<div class="image">
						<div>专家解读两会表述：2018楼市调控政策将宽于过去</div>
						<div>
							<div><img src="http://47.113.189.122/NAS/img/house1.jpg"/></div>
							<div><img src="http://47.113.189.122/NAS/img/house2.jpg"/></div>
							<div><img src="http://47.113.189.122/NAS/img/house3.jpg"/></div>
						</div>
						<div>
							<span>买房人</span>
							<span>1685次阅读</span>
						</div>
						<van-divider />
					</div>
					<div class="image">
						<div>专家解读两会表述：2018楼市调控政策将宽于过去</div>
						<div>
							<div><img src="http://47.113.189.122/NAS/img/house1.jpg"/></div>
							<div><img src="http://47.113.189.122/NAS/img/house2.jpg"/></div>
							<div><img src="http://47.113.189.122/NAS/img/house3.jpg"/></div>
						</div>
						<div>
							<span>买房人</span>
							<span>1685次阅读</span>
						</div>
						<van-divider />
					</div>
					<div class="space"></div>
				</div>
			</van-tab>
			<van-tab title="市场行情"></van-tab>
			<van-tab title="租房"></van-tab>
			<van-tab title="本地"></van-tab>
		</van-tabs>
    </div>
	<Tabbar></Tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
import Tabbar from '../components/Tabbar.vue'
const onClickLeft = () => history.back();
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	.wiki{
		.content{
			width: 100vw;
			display: flex;
			align-items: center;
			flex-direction: column;
			.advertise{
				width: 90vw;
				font-size: 17px;
				font-weight: 600;
				padding: 10px 0px;
			}
			.text_total{
				margin-bottom: 10px;
				width: 90vw;
				box-shadow: #d9d9d9 0px 0px 3px 1px;
				border-radius: 5px;
				.text1{
					padding: 10px 10px 0px 10px;
					>div{
						&:nth-child(1){
							
						}
						&:nth-child(2){
							padding-top:10px ;
							font-size: 10px;
							display: flex;
							justify-content: space-between;
							color: #a2a2a2;
							span{
								&:nth-child(1){
									
								}
							}
						}
					}
				}
			}
			.image{
				width: 90vw;
				padding: 10px;
				>div{
					&:nth-child(1){
						padding-bottom: 5px;
					}
					&:nth-child(2){
						display: flex;
						flex-direction: row;
						padding-bottom: 10px;
						justify-content: space-between;
						height: auto;
						>div{
							flex: 1;
							>img{
								height: 80px;
								width: 100%;
								object-fit: cover;
								border-radius: 5px;	
								padding-right: 3px;
							}
						}		
					}
					&:nth-child(3){
						color: #a2a2a2;
						font-size: 10px;
						display: flex;
						justify-content: space-between;
					}
				}
			}
		}
		.space{
			margin-bottom: 66px;
		}
	}
</style> 