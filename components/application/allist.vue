<template>
  <div class="x_allist">
    <div class="allist">
      <ul class="clearfix">
        <li v-for="item in list">
         <a href="#">
          <div class="altu">
                <img :title="item.title" :src="item.img_url">
                <div class="alnr">
                  <h3 v-text="item.title"></h3>
                  <p></p>
                </div>
		      </div>
         </a>
        </li>
      </ul>
    </div>
  </div>
</template>
  
<script>
export default {
    data(){
        return{
            list:[{title:"河南省城际铁路综合调度指挥中心项目",img_url:"/static/img/application/1.png"},
            {title:"北京城建集团北京新机场航站区工程项目",img_url:"/static/img/application/2.jpg"},
            {title:"中铁某局某公司物料现场验收管控系统 + 搅拌站材料核算系统",img_url:"/static/img/application/3.png"},
            {title:"中国建筑一局（集团）有限公司宿州万达广场项目",img_url:"/static/img/application/4.png"},
            {title:"中建一局集团安全质量管理系统",img_url:"/static/img/application/5.png"},
            {title:"北京城市副中心职工周转房北区项目一标段项目",img_url:"/static/img/application/5-1.png"},
            {title:"北京住总集团管理驾驶舱平台",img_url:"/static/img/application/5-2.png"},
            {title:"北京通州台湖公租房项目智慧工地集成管理应用",img_url:"/static/img/application/5-3.jpg"},
            {title:"胜利油田协同办公系统建设",img_url:"/static/img/application/6.png"},
            {title:"中国建筑一局 ( 集团 ) 有限公司协同办公系统建设",img_url:"/static/img/application/7.png"},
            {title:"中国中铁股份有限公司协同办公系统建设",img_url:"/static/img/application/8.jpg"},
            {title:"湖南省工业设备安装有限公司集中采购电商平台",img_url:"/static/img/application/9.png"},
            {title:"中国葛洲坝集团有限公司集中采购平台",img_url:"/static/img/application/10.png"},
            {title:"广西五建信息化建设",img_url:"/static/img/application/11.jpg"},
            {title:"山东聊建集团信息化建设",img_url:"/static/img/application/12.png"},
            {title:"北京市第三建筑工程有限公司信息化建设",img_url:"/static/img/application/13.png"},
            {title:"郑州一建信息化建设",img_url:"/static/img/application/14.png"},
            {title:"看业主方如何使用协同平台轻松把控项目全局",img_url:"/static/img/application/15.jpg"},
            {title:"工期异常紧张的项目如何利用协同平台助力",img_url:"/static/img/application/16.jpg"},
            {title:"BIM市政算量让同槽计算更精准",img_url:"/static/img/application/17.png"},
            {title:"BIM市政算量让地质条件复杂的道排计算简单化",img_url:"/static/img/application/18.png"},
            {title:"EPC项目如何利用协同平台提升流程签审效率",img_url:"/static/img/application/19.jpg"},
            {title:"BIM市政算量让道排工程计算更简单",img_url:"/static/img/application/20.png"},
            {title:"中铁四局如何用BIM技术玩转铁路工程",img_url:"/static/img/application/21.jpg"},
            {title:"汇聚平台 联通资源 用活数据",img_url:"/static/img/application/22.jpg"},
            {title:"BIM开启数字施工新浪潮 | 联想武汉研发基地",img_url:"/static/img/application/23.jpg"},
            {title:"BIM开启数字化建设新时代 | 广州周大福金融中心",img_url:"/static/img/application/24.jpg"},
            {title:"BIM实现精细化管理 | 北京天坛医院新址项目",img_url:"/static/img/application/25.jpg"},
            {title:"胜利油田协同办公系统建设",img_url:"/static/img/application/26.jpg"},
            {title:"BIM装饰建模让酒店模型直观清晰",img_url:"/static/img/application/27.jpg"},
            {title:"BIM钢结构软件让阿比让奥林匹克体育场更加顺利",img_url:"/static/img/application/28.png"},
            {title:"钢构三维建模，汽车车间算量如此简单",img_url:"/static/img/application/29.png"},
            {title:"BIM装饰助会所工程成本节约",img_url:"/static/img/application/30.png"},
            {title:"BIM装饰算量让外装工程事半功倍",img_url:"/static/img/application/31.png"},
            {title:"BIM装饰助祠堂工程装修效果一目了然",img_url:"/static/img/application/32.png"},
            {title:"装饰算量软件解决外装幕墙装饰工程",img_url:"/static/img/application/33.png"},
            {title:"BIM装饰算量让楼房精装修工程化繁为简",img_url:"/static/img/application/34.jpg"},
            {title:"让第一测量开展“差异化竞争”",img_url:"/static/img/application/35.png"},
            {title:"中国中铁协同办公系统建设",img_url:"/static/img/application/36.jpg"},
            {title:"BIM技术在长沙佳兆业广场项目的应用",img_url:"/static/img/application/37.jpg"},
            {title:"BIM技术在杭州至绍兴城际铁路项目的应用",img_url:"/static/img/application/38.png"},
            {title:"让建设咨询的工程指标计算、指标积累工作更方便",img_url:"/static/img/application/39.png"},
            {title:"帮助中信地产实现成本精细化、增值型管理",img_url:"/static/img/application/40.png"}
            ]
        }
    }
}
</script>
  
<style scoped>
.x_allist {
    width: 100%;
    background: #f7f8fa;
}
.x_allist .allist {
    width: 1180px;
    margin: 0 auto;
}
.allist ul {
    margin-bottom: 40px;
    clear:both;
}
.allist ul li {
    width: 380px;
    text-align: center;
    float: left;
    margin-right: 20px;
    margin-top: 20px;
    margin-left:-10px;
   
}

.allist ul li {
    transition: all .4s ease-out;
    -webkit-transition: all .4s ease-out;
    -moz-transition: all .4s ease-out;
    -ms-transition: all .4s ease-out;
}
.clearfix:before, .clearfix:after {
    display: table;
    line-height: 0;
    content: "";
}
.clearfix:after {
    clear: both;
}
.allist ul li a {
    color: #666;
}
a {
    text-decoration: none;
}
.allist ul li .altu {
    width: 380px;
}
.allist ul li .altu img {
    width: 380px;
    height: 193px;
}
.allist ul li .altu .alnr {
    width: 380px;
    border: 1px #e2e2e2 solid;
    border-top: none;
    height: 86px;
}
.allist ul li .altu .alnr h3 {
    font-size: 16px;
    color: #333;
    font-weight: normal;
    padding: 18px 10px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.allist ul li .altu .alnr p {
    font-size: 12px;
}
.allist ul li:hover {
    box-shadow: 0 0 30px rgba(33,37,44,.5);
}
</style>