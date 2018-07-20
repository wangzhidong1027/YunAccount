<template>
  <div class="sidebar" >
    <div class="all" v-for="item in menu">
       <div class="menu-one">{{item.title}}</div>
        <ul>
          <li v-for="childmenu in item.child"><i class=" el-icon--left" :class="childmenu.icon"></i>{{childmenu.title}}</li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Side-Menu',
  computed: {
    menu() {
       return this.$store.state.menu.SideMenu
    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
.sidebar{
  width: 100%;
  text-align: left;
  .all{
    width: 100%;
  }
  .menu-one{
    width: 100%;
    box-sizing: border-box;
    color: #999999;
    font-size: 14px;
    line-height: 32px;
    padding: 0 15px;
  }
  ul{
    width: 100%;
    li{
      box-sizing: border-box;
      width: 100%;
      color: #fff;
      font-size: 14px;
      line-height: 32px;
      padding: 0 15px;
      background: #418bfa;
      border-radius: 2px;

    }
  }
}
</style>
