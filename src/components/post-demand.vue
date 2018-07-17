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
        <div class="radiobox" v-for='typeitem in typedata'>
          <div class="from-checkbox clear" :class=" typeitem.id == submitfrom.alltype? 'isnow':''">
            <div class="radio-title">{{typeitem.name}}:</div>
            <div class="checkbox-item">
              <el-form-item prop="type">
                <el-checkbox-group v-model="submitfrom.type" @change="changeType(typeitem.id)">
                  <el-checkbox v-for="select in typeitem.data " :label="select.cid" name="type">{{select.name}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
          </div>
          <div class="line-box"><p class="line"></p></div>
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
        submitfrom : {
          alltype: '',
          type: []
        },
        money: '',
        
        data: '',
        typedata: [
          {id: 1 ,name: '大声道', data :[
            {cid:11,name:'地推活动'},
            {cid:12,name:'美食/餐厅线上活动1'},
            {cid:13,name:'线下主题活动2'},
            {cid:14,name:'的手法第三方'},
            {cid:15,name:'噢噢噢噢'}
          ]},
          {id: 2 ,name: '请问请问', data :[
            {cid:21,name:'地推活动2'},
            {cid:22,name:'美食/餐厅线上活动12'},
            {cid:23,name:'线下主题活动22'},
            {cid:24,name:'的手法第三方2'},
            {cid:25,name:'噢噢噢噢2'}
          ]},
          {id: 3 ,name: '的撒打算', data :[
            {cid:31,name:'地推活动3'},
            {cid:32,name:'美食/餐厅线上活动13'},
            {cid:33,name:'线下主题活动23'},
            {cid:34,name:'的手法第三方3'},
            {cid:35,name:'噢噢噢噢3'}
          ]},
        ]
      }
    },
    methods: {
      onSubmit() {
        return
      },
      changeType(type) {
        if (this.submitfrom.alltype !== type || !this.submitfrom.alltype){
          this.submitfrom.alltype = type
          // this.submitfrom.type.pop()
          // console.log(this.submitfrom.type[this.submitfrom.type.length-1])
         this.submitfrom.type = this.submitfrom.type.slice(this.submitfrom.type.length-1) 
          console.log(this.submitfrom.type)

        }
      }
    },
    created() {
      // this.$axios.post(
      //   'http://10.10.18.38:8080/merType/tree',
      //   this.$qs.stringify({})
      // ).then(res => {
      //   console.log(res)
      // }).catch(error => {
      //     console.log(error)
      // })
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
    .isnow{
      border: 1px solid #ffff00;
    }
    .radiobox:last-of-type .line-box{
      display: none;
    }
  }
</style>
