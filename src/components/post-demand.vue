<template>
  <!--<div id="post-demand" v-loading="show" target="#post-demand"-->
       <!--element-loading-text="加载中"-->
    <!--element-loading-spinner="el-icon-loading"-->
    <!--element-loading-background="rgba(255, 255, 255, 1)">-->
  <div id="post-demand">
    <el-form ref="submitfrom" :model="submitfrom" :rules="rules">
      <p class="input-title">填写金额</p>
      <div class="money-box">
        <div class="input-box">
          <el-form-item prop="money">
            <el-input v-model="submitfrom.money" placeholder="请输入金额" size="small "  maxlength="13">
              <b class="money_zh" slot="suffix">元</b>
            </el-input>
          </el-form-item>
        </div>
        <div class="other-money clear">
          <div class="charge">服务费：<b>{{feemoney}}元</b></div>
          <div class="dealmoney">打款金额：<b>{{realmoney}}元</b></div>
        </div>
      </div>
      <p class="input-title">选择服务内容</p>
      <el-form-item  prop="type">
      <div class="from-radio">
        <div class="radiobox" v-for='typeitem in typedata' :key="typeitem.catid">
          <div class="from-checkbox clear" :class="typeitem.catid == submitfrom.alltype? 'isnow':''">
            <div class="radio-title">{{typeitem.cat}}:</div>
            <div class="checkbox-item">
              <el-form-item prop="type">
                <el-checkbox-group v-model="submitfrom.type" @change="changeType(typeitem.catid)">
                  <el-checkbox v-for="select in typeitem.childList " :label="select.catpath" name="type" :key="select.catpath">{{select.cat}}</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </div>
          </div>
          <div class="line-box"><p class="line"></p></div>
        </div>
      </div>
      </el-form-item>
       <p class="input-title">期望完成时间</p>
      <el-form-item  prop="data">
        <div class="data">
           <el-date-picker v-model="submitfrom.data" type="date" placeholder="选择日期" value-format="yyyy-MM-dd HH:mm:ss" :picker-options="pickerOptions1"></el-date-picker>
        </div>
      </el-form-item>
    <div class="solid-line"></div>
    <div class="remittance">
       <p class="input-title">汇款信息</p>
      <div class="remittance-info">
        <div class="info-item">
          <span>预期付款账户：</span><b>欣享科技服务有限公司 </b>
        </div>
        <div class="info-item">
          <span>账户名称：</span><b>欣享科技服务有限公司</b>
        </div>
        <div class="info-item">
          <span>开户银行：</span><b>中国工商银行西宁城北支行</b>
        </div>
        <div class="info-item">
          <span>银行账户：</span><b>2806046819100022610</b>
        </div>
      </div>
    </div>
    <div class="solid-line"></div>
    <div class="hint">
       <p class="input-title">温馨提示：<span>请线下汇款，汇款时间在工作日9:00~16:30之间预计2小时内到账，其它时间汇款预计下个工作日内到账。</span></p>
    </div>
  </el-form>
    <div class="btn-box">
      <button @click="onSubmit('submitfrom')">提交</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'PostDemand',
    data() {
      return {
        submitfrom : {
          money: '',
          alltype: '',
          data: '',
          type: []
        },
        show: true,
         pickerOptions1: {
          disabledDate(time) {
            return (time.getTime() - Date.now()) < -3600000 * 24
          },
        },
        rules: {
          money: [
            { required: true, message: '需求金额不能为空', trigger: 'change' },
            { validator : (rule,value,callback) => {
              if(/^\d+(\.\d{0,2})?$/.test(value)){
                callback()
              }else{
                callback(new Error(""))
              }}, message: '需求金额为格式不正确，例如123.45', trigger: 'change'}
          ],
          // trye: [
          //   { type: 'array', required: true, message: '请至少选择一个服务内容', trigger: 'change' }
          // ],
          // data: [
          //   { required: true, message: '请选择期望完成时间', trigger: 'blur' }
          // ]
        },
        // typedata: []
      }
    },
    computed: {
      user: function() {
        return this.$store.state.User.user
      },
      feemoney: function () {
        if(/^\d+(\.\d{0,2})?$/.test(this.submitfrom.money)){
            return Math.ceil((this.submitfrom.money*100) * (this.user.rate * 1000)) / 100
        }else{
           return 0
        }
      },
      realmoney: function () {
        if(/^\d+(\.\d{0,2})?$/.test(this.submitfrom.money)){
           return (this.submitfrom.money * 100 + this.feemoney * 100) / 100
        }else{
           return 0
        }
      },
      typedata: function () {
        return this.$store.state.AllType.allType
      },
    },
    methods: {
      /**
       * 提交需求
       */
      onSubmit() {
        if( !this.submitfrom.money || this.submitfrom.money ==0){
          this.$message({
              type: 'info',
              message: '请填写需求金额'
          });
          return
        }
        if( !this.submitfrom.alltype){
          this.$message({
              type: 'info',
              message: '请选择服务内容'
          });
          return
        }
         if( !this.submitfrom.data){
          this.$message({
              type: 'info',
              message: '请选择期望完成时间'
          });
          return
        }
        const loading = this.$loading({
          lock: true,
          text: '提交中',
          spinner: 'el-icon-loading',
          background: 'rgba(255, 255, 255, 0)'
        });
        this.$axios.post(
          this.$GLOBAL.submitOrderAPI,
          this.$qs.stringify({
            needid: this.submitfrom.alltype,
            needcatpath: this.submitfrom.type.toString(),
            payway: '1',
            money: this.submitfrom.money,
            realmoney: this.realmoney,
            feemoney: this.feemoney,
            pacttime: this.submitfrom.data,
            agentNo:  this.$GLOBAL.agent.agentNo
          })
        ).then(res => {
          var result = JSON.parse(this.$base64.decode(res.data))
          if(result.code == 10000){
            loading.close();
            this.$alert('<div><p class="el-icon-success" style="font-size: 70px; color:#67c23a;line-height: 100px"></p><p>运营人员将尽快和你联系</p></div>', '提交成功', {
              confirmButtonText: '我知道了',
              center: true,
              dangerouslyUseHTMLString: true,
              callback: action => {
                this.$router.push({
                   path: '/main/demandrecord'
                })
              }
            });
          }else{
             loading.close();
             this.$message.error(result.info);
          }
        }).catch(error => {
           loading.close();
           console.log(error)
        })
      },
      changeType(type) {
        // 取消反选操作
        if(!this.submitfrom.type.length) {
          this.submitfrom.alltype = ''
          return
        }
        if (this.submitfrom.alltype !== type || !this.submitfrom.alltype){
          this.submitfrom.alltype = type
          // this.submitfrom.type.pop()
          // console.log(this.submitfrom.type[this.submitfrom.type.length-1])
         this.submitfrom.type = this.submitfrom.type.slice(this.submitfrom.type.length-1)
        }
      }
    },
    created() {

      this.$store.commit('isshow',true)
      // this.$axios.post(
      //  this.$GLOBAL.getAllTypeApi,
      //  this.$qs.stringify({
      //     catId: '37'
      //   })
      // ).then(res => {
      //   var result = JSON.parse(this.$base64.decode(res.data))
      //   if(result.code == 10000) {
      //     this.typedata = result.data[0].childList
      //     this.show = false
      //   }
      // }).catch(error => {
      //     console.log(error)
      // })
    },
   destroyed() {
     this.$store.commit('isshow',false)
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
        padding-bottom: 15px;
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
      border: 1px solid #ffc44c;
      background: #fff7e5;
    }
    .radiobox:last-of-type .line-box{
      display: none;
    }
  }
</style>
