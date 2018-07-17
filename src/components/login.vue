<template>
  <div id="login">
    <div class="form-box">
        <el-form :model="loginFrom" :rules="rules" ref="loginFrom"  class="loginform-box" :status-icon='true'>
           <el-form-item  prop="email">
            <el-input v-model="loginFrom.email" placeholder="请输入您的企业账号"></el-input>
          </el-form-item>
           <el-form-item  prop="password">
            <el-input v-model="loginFrom.password" placeholder="请输入您的密码" type='password'></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="medium" @click.native="login('loginFrom')">立即登录</el-button>
          </el-form-item>
        </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      loginFrom: {
        email: '',
        password: ''
      },
      rules :{
        email: [
            {required: true, message: '用户名不能为空', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
          ],
        password: [
            {required: true, message: '密码不能为空', trigger: 'blur' },
            {min: 6 ,max: 18, message: '密码为6-18位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login(formName) { 
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$axios.post(
            this.$GLOBAL.loginApi,
            this.$qs.stringify({
              email: this.$base64.encode(this.loginFrom.email),
              password: this.$base64.encode(this.loginFrom.password)
            })
          ).then(res => {
            var result = JSON.parse(this.$base64.decode(res.data))
            console.log(result)
            if(result.code == 10000){
              this.$message({
                message: '登录成功，即将跳转主页',
                type: 'success'
              });
              sessionStorage.setItem('token',result.data.token)
              setTimeout(() => {
                this.$router.push({
                  path: './main/demandrecord'
                })
              }, 3000);
              
            }else{
              this.$message.error(result.info)
            }
          }).catch(error => {

          })
        } else {
          console.log('error submit!!');
          return false;
        }
      })
     
    }
  }
}
</script>

<style scoped lang="scss" >
#login{
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
  .form-box{
    background-image: url("../assets/images/login-logo.png");
    background-repeat: no-repeat;
    background-position: center top;
    position: absolute;
    left:50%;
    top: 50%;
    width: 354px;
    height: 180px;
    margin-left:-177px;
    margin-top: -200px;
    padding-top: 140px;
  }
  .el-form-item__content{
    button{
      width: 100%;
    }
  }
}
</style>
