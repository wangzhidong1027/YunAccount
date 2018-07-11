<template>
  <div class="myheader clear" >
    <div class="logo-box"></div>
    <div class="header-nav">
      <el-menu
        default-active="1"
        class="header-nav"
        mode="horizontal"
        background-color="#438dfa"
        text-color="#b6d0f8"
        text-aline="'center"
         @select="handleSelect"
        active-text-color="#ffffff">
        <el-menu-item index="1">需求中心</el-menu-item>
        <el-menu-item index="2" >商户中心</el-menu-item>
      </el-menu>
    </div>
    <div class="username">
      <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-location el-icon--left"></i>
        中欣安泰集团<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    handleSelect() {
      console.log()
    }
  }
}
</script>

<style lang="scss">
.myheader{
  width: 100%;
  height: 80px;
  background-color: #438dfa;
  background-image: linear-gradient( left, #418bfa, #56b1fc);
  overflow: hidden;
  .logo-box{
    float: left;
    width: 240px;
    height: 100%;
    background-image: url("../assets/images/logo.png");
    background-repeat: no-repeat;
    background-position: 30px center;
  }
  .header-nav{
    float: left;
    .el-menu--horizontal .el-menu-item{
      height: 80px;
      line-height: 79px;
      width: 120px;
    }
    .el-menu-item{
      text-align: center;
    }
  }
  .username{
    float: right;
    padding-right: 30px;
    .el-dropdown-link {
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      font-weight: 300;
      line-height: 80px;
    }
    .el-icon-arrow-down {
      font-size: 14px;
    }
  }
}


</style>
