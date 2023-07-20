import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant';
import * as THREE from 'three'
import VueLazyload from 'vue-lazyload'
//css
import './assets/css/base.css'
import './assets/font/iconfont.css'
import 'vant/lib/index.css'
//js
import './assets/font/iconfont.js'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'


createApp(App).use(VueLazyload).use(Quasar, quasarUserOptions).use(router).use(Vant).mount('#app')
