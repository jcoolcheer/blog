import VueRouter from 'vue-router'
import Vue from 'vue'
Vue.use(VueRouter)

import newPost from './components/new_post'
const route = [
  {
    path: 'newPost',
    component: newPost
  }
]
export var router = route
