<!-- 视图层 -->
<template>
    <div class="second-hand">
        <div class="toolbar">
            <span class="iconfont icon-fanhui" @click="go_index"></span>
            <span class="top">二手房</span>
            <span class="iconfont icon-dizhi"><span>太原</span></span>
        </div>
        <div class="search">
            <div>
            <span class="iconfont icon-sousuo"></span>
            <input type="text" placeholder="请输入小区或商圈名">
            </div>
        </div>
        <div class="seach_house_page">
            <span class="iconfont icon-icon-test"></span>
            <span class="iconfont icon-ditu"></span>
            <span class="iconfont icon-fangzi"></span>
            <span class="iconfont icon-xiaoqu-xianxing"></span>
        </div>
        <div class="house">
            <div class="middle">
            <span class="color"></span>
            <span class="text">为你推荐二手房</span>
            </div>
            <div class="list" @click="vr">
                <div class="list_branch">
                <img src="/img/bg1.jpg">
                <div class="content">
                    <div >山水文园2式1厅</div>
                    <div>87.79m²</div>
                    <div><span>满五唯一</span><span>学医房</span></div>
                    <div><span>359万</span><span>建面158-177m²</span></div>
                </div>
                </div>
            </div>
            <div class="list">
                <div class="list_branch">
                <img src="/img/bg2.jpg">
                <div class="content">
                    <div >山水文园2式1厅</div>
                    <div>87.79m²</div>
                    <div><span>满五唯一</span><span>学医房</span></div>
                    <div><span>359万</span><span>建面158-177m²</span></div>
                </div>
                </div>
            </div>
            <div class="list">
                <div class="list_branch">
                <img src="/img/bg3.jpg">
                <div class="content">
                    <div >山水文园2式1厅</div>
                    <div>87.79m²</div>
                    <div><span>满五唯一</span><span>学医房</span></div>
                    <div><span>359万</span><span>建面158-177m²</span></div>
                </div>
                </div>
            </div>
            <div class="list">
                <div class="list_branch">
                <img src="/img/bg1.jpg">
                <div class="content">
                    <div >山水文园2式1厅</div>
                    <div>87.79m²</div>
                    <div><span>满五唯一</span><span>学医房</span></div>
                    <div><span>359万</span><span>建面158-177m²</span></div>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const go_index = () => {
  router.push('/')
}
const vr = () => {router.push('/detail')}
</script>


<!-- 样式层 -->
<style lang="less" scoped>

.second-hand .toolbar{
    display: flex;
    height: 6vh;
    background-color: #21bca6;
    margin: 0;
    padding: 0;
}
.second-hand .toolbar>span{
	&:nth-child(1){
		padding-left: 10px;
	}
    margin: auto;
}
.second-hand .toolbar .icon-fanhui{
    width: 50px;
}
.second-hand .toolbar .top{
    flex: 1;
    text-indent: 10px;
    text-align: center;
}
.second-hand .toolbar .icon-dizhi{
    width: 60px;
}
.second-hand .toolbar .icon-dizhi>span{
    font-size: 15px;
}
.second-hand .search{
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    height: 6vh;
    background-image: linear-gradient(to bottom, #21bca6 50%, white 50%);

}
.second-hand .search>div{
    display: flex;
    margin: auto;
    width: 80vw;
    height: 100%;
    background-color: #fff;
    box-shadow:2px 2px 2px 2px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
}
.second-hand .search>div span{
    font-size: 15px;
    
}
.second-hand .search>div input{
    border: none;
    outline: none;
    width: 130px;
}
.second-hand .seach_house_page{
    height: 10vh;
    display:flex;
}
.second-hand .seach_house_page span{
    margin: auto;
}
.second-hand .seach_house_page .icon-icon-test{
    background-color: #fe8501;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
}
.second-hand .seach_house_page .icon-fangzi{
    background-color: #00b98d;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
}
.second-hand .seach_house_page .icon-xiaoqu-xianxing{
    background-color: #0586bb;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
}
.second-hand .seach_house_page .icon-ditu{
    background-color: #ff4928;
    color: #fff;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    border-radius: 10px;
}
.second-hand .house .middle{
    display:flex;
    margin-bottom: 20px;
    margin-top: 10px;
}
.second-hand .house .middle .color{
   width: 5px;
   height: auto; 
   background-color: #21bca6;
}
.second-hand .house .middle .text{
    flex: 1;
    padding-left: 5px;
    font-size: 20px;
}
.second-hand .house .list{
    width: 100vw;
    display: flex;
    justify-content: center;
}
.second-hand .house .list .list_branch{
    display: flex;
    width: 90vw;
    height: 120px;
    border-bottom: 1px solid #e8e9e7;
    justify-content: center;
    align-items: center;
}
.second-hand .house .list .list_branch img{
    width: 40vw;
}

.second-hand .house .list .list_branch .content{
    height: 100px;
    flex: 1;
}
.second-hand .house .list .list_branch .content div{
    height: 25px;
    padding-left: 10px;
}
.second-hand .house .list .list_branch .content div:nth-child(1){
    font-size: 20px;
    line-height: 25px;
}
.second-hand .house .list .list_branch .content div:nth-child(2){
    font-size: 10px;
    line-height: 25px;
}
.second-hand .house .list .list_branch .content div:nth-child(3){
    font-size: 10px;
    line-height: 25px;
}
.second-hand .house .list .list_branch .content div:nth-child(3) span:nth-child(1){
background-color: #befaf5;
padding: 5px;
color: #44ac9c;
border-radius: 7px;
}
.second-hand .house .list .list_branch .content div:nth-child(3) span:nth-child(2){
background-color: #fbe2bf;
color:#cfa06f;
padding: 5px;
margin-left: 10px;
border-radius: 7px;
}
.second-hand .house .list .list_branch .content div:nth-child(4) span:nth-child(1){
    font-size: 20px ;
    color: red;
}
.second-hand .house .list .list_branch .content div:nth-child(4) span:nth-child(2){
    margin-left: 10px;
    font-size: 10px ;
}
</style> 