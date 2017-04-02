import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import newPost from '@/components/new_post'
import post from '@/components/singlePost'
import editPost from '@/components/editPost'
import emotion from '@/components/emotion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [
        {
          path: '/post/:id',
          name: 'post',
          component: post
        }
      ]
    },
    {
      path: '/post/',
      name: 'indedx',
      component: index
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
    },

    {
      path: '/editPost/:pID',
      name: 'editPost',
      component: editPost
    }
  ]
})
