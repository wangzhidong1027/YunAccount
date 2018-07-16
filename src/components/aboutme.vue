<template>
  <div id="aboutme">
      <div class="banner">

      </div>
      <div class="about-text">
        <div class="text">
          <h4>欣享科技</h4>
          <div class="text-content">
            <p>是一家专注于共享经济模式并具备智能系统的科技服务公司。欣享科技自主研发了人工智能精准匹配、大数据模型建模，以及SaaS结算管理系统，包括 “CRM系统”&nbsp&nbsp“代扣代缴分级代发” &nbsp&nbsp“确权代发”&nbsp&nbsp “风控系统” 等核心产品，致力成为一个为共享经济全生命周期提供服务的互联网平台。</p>
            <p>
              随着共享经济模式的兴起与发展，企业的动态用工需求日益明显，且自由职业者的数量增至千万。欣享科技旨在为人才和雇主搭建起双边市场，通过线上线下资源整合与人工智能匹配、大数据分析等服务，实现人才与雇主精准无缝对接。雇主可以在欣享平台上 “精准匹配专业人才”，同时为双方提供支付、个税代缴等一站式服务，让双方的合作更高效。
            </p>
          </div>
        </div>
        <div class="about-img"> </div>
      </div>
      <div class="map">
        <h3>联系我们</h3>
        <p><span><i><img src="../assets/about/tel.png" alt=""></i><b class="tel">010-59477624</b></span>
            <span><i><img src="../assets/about/work.png" alt=""></i><b>工作日 9:00-18:00</b></span>
            <span><i><img src="../assets/about/address.png" alt=""></i><b>地址：北京市东城区珠市口东大街14号中欣大厦A座</b></span>
        </p>
        <div class="map-img">
          <img src="../assets/about/map.png" alt="">
        </div>
      </div>
  </div>
</template>

<script>
export default {
  

}
</script>

<style lang='scss'>
#aboutme{
  width: 100%;
  height: 100%;
  background: #fff;
  overflow: scroll;
  .banner{
    width: 100%;
    height: 300px;
    background-image: url('../assets/about/banner.png');
    background-position: center;
  }
  .about-text{
    width: 1000px;
    height: 394px;
    padding-top: 70px;
    margin: 0 auto;
    position: relative;
    .about-img{
      width: 575px;
      height: 394px;
      position: absolute;
      right: 0;
      top: 70px;
      background-image: url('../assets/about/pic.png');
      background-size: 100% 100%;
    }
    .text{
      position: absolute;
      top: 70px;
      z-index: 100;
      width: 658px;
      h4{
        width: 425px;
        text-align: right;
        padding-top: 24px;
        font-size: 26px;
        color: #428bfa;
      }
      .text-content{
        text-indent:30px;
        margin-top: 20px;
        padding: 40px;
        box-sizing: border-box;
        height: 295px;
        background: #f5f5f5;
        font-size: 14px;
        color: #666666;
        line-height: 26px;
        font-weight: 300;
      }
    }
  }
  .about-text:after{
    content: '';
    height: 0;
    overflow: hidden;
    clear: both;
  }
  .map{
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 70px;
    h3{
      width: 100%;
      text-align:center;
      font-size: 26px;
      color: #428bfa;
      line-height: 140px;
    }
    p{
      vertical-align: middle;
      width: 100%;
      padding: 0 20px;
      overflow: hidden;
      height: 42px;
      span{
        padding-right: 50px;
      }
      i{
        vertical-align: middle;
        display: inline-block;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        border: 1px solid #e9e9e9;
        margin-right: 10px;
      }
      b{
        font-size: 18px;
        color: #333333;
        font-weight: 300;
        font-family: Regular,'微软雅黑';
      }
      .tel{
        color: #428bfa;
      }
    }
    .map-img{
      margin-top: 18px;
      width: 998px;
      border: 1px solid #dddddd;
      height: 405px;
    }
  }
}
</style>
