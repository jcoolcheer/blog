import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import newPost from '@/components/new_post'
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
    }
  ]
})
