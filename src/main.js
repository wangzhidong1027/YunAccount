// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Axios from 'axios'
import qs from 'qs'
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);

const HTTP_request = Axios.create({
    timeout:2000  //request timeout
})
//添加请求拦截器
HTTP_request.interceptors.response.use(function(config){
  //请求发送前
    config.headers['token']=sessionStorage.getItem('token')
     return config
})
//HTTP request响应拦截器
HTTP_request.interceptors.response.use(
  response=>{
    if(response){
      switch (response.status){
        case 401 :  sessionStorage.clear();
                    router.replace({
                      path:'./login',
                      // query:{rediect:router.currentRoute.fullPath}//登录成功后跳入浏览器当前页面
                    })
      }
    }
    return response
  },
  error => {
    if(error.response){
      sessionStorage.clear();
      router.replace({
        path:'./505'
      });
    }
    return promise.reject(error.response.data)
  })

Vue.prototype.$axios = HTTP_request;
Vue.prototype.$qs = qs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
