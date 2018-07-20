<template>

</template>
<script>
const baseApiURL = "/cloud-api"
const baseBackApiURL = '/cloud'

const commonUpImgApi = baseApiURL + '/toolcate/uploadFile'
const loginApi = baseApiURL + '/companyInfo/companyLogin' // 001企业登录
const loginOutApi = baseApiURL + '/companyInfo/companyLoginOut' // 002企业登出
const setPasswordApi = baseApiURL + '/companyInfo/companyUpPwd' // 003 修改密码

const ordeerListApi = baseBackApiURL + '/rechargeNeed/getInfo' // 004 需求列表
const getAllTypeApi = baseBackApiURL + '/merType/tree' // 005 需求内容类型
const submitOrderAAPI = baseBackApiURL + '/rechargeNeed/release' //006 提交需求接口
const deleteOrderApi = baseBackApiURL + '/rechargeNeed/delete' // 007 订单删除
const upPayImgApi = baseBackApiURL + '/rechargeNeed/voucher' // 008 上传付款凭证
const affirmOrderApi = baseBackApiURL +  '/rechargeNeed/affirm' // 009 需求确认
const getMerchInfoApi =  '/merch/getMerchantInfo' // 010 获取商户信息

//代理配置
const agent = {
  agentNo: 'CY1531978803112635'
}
export default {
  commonUpImgApi,
  agent,
  loginApi,
  loginOutApi,
  setPasswordApi,
  ordeerListApi,
  getAllTypeApi,
  submitOrderAAPI,
  deleteOrderApi,
  upPayImgApi,
  affirmOrderApi,
  getMerchInfoApi
}
</script>
