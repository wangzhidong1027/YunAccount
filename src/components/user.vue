<template>
  <div id="user">
    <el-form size="small">
<!---------------------基本信息star--------------------->
      <h4>基本信息</h4>
      <el-form-item label="商户平台ID：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.merchNo"></el-input></el-col>
      </el-form-item>
      <el-form-item label="企业名称：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.name"></el-input></el-col>
      </el-form-item>
      <el-form-item label="商户别名：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.merch_name"></el-input></el-col>
      </el-form-item>
      <el-form-item label="营业执照注册号：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.certificate"></el-input></el-col>
      </el-form-item>
      <el-form-item label="营业执照影印件：" label-width="180px" required>
        <el-col :span="8"><div class="register-img"><img :src="info.bslicense" alt=""></div></el-col>
      </el-form-item>
       <el-form-item label="纳税人类型：" label-width="180px" required>
          <el-radio v-model="info.taxpayertype" label="1" :disabled="true">一般纳税人</el-radio>
          <el-radio v-model="info.taxpayertype" label="2" :disabled="true">小规模纳税人</el-radio>
       </el-form-item>
      <el-form-item label="纳税人识别号：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.tin"></el-input></el-col>
      </el-form-item>
       <el-form-item label="单位注册地址及电话：" label-width="180px" required>
        <el-col :span="8">
          <el-input
            type="textarea"
            rows="4"
            :placeholder="info.address "
            :disabled="true">
          </el-input>
        </el-col>
      </el-form-item>
<!---------------------基本信息end--------------------->
<!---------------------联系信息star--------------------->
      <h4>联系信息</h4>
      <el-form-item label="联系人姓名：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true":placeholder="info.linkname"></el-input></el-col>
      </el-form-item>

      <el-form-item label="联系人手机号：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.linkphone"></el-input></el-col>
      </el-form-item>

       <el-form-item label="联系人邮箱：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.linkemail"></el-input></el-col>
      </el-form-item>

       <el-form-item label="联系地址：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.province_cn + info.city_cn + info.linkaddress"></el-input></el-col>
      </el-form-item>
      <!---------------------对公账户star--------------------->
      <h4>对公账户</h4>

       <el-form-item label="开户名称：" label-width="180px" required>
        <el-col :span="8"> <el-input :disabled="true" :placeholder="info.bankname"></el-input></el-col>
      </el-form-item>
       <el-form-item label="对公账户：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.bankno"></el-input></el-col>
      </el-form-item>
       <el-form-item label="开户银行：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.banksubname"></el-input></el-col>
      </el-form-item>
      <!---------------------对公账户end--------------------->
      <!---------------------客户支持star--------------------->
      <h4>客户支持</h4>
       <el-form-item label="客户经理：" label-width="180px" required>
         <el-col :span="8"> <el-input :disabled="true"  :placeholder="info.serviclinkuser"></el-input></el-col>
      </el-form-item>
       <el-form-item label="手机号：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.phone"></el-input></el-col>
      </el-form-item>

       <el-form-item label="邮箱：" label-width="180px" required>
        <el-col :span="8"><el-input :disabled="true" :placeholder="info.email"></el-input></el-col>
      </el-form-item>
      <!---------------------客户支持end--------------------->
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'User',
    data() {
      return {
      }
    },
    computed: {
     info: function () {
       return this.$store.state.User.user
     },
    },
    created() {
      // this.$axios.post(
      //   this.$GLOBAL.getMerchInfoApi,
      //   this.$qs.stringify({})
      // ).then(res => {
      //   var result = JSON.parse(this.$base64.decode(res.data))
      //   if(result.code == 10000){
      //       this.info=result.data
      //   }
      // }).catch(error => {
      //   console.log(error)
      // })
    },
    mounted() {
      var menu =[
        {title: '商户中心',
        path: '',
        icon: '',
        child: [{
            title: '商户信息',
            path: '',
            icon: 'iconfont icon-shanghu',
          }]
        }
      ]
      this.$store.commit('change',menu)
    },
    destroyed() {
      var menu =[
        { title: '需求管理',
          path: '',
          icon: '',
          child: [{
              title: '我的需求',
              path: '',
              icon: 'iconfont icon-lianjie',
            }]
        }
      ]
      this.$store.commit('change',menu)
    }
  }
</script>

<style lang="scss">
#user{
  background: #fff;
  width: 100%;
  padding: 0 18px;
  border-radius: 2px;
  padding-bottom: 90px;
  h4{
    font-size: 14px;
    color: #333333;
    line-height: 40px;
    border-bottom: 1px solid #dddddd;
    margin-bottom:18px;
  }
 .register-img{
   width: 103px;
   height: 104px;
   box-sizing: border-box;
   background: #f9f9f9;
   img{
     width: 100%;
     display: block;
     width: 100%;
     margin: 0 auto;
   }
 }
}
</style>
