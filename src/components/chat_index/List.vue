<!-- 视图层 -->
<template>
    <div class="list">
		<van-tabs v-model:active="activeName" title-active-color="#54ad84" >
		  <van-tab title="微聊(3)" name="a" dot=true>
			  <div class="navbar">
			  	<van-nav-bar >
			  	  <template #left>
			  	      <van-icon name="cross" style="padding-right: 10px;color: #000;"/>
					  <span>想要及时了解最新的房产动态？</span>
			  	    </template>
				  <template #right>
			  	    <div>打开通知</div>
			  	  </template>
			  	</van-nav-bar>
			  </div>
			<van-list>
				<router-link to="/chat" style="color: #000;">
				<div class="chat_1">
					<div class="image"><img src="/img/person1.jpg"/></div>
					<div class="content">
						<div>
							<span>米哈游</span>
							<span>23/7/12</span>
						</div>
						<div>找TA聊聊你的想法</div>
						<div>在的</div>
					</div>
				</div>
				</router-link>
				<div class="chat_1">
					<div class="image"><img src="/img/person1.jpg"/></div>
					<div class="content">
						<div>
							<span>米哈游</span>
							<span>23/7/12</span>
						</div>
						<div>找TA聊聊你的想法</div>
						<div>在的</div>
					</div>
				</div>
				<div class="chat_1">
					<div class="image"><img src="/img/person1.jpg"/></div>
					<div class="content">
						<div>
							<span>米哈游</span>
							<span>23/7/12</span>
						</div>
						<div>找TA聊聊你的想法</div>
						<div>在的</div>
					</div>
				</div>
				<div class="chat_1">
					<div class="image"><img src="/img/person1.jpg"/></div>
					<div class="content">
						<div>
							<span>米哈游</span>
							<span>23/7/12</span>
						</div>
						<div>找TA聊聊你的想法</div>
						<div>在的</div>
					</div>
				</div>
				<div class="chat_1">
					<div class="image"><img src="/img/person1.jpg"/></div>
					<div class="content">
						<div>
							<span>米哈游</span>
							<span>23/7/12</span>
						</div>
						<div>找TA聊聊你的想法</div>
						<div>在的</div>
					</div>
				</div>
				<div class="chat_1">
					<div class="image"><img src="/img/person1.jpg"/></div>
					<div class="content">
						<div>
							<span>米哈游</span>
							<span>23/7/12</span>
						</div>
						<div>找TA聊聊你的想法</div>
						<div>在的</div>
					</div>
				</div>
			</van-list>	
			</van-tab>
		  

		  <van-tab title="通知" name="b">
			  <div class="navbar">
			  	<van-nav-bar >
					<template #left>
					    <van-icon name="cross" style="padding-right: 10px;color: #000;"/>
							<span>想要及时了解最新的房产动态？</span>
						</template>
					<template #right>
			  	    <div>打开通知</div>
			  	  </template>
			  	</van-nav-bar>
			  </div>
				  <van-list>
					<div class="notify_1">
						<div class="image"><img src="/img/person1.jpg"/></div>
						<div class="content">
							<div>
								<span>通知</span>
								<span>23/7/12</span>
							</div>
							<div>恭喜你成为Lv2会员</div>
						</div>
					</div>
					<div class="notify_1">
						<div class="image"><img src="/img/person1.jpg"/></div>
						<div class="content">
							<div>
								<span>通知</span>
								<span>23/7/12</span>
							</div>
							<div>恭喜你成为Lv2会员</div>
						</div>
					</div>
				  </van-list>
		  </van-tab>
		</van-tabs>
		<div class="no">
			<span class="iconfont icon-iconsaoba"></span>
			<span class="iconfont icon-jiahao_o"></span>
		</div>
	</div>
</template>

<!-- 逻辑层 -->
<script setup>

</script>


<!-- 样式层 -->
<style lang="less"  scoped>
	.no{
		position: absolute;
		top: 0;
		right: 0;
		display: flex;
		align-items: center;
		height: 44px;
		>span{
			padding-right: 10px;
			font-size: 20px;
		}
	}
:deep(#van-tabs-1-1){
	padding-right: 86px;
}
:deep(#van-tabs-1-0){
	padding-left: 84px;
}
:deep(.van-tabs__line){
	transform: translateX(128px) translateX(-50%);
	width: 0px;
}
:deep(.van-nav-bar__text){
	color: #979b9d;
}
:deep(.van-nav-bar__right){
	color:#54ad84;
	>div{
		border: #54ad84 solid 1px;
		padding: 5px;
	}
}
.van-list{
	margin-bottom: 50px;
}
.chat_1{
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	margin-top: 10px;
	padding-bottom: 10px;
	border-bottom: #e5eaeb solid 1px;
	.image{
		margin-right: 10px;
		img{
			width:68px;
			height: 68px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	.content{
		display: flex;
		margin-right: 10px;
		flex-direction: column;
		flex: 1;
		>div{
			&:nth-child(1){
				display: flex;
				justify-content: space-between;
				span{
					&:nth-child(1){
						font-size: 18px;
						font-weight: 550;
					}
					&:nth-child(2){
						font-size: 15px;
						color: #979b9d;
					}
				}
			}
			&:nth-child(2){
				font-size: 15px;
				color: #979b9d;
			}
			&:nth-child(3){
				font-size: 15px;
			}
		}
	}
	
}
	
.notify_1{
	display: flex;
	flex-direction: row;
	width: 100%;
	height: auto;
	margin-top: 10px;
	padding-bottom: 10px;
	border-bottom: #e5eaeb solid 1px;
	.image{
		margin-right: 10px;
		img{
			width:68px;
			height: 68px;
			object-fit: cover;
			border-radius: 50%;
		}
	}
	.content{
		display: flex;
		margin-right: 10px;
		flex-direction: column;
		flex: 1;
		>div{
			&:nth-child(1){
				display: flex;
				justify-content: space-between;
				span{
					&:nth-child(1){
						font-size: 18px;
						font-weight: 550;
					}
					&:nth-child(2){
						font-size: 15px;
						color: #979b9d;
					}
				}
			}
			&:nth-child(2){
				margin-top: 18px;
				font-size: 15px;
				color: #979b9d;
			}
		}
	}
	
}
</style> 