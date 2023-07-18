<!-- 视图层 -->
<template>
    <div class="chat">
		<div class="fix">
			<van-nav-bar title="谢恒斌" left-arrow @click-left="onClickLeft">
				<!-- <template #left>
					<router-link to="/"><van-icon name="arrow-left"/></router-link>
				</template> -->
				<template #right>
					<span style="color: #55997d; margin-right: 10px;">评价</span>
					<span class="iconfont icon-renwu"></span>
				</template>
			</van-nav-bar>
			<div class="drop-down">
				<div><van-icon name="arrow-down" /></div>
			</div>
		</div>
		<div class="content">
			<div class="my">
				<div class="head">
					<img src="http://47.113.189.122/NAS/img/person1.jpg"/>
				</div>
				<div class="text">
					<div class="text1">
						<div>板楼&nbsp;交通便利&nbsp;精装可拎包入住&nbsp;满五&nbsp;双卫格局 &nbsp;环境优美</div>
						<div>
							<div><img src="http://47.113.189.122/NAS/img/house1.jpg"/></div>
							<div>
								<span>4室 2厅 2卫 119.15平</span>
								<span>132.8万</span>
							</div>	
						</div>
						<div>
							<span>安选</span>
							<span>二手房</span>
						</div>
					</div>
					<div class="voice-look">
						<div>足不出户，专家讲解</div>
						<div>语音带看</div>
					</div>
				</div>
				<div class="read"><span>已读</span></div>
			</div>

		</div>
		<div class="notice">
			<div>
				温馨提示:平台不会以官方客服身份发送不明跳转链接、二维码支付及其他联系方式，遇到问题建议在线举报，如果遇到钱财损失，建议您立即报警
			</div>
			<div>
				<span>07-10 18:20</span>
			</div>
		</div>
		<q-chat-message
			avatar="http://47.113.189.122/NAS/img/person2.jpg"
			:text="['你好,这套房子还在的']"
			bg-color="white"
		></q-chat-message>
		<q-chat-message
			avatar="http://47.113.189.122/NAS/img/person2.jpg"
			:text="['老板，你是要租房还是买房']"
			bg-color="white"
		></q-chat-message>
		<q-chat-message
			avatar="http://47.113.189.122/NAS/img/person2.jpg"
			:text="['我看你这边是找房预算是5到8千']"
			bg-color="white"
		></q-chat-message>
		<q-chat-message
			avatar="http://47.113.189.122/NAS/img/person2.jpg"
			:text="['你可以考虑一下']"
			bg-color="white"
		></q-chat-message>
		<!-- <div class="other">
			<div><img src="http://47.113.189.122/NAS/img/person2.jpg"/></div>
			<div>你好,这套房子还在的</div>
		</div>
		<div class="other">
			<div><img src="http://47.113.189.122/NAS/img/person2.jpg"/></div>
			<div>老板，你是要租房还是买房</div>
		</div>
		<div class="other">
			<div><img src="http://47.113.189.122/NAS/img/person2.jpg"/></div>
			<div>我看你这边是找房预算是5到8千</div>
		</div>
		<div class="other">
			<div><img src="http://47.113.189.122/NAS/img/person2.jpg"/></div>
			<div>你可以考虑一下</div>
		</div> -->
		<div class="space"></div>
	</div>
	<Tabbar></Tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
import Tabbar from '../components/chat/Tabbar.vue'
const onClickLeft = () => history.back();
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	:deep(.van-nav-bar){
		.van-icon{
			color: #000;
		}
	}
	.fix{
		position: fixed;
		width: 100vw;
	}
	.chat{
		width: 100%;
		height: 100%;
		background-color: #e7eced;
		.van-nav-bar{
		}
		.drop-down{
			z-index: 5;
			display: flex;
			justify-content: center;
			>div{
				width: 40px;
				height: 20px;
				text-align: center;
				background-color: #fff;
				clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 25% 100%);
				
			}
		}
		.content{
			.my{
				padding-top: 70px;
				display: flex;
				flex-direction: row-reverse;
				.text{
					
					padding-left: 10px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					border-radius: 5px;
					background-color: #fff;
					width: 250px;
					height: 190px;
					width: ;
					.text1{
						height: 130px;
						border-bottom: 1px solid #f4f4f4;
						>div{
							&:nth-child(1){
								font-weight: 600;
								padding-bottom: 5px;
							}
							&:nth-child(2){
								display: flex;
								flex-direction: row;
								>div{
									&:nth-child(2){
										margin-left: 10px;
										span{
											display: block;
											&:nth-child(1){
												font-size: 10px;
												margin-bottom: 3px;
											}
											&:nth-child(2){
												color: red;
											}
										}
									}
									img{
										width: 60px;
										border-radius: 5px;
									}
								}
								
							}
							&:nth-child(3){
								margin-top: 3px;
								span{
									font-size: 10px;
									background-color: #e7eced;
									padding: 5px;
									margin-right: 5px;
									border-radius: 5px;
								}
							}
						}	
					}
					.voice-look{
						>div{
							font-size: 14px;
							display: inline-block;
							margin-bottom: 10px;
							&:nth-child(1){
								margin-right: 36px;
							}
							&:nth-child(2){
								background-color: #5ec895;
								color: #fff;
								padding: 5px;
								border-radius: 5px;
							}
						}
					}
				}

				.head{
					margin-left: 10px;
					img{
						width: 50px;
						height: 50px;
						object-fit:cover;
						border-radius: 50%;
					}
				}
				.read{
					color: #a0a5a6;
					font-size: 10px;
					display: flex;
					flex-direction: column;
					justify-content: flex-end;
					padding-right: 5px;;
				}
			}
		}
		.notice{
			width: 85vw;
			margin: 20px auto;
			>div{
				font-size: 10px;
				color: #a0a5a6;
				text-align: center;
				&:nth-child(1){
					
				}
				&:nth-child(2){
					margin-top: 10px;
				}
			}
		}
		.other{
			margin-bottom: 10px;
			display: flex;
			flex-direction: row;
			height: auto;
			>div{
				&:nth-child(1){
					margin-left: 10px;
					img{
						width: 50px;
						height: 50px;
						object-fit:cover;
						border-radius: 50%;
					}
				}
				&:nth-child(2){
					margin-left: 10px;
					// height: 40px;
					padding: 0px 20px;
					/* text-align: center; */
					line-height: 54px;
					background-color: #fff;
					border-radius: 5px;
				}
			}
		}
		.space{
			height: 100px;
		}
	}
</style> 