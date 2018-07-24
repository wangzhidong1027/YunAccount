import Vue from 'vue'
const User = {
  state: {
    user: {}
  },
  mutations: {
    getUser (state,Obj) {
      state.user = Obj
    }
  },
  actions: {

  }
}

export default User
