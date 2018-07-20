const Menu = {
  state: {
    showBreadcrumb: false,
    SideMenu: [
      { title: '需求管理',
        path: '',
        icon: '',
        child: [{
            title: '我的需求',
            path: '',
            icon: '',
          }]
      }
    ]
  },
  mutations: {
    change(state,val) {
      state.SideMenu = val
    },
    isshow(state,val){
      state.showBreadcrumb = val
    }
  },
  actions: {}
}

export default Menu
