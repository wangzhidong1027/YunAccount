import Vue from 'vue';
import Vuex from 'vuex';

import AllType from './modules/demand-type'
import Menu from './modules/menu'
import User from './modules/user'
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {

  },
  mutations:{

  },
  actions: {

  },
  modules: {
    AllType: AllType,
    menu: Menu,
    User: User
  }
})
export default store
