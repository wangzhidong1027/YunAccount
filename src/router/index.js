import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import aboutme from '@/components/aboutme'

import Login from '@/components/login'
import PostDemand from '@/components/post-demand'
import DemandRecord from '@/components/demand-record'
Vue.use(Router)

const router = new Router({
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
router.beforeEach((to, from, next) => {
  // console.log('要转到'+to.name)
  //  console.log('拦截before')
  let token = sessionStorage.getItem('token');
  var title = to.meta.title || '欣享科技'
  window.document.title = title
  if (!token && to.name !== 'login' && to.name !== 'error-500' && to.name !== 'error-404') { // 如果不是登录，并且未登录，就跳转到登录页面
    next({
      name: 'login'
    });
    window.scrollTo(0, 0);
  } else {
    next()
  }
});

// Router.afterEach((to) => {
//   // console.log('拦截after')
//   Util.openNewPage(router.app, to.name, to.params, to.query);
//   iView.LoadingBar.finish();
//   // console.log('进度条结束')
//   window.scrollTo(0, 0);
// });
export default router
