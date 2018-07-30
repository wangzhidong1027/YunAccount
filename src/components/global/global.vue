<template>

</template>
<script>
  // 代理配置  正式
// const agent = {
//   agentNo: 'CY1532592266116726'
// }
//代理配置  测试
const agent = {
  agentNo: 'CY1532500042351613'
}

const baseApiURL = "http://testapi.xinxiangfuwu.com"
// const baseApiURL = "https://api.xinxiangfuwu.com"
//
// const baseApiURL = "http://10.10.18.17:8081/cloud-api"
const baseBackApiURL = ''

const commonUpImgApi = baseApiURL + '/toolcate/uploadFile'
const loginApi = baseApiURL + '/companyInfo/companyLogin' // 001企业登录
const loginOutApi = baseApiURL + '/companyInfo/companyLoginOut' // 002企业登出
const setPasswordApi = baseApiURL + '/companyInfo/companyUpPwd' // 003 修改密码
const getMerchNoApi = baseApiURL + '/companyInfo/getRecByMerchNo' //  获取商户号信息

const ordeerListApi = baseApiURL + '/rechargeNeed/getInfo' // 004 需求列表
const getAllTypeApi = baseApiURL + '/merType/tree' // 005 需求内容类型
const submitOrderAPI = baseApiURL + '/rechargeNeed/release' //006 提交需求接口
const deleteOrderApi = baseApiURL + '/rechargeNeed/delete' // 007 订单删除
const upPayImgApi = baseApiURL + '/rechargeNeed/voucher' // 008 上传付款凭证
const affirmOrderApi = baseApiURL +  '/rechargeNeed/affirm' // 009 需求确认
const getMerchInfoApi = baseApiURL + '/merch/getMerchantInfo' // 010 获取商户信息


export default {
  commonUpImgApi,
  agent,
  loginApi,
  loginOutApi,
  setPasswordApi,
  getMerchNoApi,
  ordeerListApi,
  getAllTypeApi,
  submitOrderAPI,
  deleteOrderApi,
  upPayImgApi,
  affirmOrderApi,
  getMerchInfoApi
}
</script>
