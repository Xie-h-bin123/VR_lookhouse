<!-- 视图层 -->
<template>
<div class="rooms">
<!-- 轮播与VR组件 -->
<VR_banner></VR_banner>
<!-- 详情页组件 -->
<!-- <Details></Details> -->
</div>
</template>
<!-- 逻辑层 -->
<script setup>
import Details from '../BannerCom.vue';
import VR_banner from '../VR_banner.vue';
</script>
<!-- 样式层 -->
<style scoped>
.rooms {
position: relative;
}
.rooms details {
position: absolute;
z-index: 999;
}
</style>