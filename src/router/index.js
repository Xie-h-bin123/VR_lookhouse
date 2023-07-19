import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import Chat from '../views/Chat.vue'
import Wiki from '../views/Wiki.vue'
import Me from '../views/Me.vue'
import SecondHand from '../views/Second_hand.vue'
import Chat_index from '../views/Chat_index.vue'
import Detail from '../views/Detail.vue'
import Video from '../views/Video.vue'
import Recommend from '../views/Recommend.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import OtherVR from '../views/OtherVR.vue'

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/wiki',
    name: 'wiki',
    component: Wiki
  },
  {
    path: '/me',
    name: 'me',
    component: Me
  },	  
  {
	path: '/second_hand',
	name: 'second_hand',
	component: SecondHand
  },
  {
  	path: '/detail',
  	name: 'detail',
  	component: Detail
  },
  {
  	path: '/chat_index',
  	name: 'chat_index',
  	component: Chat_index
  },
  {
  	path: '/video',
  	name: 'video',
  	component: Video
  },
  {
  	path: '/recommend',
  	name: 'recommend',
  	component: Recommend
  },
  {
  	path: '/register',
  	name: 'register',
  	component: Register
  },
  {
	path: '/login',
	name: 'login',
	component: Login
  },
  {
  	path: '/otherVR',
  	name: 'otherVR',
  	component: OtherVR
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
