import Vue from 'vue';
import Vuex from 'vuex';

import AllType from './modules/demand-type'
import Menu from './modules/menu'
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
    menu: Menu
  }
})
export default store
