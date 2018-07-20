<template>
  <div class="main clear">
    <my-header></my-header>
    <div class="side-menu">
      <side-menu></side-menu>
    </div>
    <div class="main-content">
      <div style="height: 40px;">
         <el-breadcrumb separator-class="el-icon-arrow-right" v-if="showtbr">
          <el-breadcrumb-item>我的需求</el-breadcrumb-item>
          <el-breadcrumb-item>发布需求</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MyHeader from './header'
import SideMenu from './side-menu'
export default {
  name: 'Main',
  components: {
    MyHeader,
    SideMenu
  },
  data () {
    return {
    }
  },
  created(){
    this.$axios.post(

    )
  },
  computed: {
    showtbr() {
      return this.$store.state.menu.showBreadcrumb
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
  background: #f1f1f1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .side-menu{
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 80px;
    width: 240px;
    padding: 30px 20px 0 20px;
    height: 100%;
    background: #fff;
    float: left;
  }
  .main-content{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding-left: 270px;
    padding-right: 30px;
    padding-bottom: 80px;
    overflow: scroll;
    .el-breadcrumb{
      line-height: 40px;
      font-size: 12px;
      color: #999999;
    }
  }
}
</style>
