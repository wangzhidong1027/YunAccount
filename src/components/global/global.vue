<template>
  
</template>
<script>
const baseApiURL = "/cloud-api"
const loginApi = baseApiURL + '/companyInfo/companyLogin' // 001企业登录
const loginOutApi = baseApiURL + '/companyInfo/companyLoginOut' // 002企业登出
const setPasswordApi = baseApiURL + '/companyInfo/companyUpPwd' // 003 修改密码



export default {
  loginApi,
  loginOutApi,
  setPasswordApi,
}
</script>
