<!-- 视图层 -->
<template>
	<div class="fix1">
		<div class="scroll-container">
			<div class="scroll-item" style="border-radius: 50px;">
				常用语
			</div>
			<div class="scroll-item" style="border-radius: 50px;">
				购房意向
			</div>
			<div class="scroll-item" style="border-radius: 50px;">
				电话咨询
			</div>
			<div class="scroll-item" style="border-radius: 50px;">
				购房百科
			</div>
			<div class="scroll-item" style="border-radius: 50px;">
				视频话谈
			</div>
		</div>
		<van-nav-bar>
			<template #left>
				<span class="iconfont icon-yuyin" style="font-size: 30px;"></span>
			</template>
			<template #title>
				<!-- <div>
					<input style="    border: none;width: 220px;height: 28px;margin-bottom: 5px;" />
				</div> -->
				<div>
				  <input style="border: none;width: 220px;height: 28px;margin-bottom: 5px;" type="text" v-model="inputText" @keyup.enter="sendMessage">
				</div>
			</template>
			<template #right>
				<span class="iconfont icon-biaoqing" style="font-size: 28px; margin-right: 5px;"></span>
				<span class="iconfont icon-jiahao" style="font-size: 30px;"></span>
			</template>
		</van-nav-bar>
	
	</div>
</template>

<!-- 逻辑层 -->
<script setup>
	import { ref, reactive } from 'vue';
	const inputText = ref('');
    const messages = reactive([]);
    const chatMessages = ref(null);

    const sendMessage = () => {
      if (inputText.value) {
        messages.push({ content: inputText.value});
        inputText.value = '';
        chatMessages.value.scrollTo(0, chatMessages.value.scrollHeight);
      }
    };
</script>


<!-- 样式层 -->
<style lang="less" scoped>
.fix1{
	position: fixed;
	bottom: 0;

	background-color: #f3f6f6;
	width: 100%;
    .scroll-container {
		width: 100%;
		height: 50px;
		overflow-x: scroll;
		white-space: nowrap;
		-webkit-overflow-scrolling: touch;
		scrollbar-width: none; /* For Firefox */
		-ms-overflow-style: none; /* For Internet Explorer and Edge */
    }
	.scroll-container::-webkit-scrollbar {
	    display: none; /* For Chrome, Safari, and Opera */
	}
    .scroll-item {
		border-bottom: 50%;
		&:nth-child(1){
			margin-left: 10px;
		}
		text-align: center;
		line-height:30px;
		display: inline-block;
		width: 90px;
		height: 30px;
		background-color: #fff;
		margin-right: 10px;
		margin-top: 13px;
    }	
	:deep(.van-nav-bar){
		background-color: #f3f6f6;
		.van-nav-bar__content{
			display: flex;
			.van-nav-bar__title{
				flex:1;
				margin: 0;
				margin-left: 58px;
				border: none;
				font-weight: 500;
			}
		}

	}
}
</style> 