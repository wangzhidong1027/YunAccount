<template>

</template>
<script>
const baseApiURL = "/cloud-api"
const baseBackApiURL = ''
const loginApi = baseApiURL + '/companyInfo/companyLogin' // 001企业登录
const loginOutApi = baseApiURL + '/companyInfo/companyLoginOut' // 002企业登出
const setPasswordApi = baseApiURL + '/companyInfo/companyUpPwd' // 003 修改密码

const ordeerListApi = baseBackApiURL + '/cloud/rechargeNeed/getInfo' // 004 需求列表
const getAllTypeApi = baseBackApiURL + '/cloud/merType/tree' // 005 需求内容类型
const submitOrderAAPI = '/cloud/merType/tree' //006 提交需求接口

export default {
  loginApi,
  loginOutApi,
  setPasswordApi,
  ordeerListApi,
  getAllTypeApi,
  submitOrderAAPI
}
</script>
