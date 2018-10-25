<template>
  <div class="dt5">
    <div class="tri"><img src="/static/img/section/homeSec/dt5_tri.png" alt=""></div>
    <div class="case">
      <div class="brief">
        <h3>经典案例</h3>
        <p>紧紧围绕工程建设全生命周期业务，立足BIM、物联网、移动互联网、大数据和云计算等技术，为政府、业主、施工、咨询、设计和运营等参建方提供优质的产品和服务，帮助用户提升效率、 降低成本、有效规划以及其他维度的更多收益。</p>
      </div>
      <ul class="clearfix">
        <li v-for="(item,index) of dt5_list1" :key="index">
          <a href="#">
            <img :src="item.img" alt="">
            <div class="bg"></div>
            <div class="wz_p">
              <h3 v-text="item.title"></h3>
              <p v-text="item.desc"></p>
            </div>
          </a>
        </li>
      </ul>
      <div class="getMore"><a href="#">更多案例</a></div>
    </div>
    <div class="line"></div>
    <div class="news">
      <ul class="clearfix">
        <li v-for="(item, index) in dt5_list2" :key="index">
          <div class="border_top"></div>
          <div class="border_right"></div>
          <div class="border_bottom"></div>
          <div class="border_left"></div>
          <a href="#">
            <div class="new_park clearfix">
              <span>{{item.date}}<br><font>2018</font></span>
              <h4 v-text="item.title"></h4>
            </div>
            <p v-text="item.desc"></p>
          </a>
        </li>
      </ul>
      <div class="getMore"><a href="#">更多新闻</a></div>
    </div>
  </div>
</template>
  
<script>
export default {
  data(){
    return{
     dt5_list1:[
       {img:'/static/img/section/homeSec/dt5_casebg1.jpg',title:'BIM开启数字化建设新时代 | 广州周大福金融中心',desc:'本项目位于广州市珠江新城CBD中心地段，主体是带加强层的框架-筒体结构，总占地面积2....'},
       {img:'/static/img/section/homeSec/dt5_casebg2.jpg',title:'BIM实现精细化管理 | 北京天坛医院新址项目',desc:'该项目为2014年北京市政府重点项目，也是目前北京在施体量最大的医院工程。项目主体是混...'},
       {img:'/static/img/section/homeSec/dt5_casebg3.jpg',title:'BIM钢结构软件让阿比让奥林匹克体育场更加顺利',desc:'项目位于科特迪瓦经济首都阿比让北部的阿尼亚马区，是中国政府继坦赞铁路之后最大的援外项目...'},
       {img:'/static/img/section/homeSec/dt5_casebg4.jpg',title:'BIM技术在长沙佳兆业广场项目的应用',desc:'提升了项目部对现场安全文明标准化施工、过程质量控制、图纸深化、施工方案及技术交底、进度...'}
     ],
      dt5_list2:[
        {date:'10/22',title:'数字建筑体验馆首期讲解员训练营圆满落幕！营员收获颇丰！',desc:'数字建筑并不是孤立存在，也不是一蹴而就的；而是由各方参与、多个平台组成，由建筑业和IT产业相融合的新生态。数字建筑对产业变革的影响也是多层次，由点到线、到面，最后到体的全方位的数字化。'},
        {date:'10/22',title:'职业起点·梦想舞台｜2018年全国高等院校BIM应用技能比赛圆满落幕',desc:'10月21日，职业起点，梦想舞台—2018年全国高等院校BIM应用技能比赛于成都、常州两地圆满落幕，来自全国范围内的386家建筑类专业相关院校的3000余名师生经过现场激烈角逐，比赛最终决出...'},
        {date:'10/23',title:'共建建设行业大数据中心，中国国际商会与广联达正式签约',desc:'近日，中国国际商会建设行业商会与广联达科技股份公司在北京广联达大厦举行战略签约仪式，按照战略合作协议，双方将共建中国国际商会建设行业大数据中心，推动“数字建筑”商业模式全球化推广和应用。'},
        {date:'10/23',title:'高质量发展！广联达荣膺2018北京民营企业百强、2018北京民营企业科技创新百强第8...',desc:'广联达科技股份有限公司凭借其良好的社会形象，诚实守法经营、较高的人均产出上榜“北京民营企业百强”；同时凭借在科技创新领域的突出表现，紧随京东集团，位列科技创新第8位。'},
        {date:'10/24',title:'“雄安创业会客厅”主题沙龙第九期！这次谈的是“数字建筑”',desc:'首批入驻雄安新区的中关村企业广联达科技股份有限公司主办的雄安创业会客厅第九期主题沙龙—科技创新系列沙龙之数字建筑助力雄安"细胞级"精细化建设治理'},
        {date:'10/25',title:'【锦鲤】建筑人拍短视频，拿万元大奖！',desc:'面对新的数字变革，我们对于建筑新人才如何培养，如何更好地为建筑产业提供优秀的人才，现在是一个急需解决的大难题。'},
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
.dt5{background: url(/static/img/section/homeSec/dt5_bg.jpg) no-repeat top center #232a3a;width: 100%;position: relative;}
.dt5 .tri{position: absolute;top: 0;left: 50%;margin-left: -36px;z-index: 10;}
.dt5 .tri img{width: 72px;height: 36px;}
.case{width: 1150px;margin: 0 auto;padding-top: 85px;height: 600px;}
.case .brief{width: 580px;margin: 0 auto;}
.brief h3{font-size: 32px;color: #fff;font-weight: normal;text-align: center;margin:0;}
.brief p{font-size: 16px;color: #fff;line-height: 26px;padding-top: 28px;margin:0;}
.case ul{width: 100%;padding-top: 52px;}
.case li{float: left;width: 280px;height: 205px;overflow: hidden;position: relative;margin-right: 10px;}
.case li:last-child{margin-right: 0}
.case li a{color: #fff;}
.case li a>img{width: 280px;height: 205px;}
.case li .bg{position: absolute;left: 0;right: 0;top: 0;bottom: 0;transition: all .4s cubic-bezier(.4,0,.2,1);}
.case li .wz_p{width: 100%;height: 100%;position: absolute;left: 0;right: 0;top: 50%;bottom: 0;
margin-top: 65px;background-color: rgba(32,123,230,0);transition: all .4s cubic-bezier(.4,0,.2,1);}
.wz_p h3{font-size: 20px;font-weight: normal;color: #fff;text-align: center;
padding: 40px 30px 0 30px;opacity: 0;transition: all .4s cubic-bezier(.4,0,.2,1);}
.wz_p p{font-size: 14px;line-height: 22px;color: #fff;padding: 20px 30px 0 30px;opacity: 0;
transition: all .4s cubic-bezier(.4,0,.2,1);}
.case li:hover .bg{background: #207be6;opacity: .7;}
.case li:hover .wz_p{top: 0;margin-top: 0px;}
.case li:hover .wz_p h3,.case li:hover .wz_p p{opacity: 1;}   
.case .getMore{width: 128px;margin: 40px auto 0;}
.case .getMore a{width: 128px;height: 38px;border: 1px #fff solid;display: block;text-align: center;
line-height: 38px;font-size: 14px;color: #fff;border-radius: 3px;}
.case .getMore a:hover{color: #207be6;background: #fff;border-color: #fff !important;}
.line{background: url(/static/img/section/homeSec/dt5_tri2.png) no-repeat center;width: 100%;height: 36px;}

.news{width: 100%;margin: 0 auto;padding-bottom: 100px;background: #fff;}
.news ul{width: 1016px;padding-top: 95px;margin: 0 auto;}
.news ul li{width: 480px;float: left;margin-right: 56px;margin-bottom: 18px;padding: 0 20px;position: relative;}
.news ul li:nth-child(2n){margin-right: 0;}
.news ul li .border_top,.news ul li .border_bottom{height: 1px;width: 0;transition: all .4s ease;}
.news ul li .border_left,.news ul li .border_right{height: 0px;width: 1px;transition: all .4s ease;}
.news ul li .border_top,.news ul li .border_left{left: 0;top: 0;position: absolute;background: #207be6;} 
.news ul li .border_right,.news ul li .border_bottom{bottom: 0;right: 0;position: absolute;background: #207be6;} 
.news ul li:hover .border_left,.news ul li:hover .border_right{height: 100%;}
.news ul li:hover .border_top,.news ul li:hover .border_bottom{width: 100%;}
.news ul li a{display: block;border: 1px #fff solid;width: 440px;height: 208px;}
.new_park{padding: 18px 0 0 0px;}
.new_park span{font-size: 16px;width: 56px;height: 56px;line-height: 18px;padding-top: 10px;text-align: center;display: block;
float: left;color: #333;background: #f0f2f5;border: 1px #e2e3e8 solid;}
.new_park span>font{font-size: 12px;}
.new_park h4{color: #333;font-size: 14px;font-weight: normal;line-height: 22px;width: 370px;float: right;
padding: 5px 0 9px 0;border-bottom: 1px #e2e3e8 solid;height: 60px;}
.news ul li>a>p{text-align: left;font-size: 12px;line-height: 24px;color: #888;padding: 16px 12px 0 0px;height: 112px;}
.news .getMore{width: 128px;margin: 25px auto 0;}
.news .getMore a{width: 128px;height: 38px;border: 1px #207be6 solid;display: block;text-align: center;
line-height: 38px;font-size: 14px;color: #207be6;border-radius: 3px;}
.news .getMore a:hover{color: #fff;background: #207be6;border-color: #207be6 !important;}
</style>