import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import aboutme from '@/components/aboutme'

import Login from '@/components/login'
import PostDemand from '@/components/post-demand'
import DemandRecord from '@/components/demand-record'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      children:[
        {
          path: '/main/postdemand',
          name: 'PostDemand',
          component: PostDemand
        },
        {
          path: '/main/demandrecord',
          name: 'DemandRecord',
          component: DemandRecord
        }
      ]
    },
     {
      path: '/login',
      name: 'Login',
      component: Login
     },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: aboutme
    }
  ]
})
