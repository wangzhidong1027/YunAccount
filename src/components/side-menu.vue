<template>
  <div class="sidebar" >
    <div class="menu-one">商户管理</div>
    <ul>
      <li><i class="el-icon-setting el-icon--left"></i>商户信息</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Side-Menu',
  methods: {

  }
}
</script>

<style scoped lang="scss">
.sidebar{
  width: 100%;
  text-align: left;
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
