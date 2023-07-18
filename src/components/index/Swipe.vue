<!-- 视图层 -->
<template>
	<div class="swipe">
		<van-swipe :autoplay="3000" lazy-render indicator-color="#fff">
		  <van-swipe-item v-for="image in images" :key="image">
		    <img :src="image" />
		  </van-swipe-item>
		</van-swipe>
	</div>


</template>

<!-- 逻辑层 -->
<script setup>
const images = [
      'http://47.113.189.122/NAS/img/bg1.jpg',
      'http://47.113.189.122/NAS/img/bg2.jpg',
	  'http://47.113.189.122/NAS/img/bg3.jpg'
    ];
</script>


<!-- 样式层 -->
<style lang="less" scoped>
  .swipe{
	  width: 100vw;
	  height: 40vh;
	  left: 0;
	  right: 0;
	  position: absolute;
	  top: 0px;
	  z-index: -1;
	  .van-swipe{
		  width: 100vw;
		  height: 40vh;
		  .van-swipe-item{
			  img{
				height: 40vh;
				width: 100vw;
				background-size: cover;
				background-position: center;
			  }
		  }
	  }
  }
</style> 