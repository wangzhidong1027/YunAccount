<template>
  <div id="login">
    <div class="form-box">
        <el-form :model="loginFrom" :rules="rules" ref="loginFrom"  class="loginform-box">
           <el-form-item  prop="username">
              <el-input v-model="loginFrom.username" placeholder="请输入您的企业账号"></el-input>
          </el-form-item>
           <el-form-item  prop="password">
              <el-input v-model="loginFrom.password" placeholder="请输入您的密码"></el-input>
          </el-form-item>
          <el-form-item>
           <el-button type="primary" size="medium">立即创建</el-button>
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
        username: '',
        password: ''
      },
      rules :{
        username: [
            {required: true, message: '用户名不能为空', trigger: 'blur' }
          ],
        password: [
            {required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
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
}
</style>
