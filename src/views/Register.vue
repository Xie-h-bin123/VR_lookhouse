<!-- 视图层 -->
<template>
    <div class="register">
		<van-nav-bar
		  left-text="返回"
		  left-arrow
		  @click-left="onClickLeft"
		  :style="{ backgroundColor: 'transparent', }"
		/>
        <div class="menu vw80">
           <div @click="login">登入</div>
           <div class="on">注册</div>
        </div>
		<form @submit.prevent="register">
        <div class="form vw80">
            <div class="tel">
                <input v-model="Name" type="text" placeholder="请输入手机号或邮箱">
                <span class="iconfont icon-icon_xinjian"></span>
            </div>
            <div class="pwd">
                <input v-model="Password" type="password" placeholder="请输入密码">
                <span class="iconfont icon-jiesuo"></span>
            </div>
            <div class="pwds">
                <input type="password" placeholder="请再次输入密码" >
                <span class="iconfont icon-jiesuo"></span>
            </div>
            <button type="submit">注册</button>

        </div>
		</form>
        <div class="others vw80">
            <span>————</span>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-qq"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-weibo"></use>
            </svg>
            <span>————</span>
        </div>
    </div>
</template>

<!-- 逻辑层 -->
<script setup>
	import { reactive, ref } from 'vue';
	import {useRouter} from 'vue-router';
	import axios from 'axios';
	const router= useRouter();
	const onClickLeft = () => {router.push({path:'/me'})};
	const login = () => {router.push({path:'/login'})}
	
	const Name = ref('');
	const Password = ref('');
	const register = () => {
	   const data = {
	      name: Name.value,
	      password: Password.value
	    };
	    axios.post('http://localhost:8080/user/register', data, {
	      headers: {
	        'Content-Type': 'application/json'
	      }
	    }).then(response => {
	    if (response.data == "success") {
	      alert('注册成功');
	      router.push('/login'); // 注册成功后跳转到/login页面
	    } else {
	      alert('注册失败：用户名已存在');
	    }
	  }).catch(error => {
	    alert('注册失败：' + error.message);
	  });
	};
</script>


<!-- 样式层 -->
<style lang="less" scoped>
	:deep(.van-nav-bar){
		.van-icon{
			color: #000;
			font-size: 20px;
		}
		.van-nav-bar__text{
			color: #000;
			font-size: 15px;
		}
	}
	
.iconfont{
	color: #000;
}
.register{
    background-image: url("/public/img/bg.png");
    background-repeat: no-repeat;
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    color: #fff;
}
.vw80{
    width: 80vw;
    margin: 0 auto;
}
.register .menu {
    display: flex;
    justify-content: center;
    gap: 10px;
    padding-top: 30%;
    color: #000;
}
.register .menu div{
    width: 23vw;
    height: 10vw;
    line-height: 10vw;
    text-align: center;
}
.register .menu .on{
    background-color: #ae92c0;
    border-radius: 5vw;
}
.register .form{
    margin-top: 14vw;
}
.register .form>div{
    margin-bottom: 20px;
}

.pwd,
.pwds,
.tel{
    display: flex;
    border-bottom: 1px solid #fff;
    height: 10vw;
    line-height: 10vw;

}
.register .form>div input{
    flex: 1;
    /*透明*/
    background-color: transparent;
    /*去边框*/
    border: none;
}
.register .form>div input{
    color: #000;
    padding-left: 10vw;
}
/*input::-webkit-input-placeholder {
  color:black;
}*/
.register .form button{
    margin:16vw auto 10vw;
    display: block;
    width:60vw;
    height: 8vw;
    line-height: 8vw;
    border-radius: 4vw;
    border:none;
    background-color: #ae92c0;
    color: #fff;
}
.register .others{
    display:flex;
    align-items: center;
	justify-content: center;
}
.register .others .icon{
    width: 10vw;
    height: 10vw;
    margin: 0 10px;
    fill: black;
}
</style> 