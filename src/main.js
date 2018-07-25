// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store';

import Axios from 'axios'
import qs from 'qs'
import { Base64 } from 'js-base64';
import GLOBAL from './components/global/global.vue'
import  ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

Vue.use(ElementUI);

const HTTP_request = Axios.create({
    timeout:20000,  //request timeout
})
 // HTTP_request.defaults.withCredentials = true

//添加请求拦截器
HTTP_request.interceptors.request.use(
  config => {
  //请求发送前
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.headers['token'] = sessionStorage.getItem('token')
  //   if(config.method=='post') {
  //     config.data = {
  //       ...config.data,
  //     }
  //   }
  //     if(token){
  //       if(config.data){
  //         config.data=config.data+'&token='+token
  //       }else{
  //         config.data = 'token='+token
  //       }
  //     }
        // config.data =qs.stringify(config.data)
        // config.headers= {
        //   'Content-Type' : 'application/x-www-form-urlencoded',
        // }

        // if(token){
        //   config.data = qs.stringify(config.data)
        //
        // }
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
   return response;
  },
  error => {
    if(error.response){
      sessionStorage.clear();
      router.replace({
        path:'./login'
      });
    }
     return Promise.reject(error.response.data)
  })

Vue.prototype.$axios = HTTP_request;
Vue.prototype.$qs = qs
Vue.prototype.$base64 = Base64
Vue.prototype.$GLOBAL = GLOBAL

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store ,
  components: { App },
  template: '<App/>'
})
