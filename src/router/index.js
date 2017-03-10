import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import newPost from '@/components/new_post'
import emotion from '@/components/emotion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/newPost',
      name: 'newPofgst',
      component: newPost
    },
    {
      path: '/emotion',
      name: 'emotion',
      component: emotion
    }
  ]
})
