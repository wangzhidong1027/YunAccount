<template>
  <div id="post-demand">
    <el-form >
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
      <p class="input-title">选择服务内容</p>
      <div class="from-radio">
        <div class="from-checkbox clear">
          <div class="radio-title">商业销售:</div>
          <div class="checkbox-item">
            <el-form-item prop="type">
              <el-checkbox-group>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
        <div class="line-box"><p class="line"></p></div>
        <div class="from-checkbox clear">
          <div class="radio-title">商业销售:</div>
          <div class="checkbox-item">
            <el-form-item prop="type">
              <el-checkbox-group>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
        <div class="line-box"><p class="line"></p></div>
        <div class="from-checkbox clear">
          <div class="radio-title">商业销售:</div>
          <div class="checkbox-item">
            <el-form-item prop="type">
              <el-checkbox-group>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>
        </div>
      </div>
       <p class="input-title">期望完成时间</p>
      <div class="data">
         <el-date-picker v-model="data" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"></el-date-picker>
      </div>
    <div class="solid-line"></div>
    <div class="remittance">
       <p class="input-title">汇款信息</p>
      <div class="remittance-info">
        <div class="info-item">
          <span>预期付款账户：</span><b>XXXXX公司</b>
        </div>
        <div class="info-item">
          <span>账户名称：</span><b>XXXXX公司</b>
        </div>
        <div class="info-item">
          <span>开户银行：</span><b>XXXXX公司</b>
        </div>
        <div class="info-item">
          <span>银行账户：</span><b>54545454544112</b>
        </div>
      </div>
    </div>
    <div class="solid-line"></div>
    <div class="hint">
       <p class="input-title">温馨提示：<span>请线下汇款，汇款时间在工作日9:00~16:30之间预计2小时内到账，其它时间汇款预计下个工作日内到账，请注意查收到</span></p>
    </div>
    <div class="btn-box">
      <button @click="onSubmit()">提交</button>
    </div>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'PostDemand',
    data() {
      return {
        money: '',
        data: ''
      }
    },
    methods: {
      onSubmit() {
        return
      }
    },
    created() {
      this.$axios.post(
        'http://10.10.18.38:8080/merType/tree',
        this.$qs.stringify({})
      ).then(res => {
        console.log(res)
      }).catch(error => {
          console.log(error)
      })
    }
  }
</script>

<style lang="scss">
  #post-demand {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border-radius: 2px;
    padding: 38px 40px;
    .input-title {
      color: #333333;
      font-size: 12px;
      line-height: 40px;
      font-weight:700;
      span{
        font-size: 14px;
        color: #999999;
        font-weight: normal;
      }
    }
    .money-box {
      .input-box {
        display: inline-block;
        width: 350px;
        height: 36px;
        .el-input__inner {
          background: #f9f9f9;
          height: 32px;
        }
        .money_zh {
          line-height: 32px;
        }
      }
      .other-money {
        display: inline-block;
        font-size: 14px;
        color: #999999;
        .charge {
          float: left;
          padding: 0 29px;
          b {
            font-weight: normal;
            color: #333333;
          }
        }
        .dealmoney {
          float: left;
          b {
            font-weight: normal;
            color: #e11e1e;
          }
        }
      }
    }
    .from-radio {
      width: 100%;
      border: 1px solid #d9d9d9;
      box-sizing: border-box;
      .line-box{
        width: 100%;
        padding: 0 18px;
        box-sizing: border-box;
      }
      .line{
        width: 100%;
        border-bottom: 1px dashed #d9d9d9;
      }
      .from-checkbox {
        padding: 0 18px;
        width: 100%;
        box-sizing: border-box;
        .radio-title {
          width: 230px;
          font-size: 12px;
          color: #333333;
          font-weight: bold;
          float: left;
          line-height: 45px;
          height: 100%;
        }
        .checkbox-item {
          margin-left: 230px;
          padding: 8px 8px 8px 0;
          .el-form-item {
            margin-bottom: 0;
          }
          .el-checkbox {
            margin-left: 0;
            width: 190px;
          }
          .el-form-item__content {
            color: #666666;
            line-height: 24px;
          }
          .el-checkbox__label {
            font-size: 12px;
            color: #666666;
          }
          .el-form-item::after, .el-form-item::before {
            display: none;
          }
          .el-form-item__content::after, .el-form-item__content::before {
            display: none;
          }
        }
      }
    }
    .data{
      .el-date-editor{
        width: 350px;
      }
      .el-input__inner{
        background: #f9f9f9;
        font-size: 12px;
        height: 32px;
      }
      .el-input__icon{
        line-height: 32px;
      }
    }
    .solid-line{
      border-top: 1px solid #d9d9d9;
      margin-top: 20px;
      margin-bottom: 10px;
    }
    .remittance-info{
      padding-left:70px;
      font-size: 14px;
      .info-item{
        padding-bottom: 8px;
        span{
          display: inline-block;
          width: 117px;
          color: #999999;
        }
        b{
          font-weight: normal;
          color: #333333;
        }
      }
    }
    .btn-box{
      padding-top: 40px;
      button{
        width: 110px;
        color: #fff;
        background: #418bfa;
        line-height: 32px;
        font-size: 14px;
        font-weight: 300;
        border: none;
        border-radius: 2px;
      }
    }
  }
</style>
