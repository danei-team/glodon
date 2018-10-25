<template>
  <div class="f_main">
    <ul>
     <li class="wow fadeInUp animated animated" v-for="(item,index) in list" :key="index" :class="{even:ev(index)}" >
      <div class="f_part">
      <div class="img" v-if="ev2(index)">
        <img class="img" :src="item.img_url">
        </div>
        <div class="fnr">
        <h3 :title="item.title"><router-link to="#" style="#333" v-text="item.head"></router-link></h3>
        <span class="nr_span"></span>
        <p v-text="item.text"></p>
        <a class="ljxq" href="">了解详情</a>
        </div>
      
        <div class="img" v-if="ev(index)">
         <img class="img" :src="item.img_url">
        </div>
      </div>
     </li>
    </ul>
  </div>
</template>
  
<script>
export default {
    data(){
        return{
           
           list:[{title:"数字企业解决方案",
                  img_url:"/static/img/section/solution/1.png",
                  head:"数字企业解决方案",
                  text:"广联达数字企业是以项目管理和办公系统为依托，集约管控集采，最终形成企业BI；项目管理系统中，以成本管理为核心，进度管理为主线，合同管理为基础，基于项目全生命周期，充分融入PDCA 等管理思想和体系方法。"
                  },
                  {title:"BIM实践教学基地建设",
                  img_url:"/static/img/section/solution/2.png",
                  head:"BIM实践教学基地建设",
                  text:"高校人才培养应集中在BIM专业应用人才基本能力的培养，同时落地于BIM实践教学改革及基地建设上。 BIM创新实践教学基地主要由以下四部分来组成：BIM实验与实训中心、BIM培训与认证中心、BIM研究与应用中心、协同创新与展示中心。"
                  },
                  {title:"BIM建造解决方案",
                  img_url:"/static/img/section/solution/3.png",
                  head:"BIM建造解决方案",
                  text:"高校人才培养应集中在BIM专业应用人才基本能力的培养，同时落地于BIM实践教学改革及基地建设上。 BIM创新实践教学基地主要由以下四部分来组成：BIM实验与实训中心、BIM培训与认证中心、BIM研究与应用中心、协同创新与展示中心。"},
                  {title:"建设方BIM协同管理平台",
                  img_url:"/static/img/section/solution/4.png",
                  head:"建设方BIM协同管理平台",
                  text:"为建设方客户提供一个企业级的、以BIM为核心的项目协同管理平台，实现项目全过程管理的数据标准化、管控可视化和业务一体化。"},
                {title:"智慧工地解决方案",
                  img_url:"/static/img/section/solution/2.png",
                  head:"智慧工地解决方案",
                  text:"通过“云大物移智+BIM”等先进技术和综合应用，将施工过程中涉及到的人、机、料、法、环等要素进行实时、动态采集，有效支持现场作业人员、项目管理者提高施工质量、成本和进度水平，保证工程项目成功。"},
                {title:"公共资源交易信息化整体解决方案",
                  img_url:"/static/img/section/solution/5.png",
                  head:"公共资源交易信息化整体解决方案",
                  text:"聚焦公共资源交易领域，成为客户最信赖的合作伙伴"},
                  {title:"Cubicost国际招投标整体解决方案",
                  img_url:"/static/img/section/solution/6.png",
                  head:"Cubicost国际招投标整体解决方案",
                  text:"为全球14个国家和地区主要建筑商、承包商、建筑咨询公司等，在当地政府公务、政府民生及大型业主地标性建筑项目中平均提升效率43%。"},
                  {title:"建筑产业新金融",
                  img_url:"/static/img/section/solution/7.png",
                  head:"建筑产业新金融",
                  text:"依托广联达在建设工程领域20年的专业积累，整合银行、保险、担保、小贷、商业保理、融资租赁、产业基金、第三方支付等金融及类金融机构资源，旨在为客户提供专业、高效、灵活、便捷的金融及征信服务。"},
                  {title:"BIM实验与实训中心解决方案",
                  img_url:"/static/img/section/solution/3.png",
                  head:"BIM实验与实训中心解决方案",
                  text:"BIM实验与实训中心是以各专业人才培养方案为基础，满足日常BIM实践系列课程开设的要求，实现BIM应用型复合人才培养目标的教学实训基地。"},
                  {title:"成本信息服务（GCIS会员服务）",
                  img_url:"/static/img/section/solution/8.png",
                  head:"成本信息服务（GCIS会员服务）",
                  text:"广联达成本信息服务：基于大数据技术，运用数据的智慧，优化专业标准，提升成本及造价人员的技能，挖掘成本管理的潜力，以提升企业核心竞争力，协助企业达到增值提效的目的。"},
                  {title:"企业采购业务解决方案",
                  img_url:"/static/img/section/solution/9.png",
                  head:"企业采购业务解决方案",
                  text:"广联达集中采购业务 面向建筑施工企业及工程分包商、材料设备商。 围绕采购供应链核心业务，提供企业集采电商整体解决方案。"},
                  {title:"协同运营解决方案",
                  img_url:"/static/img/section/solution/10.png",
                  head:"协同运营解决方案",
                  text:"广联达协同运营是以一体化技术平台、场景化移动能力和标准化统一门户作为企业协同运营的三大横向能力支撑，以协同办公、督查督办、智慧党建和综合管理为主的四大业务构筑起多形态的纵向业务体系，为企业提供业务覆盖“纵向到底”、技术支撑“横向到边”的企业协同运营管理体系。"}]
        }
    },
    methods:{
        ev:function(index){
            if(index%2==1) return false;
            else return true;
        },
        ev2:function(index){
              if(index%2==0) return false;
            else return true;
        }
    }
}
</script>
  
<style scoped>
a{
     text-decoration: none;
     color:#333;
}
.f_main ul li .f_part .fnr .ljxq:hover {
    color: #fff;
    background: #207be6;
    border-color: #207be6 !important;
}
.f_main{
    width: 100%;
    background: #f5f5f5;
}
.f_main ul li.even{
    background: #f7f8fa;
}
.f_main ul li{
    height: 490px;
    padding: 75px 0px;
    background: #fff;
}
.f_main ul li .f_part{
    width: 1180px;
    min-width: 1180px;
    display: table;
    margin: 0 auto;
    position: relative;
    
}
.f_main ul li.even .f_part .fnr{
    left: 0;
}

.f_main ul li.even .f_part .fnr, .f_main ul li .f_part .fnr{
    display: table-cell;
    vertical-align: middle;
}
.f_main ul li .f_part .fnr{
    right: 0;
    width: 560px;
}
.f_main ul li .f_part .fnr h3{
    font-size: 32px;
    color: #333;
    font-weight: normal;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 60px;
}
.f_main ul li .f_part .fnr .nr_span{
    font-size: 16px;
    color: #333;
    display: block;
    padding: 6px 0 20px 0;
}
.f_main ul li .f_part .fnr p{
    width: 490px;
    font-size: 14px;
    color: #666;
    line-height: 22px;
}
.f_main ul li .f_part .fnr .ljxq{
    width: 130px;
    height: 35px;
    line-height: 35px;
    color: #207be6;
    margin-top: 26px;
    background: #fff;
    font-size: 12px;
    text-align: center;
    border: 1px solid #207be6;
    display: block;
    overflow: hidden;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    -webkit-border-radius: 3px;
}
.f_main ul li.even .f_part .img{
    float: right;
    width: 450px;
    height: 340px;
    position: relative;
}
.f_main ul li .f_part .img {
    width: 450px;
    height: 340px;
    position: relative;
    float: left;
}
</style>