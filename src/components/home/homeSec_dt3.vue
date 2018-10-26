<template>
  <div class="dt3">
    <div class="tri"><img src="/static/img/section/homeSec/dt3_tri.png" alt=""></div>
    <ul class="clearfix">
      <li v-for="(item,index) of dt3_list" :key="index">
        <a href="#">
          <img :src="item.bgImg" alt="">
          <div class="mask">
            <div class="bg ohter-bg"></div>
            <div class="content">
              <div class="item_p"><img :src="item.conImg" alt=""></div>
              <h3 v-text="item.title"></h3>
              <p v-text="item.desc"></p>
              <span>查看详情</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
      dt3_list:[
        {bgImg:'/static/img/section/homeSec/dt3_bg1.jpg',conImg:'/static/img/section/homeSec/dt3_li1.png',title:'BIM建造解决方案','desc':'广联达BIM建造解决方案以BIM为载体，进度为主线，以成本为核心，数据驱动，服务于项目精细化管理。做到事前规划、事中精细...'},
        {bgImg:'/static/img/section/homeSec/dt3_bg2.jpg',conImg:'/static/img/section/homeSec/dt3_li2.png',title:'建设方BIM协同管理平台','desc':'为建设方客户提供一个企业级的、以BIM为核心的项目协同管理平台，实现项目全过程管理的数据标准化、管控可视化和业务一体化。'},
        {bgImg:'/static/img/section/homeSec/dt3_bg3.jpg',conImg:'/static/img/section/homeSec/dt3_li3.png',title:'智慧工地解决方案','desc':'通过“云大物移智+BIM”等先进技术和综合应用，将施工过程中涉及到的人、机、料、法、环等要素进行实时、动态采集，有效支持...'}, 
        {bgImg:'/static/img/section/homeSec/dt3_bg4.jpg',conImg:'/static/img/section/homeSec/dt3_li4.png',title:'公共资源交易信息化整体解决方案','desc':'聚焦公共资源交易领域，成为客户最信赖的合作伙伴'},
        {bgImg:'/static/img/section/homeSec/dt3_bg5.jpg',conImg:'/static/img/section/homeSec/dt3_li5.png',title:'建筑产业新金融','desc':'依托广联达在建设工程领域20年的专业积累，整合银行、保险、担保、小贷、商业保理、融资租赁、产业基金、第三方支付等金融及类...'},
        {bgImg:'/static/img/section/homeSec/dt3_bg6.jpg',conImg:'/static/img/section/homeSec/dt3_li6.png',title:'BIM实验与实训中心解决方案','desc':'BIM实验与实训中心是以各专业人才培养方案为基础，满足日常BIM实践系列课程开设的要求，实现BIM应用型复合人才培养目标...'},
        {bgImg:'/static/img/section/homeSec/dt3_bg7.jpg',conImg:'/static/img/section/homeSec/dt3_li7.png',title:'成本信息服务（GCIS会员服务）','desc':'广联达成本信息服务：基于大数据技术，运用数据的智慧，优化专业标准，提升成本及造价人员的技能，挖掘成本管理的潜力，以提升企... '}, 
        {bgImg:'/static/img/section/homeSec/dt3_bg8.jpg',conImg:'/static/img/section/homeSec/dt3_li8.png',title:'企业采购业务解决方案','desc':'广联达集中采购业务面向建筑施工企业及工程分包商、材料设备商。围绕采购供应链核心业务，提供企业集采电商整体解决方案。'}
      ]
    }
  },
  mounted(){

  }
}
</script>
  
<style scoped>
.clearfix::after{content: '';display: block;clear: both;}
.dt3{width: 100%;position: relative;}
.dt3 .tri{position: absolute;top: 0;left: 50%;margin-left: -36px;z-index: 10;}
.dt3 .tri img{width: 72px;height: 36px;}
.dt3 ul{width: 100%;margin-bottom: 0;}
.dt3 li{width: 25%;background: #333;height: 100%;line-height: 0;position: relative;float: left;text-align: center;z-index: 9;}
.dt3 li a{color: #fff;display: block;}
.dt3 li a>img{width: 100%;height: 100%;}
.mask{position: absolute;left: 0;right: 0;top: 0;bottom: 0;}
.mask .bg{position: absolute;left: 0;right: 0;top: 0;bottom: 0;background: #161a1d;opacity: .6;
transition: all .4s cubic-bezier(.4,0,.2,1);}
.mask .content{position: absolute;left: 0;right: 0;top: 50%;bottom: 0;margin-top: -56px;
transition: all .4s cubic-bezier(.4,0,.2,1);}
.item_p{height:59px;position: relative;width: 25%;display: inline-block;}
.item_p img{width: 59px;height: 59px;}
.content h3{color: #fff;font-size: 20px;line-height: 24px;margin: 0;padding: 0;margin-top: 24px;font-weight: normal;
transition: all .4s cubic-bezier(.4,0,.2,1);}
.content p{opacity: 0;transition: all .4s cubic-bezier(.4,0,.2,1);font-size: 14px;color: #fff;text-align: left;margin-top: 30px;
padding: 0 36px;line-height: 24px;height: 72px;}
.content span{opacity: 0;transition: all .4s cubic-bezier(.4,0,.2,1);z-index: 1;border-radius: 3px;display: inline-block;
border: 1px solid #fff;width: 120px;height: 36px;line-height: 36px;font-size: 14px;color: #fff;text-decoration: none;
margin-top: 62px;}
.dt3 li:hover .bg{opacity: .7;background: #207be6;}
.dt3 li:hover .content{top: 50%;margin-top: -160px;}
.dt3 li:hover .content h3{margin-top: 12px;}
.dt3 li:hover .content p{margin-top: 22px;opacity: 1;}
.dt3 li:hover .content span{margin-top: 80px;opacity: 1;}
.content span:hover{color: #207be6;background: #fff;border-color: #fff !important;}
</style>