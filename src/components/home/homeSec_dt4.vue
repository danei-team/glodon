<template>
  <div class="dt4">
    <div class="tri"><img src="/static/img/section/homeSec/dt4_tri.png" alt=""></div>
    <div class="park_c">
      <h3>产品与服务</h3>
      <p>让用户从选择到决定，从应用到收效的完整流程更加快速，轻松，高效</p>
    </div>
    <div class="dt4_list">
      <ul class="clearfix">
        <li v-for="(item,index) of dt4_list" :key="index">
          <a href="#">
            <div class="li_box">
              <img :src="item.bgImg" alt="">
              <div class="icon_box">
                <img :src="item.logoImg" alt="">
                <h3>
                  <font v-text="item.font"></font>
                  <span v-text="item.text"></span>
                </h3>
              </div>
              <p v-text="item.desc"></p>
            </div>
          </a>
        </li>
      </ul>
      <div class="getMore"><a href="#">查看更多</a></div>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
      dt4_list:[
        {bgImg:'/static/img/section/homeSec/dt4_bg1.jpg',logoImg:'/static/img/section/homeSec/dt4_logo1.png',font:'BIM5D',text:'数字施工，让工程管理变得简单',desc:'广联达BIM5D为工程项目提供一个可视化、可量化的协同管理平台。通过轻量化的BIM应用方案，达到减少施工变更、缩短工期、控制成本、提升质量的目的，同时为项目和企...'},
        {bgImg:'/static/img/section/homeSec/dt4_bg2.jpg',logoImg:'/static/img/section/homeSec/dt4_logo2.png',font:'云计价GCCP5.0',text:'让造价工作更轻松',desc:'广联达云计价平台GCCP5.0是迎合数字建筑平台服务商战略转型，为计价客户群，提供概算、预算、结算阶段的数据编制、审核、积累、分析和挖掘再利用的平台产品，于20...'},
        {bgImg:'/static/img/section/homeSec/dt4_bg3.jpg',logoImg:'/static/img/section/homeSec/dt4_logo3.png',font:'斑马·梦龙网络计划',text:'帮您洞见未来的进度计划工具',desc:'斑马·梦龙网络计划软件是专业、易用的网络计划工具，可以辅助项目通过关键线路+前锋线进行动态管理，打通PDCA循环，让项目进度真正可控！'},
        {bgImg:'/static/img/section/homeSec/dt4_bg4.jpg',logoImg:'/static/img/section/homeSec/dt4_logo4.png',font:'广材网',text:'选材定价就用广材网',desc:'广材网旨为用户提供涵盖市场价、信息价、人工询价、价格库以及专属客服的材料价格全方位服务，解决全过程造价及成本管理工作中产生的询价工作量大、询价困难、供应商报价周...'},
        {bgImg:'/static/img/section/homeSec/dt4_bg5.jpg',logoImg:'/static/img/section/homeSec/dt4_logo5.png',font:'BIM模板脚手架设计',text:'设计安全屏障，支撑数字未来',desc:'聚焦施工过程中模板脚手架专项业务，利用数字图形技术，辅助施工企业（项目部）技术人员，进行模板脚手架方案可视化设计，快速绘制施工图、计算书，精确计算材料用量。'},
        {bgImg:'/static/img/section/homeSec/dt4_bg6.jpg',logoImg:'/static/img/section/homeSec/dt4_logo6.png',font:'智能安全帽',text:'链接现场，戴动未来',desc:'智能安全帽是广联达最新研发的智能设备应用。该产品是以工人实名制为基础，以物联网+智能硬件为手段，通过工人佩戴装载智能芯片的安全帽，现场安装“工地宝”数据采集和传...'}
      ]
    }
  },
  mounted(){
  }
}
</script>
  
<style scoped>
a:hover{text-decoration: none}
.clearfix::after{content: '';display: block;clear: both;}
.dt4{width: 100%;position: relative;padding-bottom: 45px;background: #f0f0f0;}
.dt4 .tri{position: absolute;top: 0;left: 50%;margin-left: -36px;z-index: 10;}
.dt4 .tri img{width: 72px;height: 36px;}
.park_c{text-align: center;}
.park_c h3{color: #333;font-size: 32px;font-weight: normal;padding: 105px 0 15px 0;}
.park_c p{color: #333;font-size: 16px;}
.dt4_list{width: 1180px;margin: 0 auto;}
.dt4_list ul{width: 100%;margin-top: 33px;}
.dt4_list ul li{width: 380px;border-radius: 5px;box-shadow: 0px 0px 3px #ccc;float: left;margin-right: 17px;
margin-bottom: 28px;background: #fff;border: 1px #d8d8d8 solid;transition: all .4s ease-out;}
.dt4_list ul li:nth-child(3n){margin-right: 0;}
.dt4_list ul li:hover{box-shadow: 0 0 30px rgba(33,37,44,.5);}
.dt4_list li>a{color: #666;font-size: 12px;}
.li_box{position: relative;}
.li_box>img{width: 380px;height: 80px;border-radius: 5px 5px 0 0;}
.li_box>p{line-height: 20px;padding: 32px 18px 0 18px;height: 130px;width: 378px;display: block;margin-bottom: 0;}
.icon_box{position: absolute;top: 32px;left: 15px;}
.icon_box>img{width: 72px;height: 72px;float: left;margin-right: 15px;}
.icon_box>h3{margin-top: 4px;font-weight: normal;margin-left: 20px;width: 330px;}
.icon_box>h3>font{font-size: 24px;color: #fff;text-shadow: 1px 1px 2px #333;line-height: 45px;padding-left: 13px;
background: url(/static/img/section/homeSec/dt4_lbg.png) no-repeat left;height: 45px;display: block;}
.icon_box>h3>span{display: block;font-size: 14px;color: #333;margin-left: 15px;padding-top: 4px;}
.getMore{width: 128px;margin: 25px auto 0;}
.getMore a{width: 128px;height: 38px;border: 1px #207be6 solid;display: block;text-align: center;
line-height: 38px;font-size: 14px;color: #207be6;border-radius: 3px;}
.getMore a:hover{color: #fff;background: #207be6;border-color: #207be6 !important;}
</style>