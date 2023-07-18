<!-- 视图层 -->
<template>
    <div class="me">
		<div class="navbar">
				<span class="iconfont icon-erji" ></span>
				<span class="iconfont icon-scan"></span>
				<span class="iconfont icon-shezhi"></span>
		</div>
		<div class="login-register-father" >
			<div class="login-register">
				<div class="image-head"><img src="http://47.113.189.122/NAS/img/person1.jpg" style="width: 55px ; height: 55px;"></div>
				<div class="content">
					<div class="content-title">
						<div @click="login_register">注册/登录</div>
						<div>登入后可以体验更多服务 
							<van-icon name="arrow" /></div>
					</div>
					<div class="content-go">
						<span>个人主页</span>
					</div>
				</div>
			</div>
		</div>
		<div class="vip-father">
			<div class="vip">
				<div class="vip-left">
					<span class="iconfont icon-vip"></span>
					<span>安居客会员</span>
				</div>
				<div class="vip-right"><span>立即登录领取新手礼包</span> <van-icon name="arrow" /></div>
			</div>	
		</div>
		<div class="favorites">
			<van-grid :border="false" :column-num="4">
				<van-grid-item>
					<span style="font-size: 20px; font-weight: 600;">95</span>
					<span style="font-size: 10px;">历史浏览</span>
				</van-grid-item>
				<van-grid-item>
					<span style="font-size: 20px; font-weight: 600;">0</span>
					<span style="font-size: 10px;">收藏关注</span>
				</van-grid-item>
				<van-grid-item>
					<span style="font-size: 20px; font-weight: 600;">0</span>
					<span style="font-size: 10px;">联系人</span>
				</van-grid-item>
				<van-grid-item>
					<span style="font-size: 20px; font-weight: 600;">0</span>
					<span style="font-size: 10px;">钱包优惠</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-yusan_"></span>
					<span style="font-size: 10px;">保障</span>
				</van-grid-item>
			</van-grid>
		</div>
		<div class="house-tool">
			<div class="house-tool-title">房产工具</div>
			<van-grid :border="false" :column-num="4">
			  <van-grid-item >
				<span class="iconfont icon-kanfangguanli"></span>
				<span class="font">看房管理</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-jinrongfuwu"></span>
			    <span class="font"> 金融服务</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-tongji"></span>
			    <span class="font">查看房价</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-fangdaijisuan"></span>
			    <span class="font">房贷计算</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-fangdaijisuan"></span>
			    <span class="font">税费计算</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-goufangzige"></span>
			    <span class="font">购房资格</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-tongji"></span>
			    <span class="font">贷款成数</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-baodian_hei"></span>
			    <span class="font">安居宝典</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-wodedianping"></span>
			    <span class="font">我的点评</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-benzi"></span>
			    <span class="font">我的问答</span>
			  </van-grid-item>
			  <van-grid-item>
			    <span class="iconfont icon-jinghao"></span>
			    <span class="font">我的帖子</span>
			  </van-grid-item>
			</van-grid>
		</div>
		<div class="house-serve">
			<div class="house-serve-title">房东服务</div>
			<van-grid :border="false" :column-num="4">
				<van-grid-item>
					<span class="iconfont icon-a-4gongju-fangwugujia"></span>
					<span class="font">房屋估价</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-maifang"></span>
					<span class="font">我要买房</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-fangzi"></span>
					<span class="font">租房管理</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-maifang"></span>
					<span class="font">买房管理</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-vip"></span>
					<span class="font">速卖VIP</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-shangpu"></span>
					<span class="font">商铺写字楼</span>
				</van-grid-item>
				<van-grid-item>
					<span class="iconfont icon-xiezilou"></span>
					<span class="font">房东必看</span>
				</van-grid-item>
			</van-grid>
		</div>
    </div>
	<div style="height: 50px;"></div>
	<Tabbar></Tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
import Tabbar from '../components/Tabbar.vue';
import {useRouter} from 'vue-router'

const router= useRouter()
	
const login_register = () =>{
	router.push({
		name:'register'
	})
}
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	
.me{
	.navbar{
		display: flex;
		width: 100%;
		height: 46px;
		background-color: #60c696;
		justify-content: flex-end;
	}
	.iconfont{
		font-size: 25px;
		margin-right: 10px;
		margin-top: 10px;
	}
	.icon-shezhi{
		color: #fff;
	}
	.icon-erji{
		
		color: #fff;
	}
	.icon-scan{
		color: #fff;
	}
	:deep(.van-nav-bar__content) {
		background-color: #60c696;
	}
	.login-register-father{
		background-color: #60c696;
		margin: 0;
		border: none;
		width: 100vw;
		height: 61px;
		.login-register{
			width: 90vw;
			display: flex;
			flex-direction: row;
			margin: auto;
			.image-head{
				img{
					border-radius: 50%;
				}
			}
			.content{
				width: 100%;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-around;
				color: #fff;
				margin-left: 5px;
				.content-title{
					flex: 1;
					div{
						&:nth-child(1){
							font-size: 20px;
						}
						&:nth-child(2){
							font-size: 10px;
						}
					}
				}
				.content-go{
					font-size: 10px;
					span{
						border: #fff solid 1px;
						padding: 5px;
						border-radius: 2px;
					}
				}
			}
		}
	}
	.vip-father{
		width: 100vw;
		background-color: #60c696;
		.vip{
			border-radius: 2px;
			background-color: #DDf2E8;
			width: 90%;
			margin: auto;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 45px;
			.vip-left{
				font-size: 15px;
				margin-left: 10px;
				span{
					&:nth-child(1){
						line-height:45px;
						font-size: 15px;
						
					}
					&:nth-child(2){
						line-height: 45px;
						font-weight: 600;

					}
				}
			}
			.vip-right{
				font-size: 10px;
				line-height: 45px;
				margin-right: 10px;
			}
		}
	}
	.house-tool{
		.house-tool-title{
			font-size: 20px;
			margin-left: 10px;
		}
		.van-grid-item__content{
			.iconfont{
				font-size: 20px;
			}
			.font{
				font-size: 10px;
			}
		}
	}
	.house-serve{
		.house-serve-title{
			font-size: 20px;
			margin-left: 10px;
		}
		.van-grid-item__content{
			.iconfont{
				font-size: 20px;
			}
			.font{
				font-size: 10px;
			}
		}
	}
}
</style> 