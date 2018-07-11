<template>
  <div id="post-demand">
    <p class="input-title">填写金额</p>
    <div class="money-box">
      <div class="input-box">
        <el-input v-model="money" placeholder="请输入金额" size="small ">
          <b class="money_zh" slot="suffix">元</b>
        </el-input>
      </div>
      <div class="other-money clear">
          <div class="charge">服务费：<b>7500元</b></div>
          <div class="dealmoney">打款金额：<b>107500元</b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostDemand',
  data() {
    return {
      money: ''
    }
  }
}
</script>

<style lang="scss">
#post-demand{
  box-sizing: border-box;
  background: #fff;
  border-radius: 2px;
  padding: 38px 40px;
  .input-title{
    color: #333333;
    font-size: 12px;
    line-height: 30px;
  }
  .money-box{
    .input-box{
      display: inline-block;
      width: 350px;
      height: 36px;
      .el-input__inner{
        background: #f9f9f9 ;
        height:32px;
        border-radius: 0;
      }
       .money_zh{
        line-height: 32px;
      }
    }
    .other-money{
      display: inline-block;
      font-size: 14px;
      color: #999999;
      .charge{
        float: left;
        padding: 0 29px;
        b{
          font-weight: normal;
          color: #333333;
        }
      }
      .dealmoney{
        float: left;
        b{
          font-weight: normal;
          color: #e11e1e;
        }
      }
    }
  }
}
</style>
