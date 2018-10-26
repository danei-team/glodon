<template>
  <div class="dt2">
    <div class="dt2_box">
      <ul class="clearfix">
        <li v-for="(item,index) of dt2_list" :key="index">
          <img :src="item.img" alt="">
          <h3 v-text="item.title"></h3>
          <p v-text="item.desc"></p>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
      dt2_list:[
        {img:'/static/img/section/homeSec/dt2_li1.png',title:'数字建筑',desc:'是虚实映射的“数字孪生”，是驱动建筑产业全过程、全要素、全参与方升级的行业战略，是为产业链上下游各方赋能的建筑产业互联网平台。'},
        {img:'/static/img/section/homeSec/dt2_li2.png',title:'行业报告',desc:'《中国建筑施工行业信息化发展系列报告》由住建部信息中心主持编写，代表了当前行业发展的前沿技术水平，具有极高的指导和应用价值。'},
        {img:'/static/img/section/homeSec/dt2_li3.png',title:'中国建设行业年度峰会',desc:'为行管部门、企业精英、专家学者提供一个高层对话平台，聚焦行业前沿及当下热点，紧跟时代脉搏、引领行业转型，推动建设行业信息化的持续发展与进步。'},
        {img:'/static/img/section/homeSec/dt2_li4.png',title:'数字建筑绿色发展联盟',desc:'以提升科技创新、服务互联网+智慧建筑产业、推动传统产业转型升级与快速发展为导向，凝聚产业优势力量，整合产业优质资源，为产业升级与发展服务。'},
      ]
    }
  },
  mounted(){
  }
}
</script>
  
<style scoped>
.clearfix::after{content: '';display: block;clear: both;}
.home-sec{width: 100%;min-width: 1200px;position: relative;top:60px;}
.dt2{width: 100%;background: url(/static/img/section/homeSec/dt2_bg.jpg) no-repeat center #4c97db;height: 510px;}
.dt2 .dt2_box{width: 1180px;margin: 0 auto;}
.dt2 .dt2_box ul{width: 100%;padding-top: 70px;}
.dt2 .dt2_box li{width: 270px;margin-right: 33px;float: left;color: #fff;}
.dt2 .dt2_box li:last-child{margin-right:0;}
.dt2_box li img{display: inline-block;;width: 270px;height: 180px;}
.dt2_box li h3{font-size: 20px;color: #fff;font-weight: normal;text-align: center;padding: 16px 0;}
.dt2_box li p{font-size: 14px;color: #fff;line-height: 22px;height: 88px;}
</style>