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
        <el-menu-item index="2" >企业中心</el-menu-item>
      </el-menu>
    </div>
    <div class="username">
      <el-dropdown>
      <span class="el-dropdown-link">
        <i class="el-icon-location el-icon--left"></i>
        中欣安泰集团<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="dialogVisible=true">修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="loginout()">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
    <el-dialog
      title="修改密码"
      :visible.sync="dialogVisible"
      width="30%"
      :close-on-click-modal='false'
      @close='reset'
      center>
      <el-form :model="resetpasseord" :rules="rules" ref="resetpasseord" :status-icon='true'  label-width="100px" >
        <el-form-item  prop="originPwd" label='原密码'>
          <el-input v-model="resetpasseord.originPwd" placeholder="请输入原密码" type='password'></el-input>
        </el-form-item>
         <el-form-item  prop="nwepassword" label='新密码'>
          <el-input v-model="resetpasseord.nwepassword" placeholder="请输入新密码" type='password'></el-input>
        </el-form-item>
          <el-form-item  prop="againpassword" label='确认新密码'>
          <el-input v-model="resetpasseord.againpassword" placeholder="请再次输入新密码" type='password'></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="change('resetpasseord')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  data() {
    return {
      dialogVisible: false,
      resetpasseord: {
        originPwd: '',
        nwepassword: '',
        againpassword: ''
      },
      rules: {
        originPwd: [
          {required: true, message: '密码不能为空', trigger: 'blur' },
        ],
        nwepassword: [
          {required: true, message: '新密码不能为空', trigger: 'blur' },
          {min: 6 ,max: 18, message: '新密码为6-18位', trigger: 'blur'},
          {validator: (rule,value,callback) => {
            if(/^(?![0-9]+$)(?![a-zA-Z]+$)(?![_]+$)[0-9A-Za-z_]{6,16}$/.test(value)){
              callback()
            }else{
              callback(new Error("密码为不包含特殊字符的数字与字母组合,"));
            }
          },trigger: 'blur'}
        ],
        againpassword: [
          {required: true, message: '密码不能为空', trigger: 'blur' },
          {min: 6 ,max: 18, message: '新密码为6-18位', trigger: 'blur'},
          {validator: (rule,value,callback) => {
            if(value !== this.resetpasseord.nwepassword){
              callback(new Error("密码不一致"));
            }else{
              callback()
            }
          },trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    handleSelect() {
      console.log()
    },
    change(formName) {
        this.$refs[formName].validate((valid) => {
        if (valid) {
            this.$axios.post(
              this.$GLOBAL.setPasswordApi,
              this.$qs.stringify({
                originPwd: this.$base64.encode(this.resetpasseord.originPwd),
                nowPwd: this.$base64.encode(this.resetpasseord.nwepassword),
                nowComPwd: this.$base64.encode(this.resetpasseord.againpassword)
              })
            ).then(res => {
              var result = JSON.parse(this.$base64.decode(res.data))
              if (result.code == 10000){
                this.$refs.resetpasseord.resetFields();
                this.$message({
                  message: '密码修改成功',
                  type: 'success'
                })
                this.dialogVisible = false
              }else{
                this.$message.error(result.info)
              }
            }).catch(error => {

            })
        }else{
          this.$message.error('请按规则填写')
        }
      })
    },
    reset() {
      this.$refs.resetpasseord.resetFields();
    },
    loginout() {
      this.$axios.post(
        this.$GLOBAL.loginOutApi,
      ).then(res => {
        var result = JSON.parse(this.$base64.decode(res.data))
        if (result.code == 10000){
          sessionStorage.clear()
          this.$router.push({
            path: './login'
          })
        }else{
          this.$message.error(result.info)
        }
      }).catch(error => {

      })
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
    .is-active{
      background-color: rgb(54, 131, 200);
    }
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
