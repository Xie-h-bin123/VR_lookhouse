<!-- 视图层 -->
<template>
    <div class="main">
        <div class="search">
			<Search></Search>
            <Swipe></Swipe>	
        </div>
        <div class="go_other">
			<Grid_To_Other></Grid_To_Other>
        </div>
        <div class="main_function">
			<div class="main_block">
				<div class="main_block_in">
					<Tab></Tab>			
				</div>
			</div>
		</div>
        <div class="activity">
			<div class="activity_title"><span>热门活动</span></div>
			<div class="active_contents_wrapper">
				<div class="active_content_1">
					<div class="content_1">活动优惠</div>
					<div class="content_2">参与即享更多优惠</div>
					<div>
						<img v-lazy="'/img/house1.jpg'"/>
						<img v-lazy="'/img/house2.jpg'"/>
					</div>
				</div>
				<div class="active_content_2">
					<div class="content_1">新盘强先</div>
					<div class="content_2">新盘抢先 先赌为快</div>
					<div>
						<img v-lazy="'/img/house3.jpg'"/>
						<img v-lazy="'/img/house4.jpg'"/>
					</div>
				</div>
			</div>
		</div>
        <div class="house_knowledge">
			<div class="title">
				<span>房产知识</span>
			</div>
			<div class="content">
				<div class="content_1"><span>房产知识大扫盲</span></div>
				<div class="content_2"><span>你不知道的必备房产知识</span></div>
				<div class="content_3"><span>了解详情</span></div>
			</div>
		</div>
        <div class="second_hand">
			<div class="title"><span>为你推荐二手房</span></div>
			<div class="content">
				<div class="img">
					<img v-lazy="'/img/bg1.jpg'"/>
					<div class="right-images">
						<img v-lazy="'/img/bg2.jpg'"/>
						<img v-lazy="'/img/bg3.jpg'"/>
					</div>
				</div>
				<div class="text">
					<div>
						<span>山水文园</span>
						<span>195万</span>
					</div>
					<div>
						<span>朝阳十里河|3室1厅|185.29m²</span>
						<span>
							<span>13571元</span>
							<span>/m²</span>
						</span>
					</div>
					<div>
						<span>满五减一</span>
						<span>学区房</span>
						<span>急售</span>
					</div>
				</div> 
			</div>
		</div>
        <div class="new_house">
			<div class="middle">
			    <span class="color"></span>
			    <span class="text">为你推荐新房</span>
			    </div>
				<router-link to="/detail" style="color: #000;">
			    <div class="list">
			        <div class="list_branch">
			        <img v-lazy="'/img/bg1.jpg'">
			        <div class="content">
			            <div >山水文园2式1厅</div>
			            <div>87.79m²</div>
			            <div><span>满五唯一</span><span>学医房</span></div>
			            <div><span>359万</span><span>建面158-177m²</span></div>
			        </div>
			        </div>
			    </div>
				</router-link>
			    <div class="list">
			        <div class="list_branch">
			        <img v-lazy="'/img/bg2.jpg'">
			        <div class="content">
			            <div >山水文园2式1厅</div>
			            <div>87.79m²</div>
			            <div><span>满五唯一</span><span>学医房</span></div>
			            <div><span>359万</span><span>建面158-177m²</span></div>
			        </div>
			        </div>
			    </div>
		</div>
        <div class="rent">
			<div class="title"><span>为你推荐租房</span></div>
			<div class="content">
				<div class="content_1">
					<img v-lazy="'/img/bg1.jpg'"/>
					<div>
						<div><span>君泰中央公园A区</span></div>
						<div><span>2式一厅|整组</span></div>
						<div><span>学区房</span><span>70年产权</span></div>
						<div>2600元/月</div>
					</div>
				</div>
				<div class="content_2">
					<img v-lazy="'/img/bg1.jpg'"/>
					<div>
						<div><span>君泰中央公园A区</span></div>
						<div><span>2式一厅|整组</span></div>
						<div><span>学区房</span><span>70年产权</span></div>
						<div>2600元/月</div>
					</div>
				</div>
				<div class="content_3">
					<img v-lazy="'/img/bg1.jpg'"/>
					<div>
						<div><span>君泰中央公园A区</span></div>
						<div><span>2式一厅|整组</span></div>
						<div><span>学区房</span><span>70年产权</span></div>
						<div>2600元/月</div>
					</div>
				</div>
				<div class="content_4">
					<img v-lazy="'/img/bg1.jpg'"/>
					<div>
						<div><span>君泰中央公园A区</span></div>
						<div><span>2式一厅|整组</span></div>
						<div><span>学区房</span><span>70年产权</span></div>
						<div>2600元/月</div>
					</div>
				</div>
			</div>
		</div>
    </div>
	<Tabbar></Tabbar>
</template>

<!-- 逻辑层 -->
<script setup>
import Search from '../components/index/Search.vue';
import Swipe from '../components/index/Swipe.vue'
import Grid_To_Other from '../components/index/Grid_To_Other.vue'
import Tab from '../components/index/Tab.vue';
import Tabbar from '../components/Tabbar.vue'
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	@blue:#6291f6;
	@green: #37bb93;
	
.main{
    width: 100vw;
    height:auto;
}
.search{
    position:relative;
    width: 100%;
    height: 40vh;
    overflow: hidden;
}

.main{
	
	.main_function{
		width: 100%;
		height: 40vh;
		background-image: linear-gradient(to bottom, @blue 50%, white 50%);
		margin-top: 10px;
		display: flex;
		.main_block{
			width: 90%;
			height: 30vh;
			background-color: #fff;
			border: none;
			box-shadow: 0px 0px 1px 2px #fafafa;
			margin: 5vh auto;
			border-radius: 11px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			.main_block_in{
				width: 70vw;
				height: 25vh;
				>div:deep{
					--van-tab-font-size:18px;
					--van-tabs-bottom-bar-width:76px;
					&.main_block_top{
						display: flex;
						justify-content: space-between;
						align-items: center;
						height: 5vh;
						border-bottom: #f0f0f0 solid 1px;
						>span{
							&:nth-child(1){
								color: #1f1f1f;
								border-bottom: @green solid 5px;
								font-weight: 550;
							}
							&:nth-child(2){
								color:#5e5e5e;
								border-bottom: #fff solid 5px;
							}
							&:nth-child(3){
								color: #5e5e5e;
								border-bottom: #fff solid 5px;
							}
							
						}
					}					
				}
			}	
		}
	}
	.activity {
		width: 100%;
	  .activity_title {
	    display: flex;
	    align-items: center;
	
	    span {
	      /* 根据需要添加样式 */
		  font-size: 20px;
	    }
		margin: 10px auto;
		padding-left: 20px;
	  }
	
	  // 将 .active_content_1 和 .active_content_2 包裹在一个 div 中，使它们水平居中对齐
	  .active_contents_wrapper {
	    display: flex;
	    justify-content: center;
	    align-items: center;
	    width: 100%;
		.active_content_1{
			background-color: #f9f9f4;
			margin-right: 15px;
		}
		.active_content_2{
			background-color: #f9f8f9
		}
	    .active_content_1,
	    .active_content_2 {
			border-radius: 10px;
			padding-top: 20px;
			padding-bottom: 10px;
	      .content_1 {
	        /* 根据需要添加样式 */
			color: #000;
			padding-left: 10px;
	      }
	
	      .content_2 {
			 font-size: small;
	        /* 根据需要添加样式 */
			color: #5e5e5e;
			padding-left: 10px;
	      }
	
	      div {			  
			&:nth-last-child(1){
				display: flex;
				justify-content: space-around;
				align-items: center;
			}
	        img {
				border-radius: 5px;
				margin-top: 10px;
				object-fit: cover;
				/* 设置图片大小 */
				width: 17vw; /* 您可以根据需要调整大小 */
				height: 50px; /* 您可以根据需要调整大小 */
			  &:nth-child(1){
				  margin-left: 10px;
				  margin-right: 5px;
			  }
			  &:nth-child(2){
				  margin-left: 0px;
				  margin-right: 10px;
			  }
	        }
	      }
	    }
	  }
	}
	.house_knowledge {
	  display: flex;
	  flex-direction: column;
	
	  .title {
	    display: flex;
	    align-items: center;
	
	    span {
	      /* 根据需要添加样式 */
		  font-size: 20px;
	    }
		margin-top: 20px;
		padding-left: 20px;
	  }
	
	  .content {
	    display: flex;
	    flex-direction: column;
		background-color: #cdebf6;
		justify-content: center;
		border-radius: 10px;
		width: 90vw;
		height: 30vh;
		margin: 5vw;
	    .content_1{
		  padding-left: 10vw;
		  font-size: 20px;
		  color: #52a0a3;
		}
			
	    .content_2{
		  padding-left: 10vw;
		  color: #52a0a3;
		  margin-top: 5px;
		}
	    .content_3 {
			width: 80px;
			height: auto;
			background-color: #24baaa;
			margin-left: 10vw;
			color: #fff;
			text-align: center;
			margin-top: 15px;
	    }
	  }
	}
	.second_hand {
	  display: flex;
	  flex-direction: column;
	  align-items: flex-start;
	  .title {
	    display: flex;
	    justify-content: flex-start;
	    align-items: center;
		padding-left: 5px;
		margin-bottom: 10px;
	    span {
	      /* 根据需要添加样式 */
		  font-size: 20px;
		  border-left: 4px solid #1cc2af;
	    }
	  }
	
	  .content {
	    margin: auto;
		width: 90vw;
		box-shadow: 0px 0px 1px 2px #fafafa;
	    .img {
		  padding-top: 10px;
	      display: flex;
	      flex-direction: row;
	      align-items: center;
		  justify-content: space-around;
	      >img {
			  border-radius: 10px;
			  object-fit: cover; /* 裁剪图片以适应固定的宽高比 */
	          width: 55vw; /* 第一张图片的固定宽度，可以根据需要调整 */
	          height: 150px; /* 第一张图片的固定高度，可以根据需要调整 */
	           /* 你可以根据需要调整间距 */
	      }
	    }
	
	    .right-images {
	      display: flex;
	      flex-direction: column;
	      align-items: flex-start;
		  justify-content: space-between;
		  height: 150px;
		  >img {
			border-radius: 10px;
			object-fit: cover;
		    width: 35vwpx; /* 第二、三张图片的固定宽度，可以根据需要调整 */
		    height: 70px; /* 第二、三张图片的固定高度，可以根据需要调整 */
		  }
	    }
	
	    .text {
	      display: flex;
	      flex-direction: column;
	      align-items: flex-start;
	      margin-top: 15px; /* 您可以根据需要调整上边距 */
		  padding-bottom: 10px;
		  margin-left: 10px;
		  margin-right: 10px;
	      div {
	        display: flex;
	        flex-direction: row;
	        align-items: center;
	        justify-content: flex-start;
			
	        &:nth-child(1){
				font-size: 20px;
				line-height: 25px;
				justify-content: space-between; /* 文字两段对齐 */
				width: 100%; /* 宽度设置为 100% 以适应容器宽度 */
				span{
					&:nth-child(2){
						color: red;
					}
				}
			}
	        &:nth-child(2) {
				font-size: 10px;
				line-height: 25px;
				justify-content: space-between; /* 文字两段对齐 */
				width: 100%; /* 宽度设置为 100% 以适应容器宽度 */
				margin: 7px 0px;
				span{
				&:nth-child(1){
					color: #767676;
				}
				&:nth-child(2){
					span{
						&:nth-child(1){
							color: red;
							margin-right: 0;
						}
						&:nth-child(2){
							margin-left: 0;
						}
					}
				}
				}
	        }
	
	        &:nth-child(3) {
	          justify-content: flex-start; /* 文字靠左对齐 */
			  display: inline-block;
			  span{
				  font-size: 10px;
				  &:nth-child(1){
					  background-color: #befaf5;
					  color: #44ac9c;
					  padding: 2px 5px;
					  border-radius: 2px;
				  }
				  &:nth-child(2){
					  background-color: #fbe2bf;
					  color: #cfa06f;
					  padding: 2px 5px;
					  margin-left: 10px;
					  border-radius: 2px;
				  }
				  &:nth-child(3){
				  	background-color: #b8d1e6;
				  	color: #6a9bbf;
				  	padding: 2px 5px;
				  	margin-left: 10px;
					border-radius: 2px;
				  }
			  }
	        }
	      }
	    }
	  }
	}
	.new_house{
		.middle {
		      display: flex;
		      margin-bottom: 20px;
		      margin-top: 10px;
		    }
		
		    .middle {
		      .color {
		        width: 5px;
		        height: auto;
		        background-color: #21bca6;
		      }
		
		      .text {
		        flex: 1;
		        padding-left: 5px;
		        font-size: 20px;
		      }
		    }
		
		    .list {
		      width: 100vw;
		      display: flex;
		      justify-content: center;
		
		      .list_branch {
		        display: flex;
		        width: 90vw;
		        height: 100px;
		        border-bottom: 1px solid #e8e9e7;
		        justify-content: center;
		        align-items: center;
		
		        img {
		          height: 80px;
				  width:120px;
		        }
		
		        .content {
		          height: 80px;
		          flex: 1;
		          div {
		            padding-left: 10px;
					margin-bottom: 2px;
		          }
		
		          div:nth-child(1) {
					font-weight: 600;
		          }
		
		          div:nth-child(2) {
					font-size: 10px;
		          }
		
		          div:nth-child(3) {
					display: inline-block;
		            span:nth-child(1) {
		              background-color: #befaf5;
		              color: #44ac9c;
					  font-size: 10px;
					  padding: 2px 5px;
		              border-radius: 2px;
		            }
		
		            span:nth-child(2) {
		              background-color: #fbe2bf;
		              color: #cfa06f;
					  font-size: 10px;
					  padding: 2px 5px;
		              margin-left: 10px;
		              border-radius: 2px;
		            }
		          }
		
		          div:nth-child(4) {
		            span:nth-child(1) {
		              color: red;
		            }
		
		            span:nth-child(2) {
		              margin-left: 10px;
		              font-size: 10px;
					  color: #767676;
		            }
		          }
		        }
		      }
		    }
	}
	.rent {
	   display: grid;
	   grid-template-rows: auto auto;
	   margin-bottom: 60px;
	  .title {
	    display: flex;
	    justify-content: left;
	    align-items: center;
		margin: 10px 0px;
	    span {
	      font-size: 20px;
	      border-left: 4px solid #1cc2af;
	    }
	  }
	  .content {
	    display: grid;
	    grid-template-columns: 1fr 1fr;
	    grid-template-rows: 1fr 1fr;
		margin:10px;
	    .content_1,
	    .content_2,
	    .content_3,
	    .content_4 {
		box-shadow: 0px 0px 1px 2px #fafafa;
		padding:10px;
	      display: flex;
	      flex-direction: column;
		  
	      img {
	        width: 100%;
	        object-fit: cover;
	        flex: 1;
	      }
	
	      div {
	        display: flex;
	        flex-direction: column;
	        flex: 1;
	        div {
			  &:nth-child(1){
			  	font-weight: 600;
			  }
			  &:nth-child(2){
			  	font-size: 10px;
			  	line-height: 25px;
			  }
			  &:nth-child(3){
				  display:flex;
				  flex-direction:row;
				  font-size:10px;
			  	span:nth-child(1) {
			  	  background-color: #befaf5;
			  	  color: #44ac9c;
				  padding: 2px 5px;
				  border-radius: 2px;
				  text-align:center;
			  	}
			  			
			  	span:nth-child(2) {
			  	  background-color: #fbe2bf;
			  	  color: #cfa06f;
			  	  margin-left: 10px;
				  padding: 2px 5px;
				  border-radius: 2px;
				  text-align:center;
			  	}
			  }
			  &:nth-child(4){
			  	color: red;
				font-weight: 600;
			  }
	        }
	      }
	    }
	  }
	}
} 
</style> 