<template>
  <div class="al_main">
     <div class="al_park02">
	    <h3>中建一局集团安全质量管理系统</h3>
		<ul>
	     <li><font>时间：</font>2018-08-06</li>
	  	</ul>
     </div>
  <div class="xmms" v-for="(item,index) in bd" :key="index">
	<div class="park02">
	  <h3>
	    <font v-text="item.title"></font>
	  </h3>
	</div>
    <div class="xs">
        <div class="x_ms">
        <a href="#" class="imgPreView"><img :src="item.img_url">  </a>
        <div class="x_list">
              <p style="text-align: justify;" v-text="item.text"></p> 
        </div>
     </div>
    </div>
    </div>
    <div class="hx">
	<div class="park02">
	  <h3>
	    <font>核心价值</font>
	  </h3>
	</div>
	<div class="img-scroll">
         <span class="prev"><a id="a" @click="scrollleft()"></a></span>
         <span class="next"><a id="b" @click="scrollright()"></a></span>
         <div class="img-list">
           <ul style="margin-left: 0px;">
             <li>
	            <h3>移动端采集数据</h3>
	            <p>移动端的采集数据可以实时提交到电脑端，并对移动端采集的数据自动统计分析，方便了相关领导在电脑前就可以了解到现场的情况。</p>
              </li>
              <li>
	            <h3>隐患类别和复现率分析</h3>
	            <p>集团和公司可以准确掌握常见隐患的出现情况和复现的情况，为项目的安全生产提供相应的保障措施。</p>
              </li><li>
	            <h3>多维度和多角度统计分析</h3>
	            <p>多维度和多角度的应用情况统计分析，集团可查看下属公司和项目在任意时间段内的具体应用情况。</p>
              </li><li>
	            <h3>自动生成项目周报</h3>
	            <p>集团和公司对项目上相关人员的工作情况不是很了解，可通过自动生成的项目周报准确的了解项目上人员的日常工作情况。</p>
              </li></ul>
         </div> 
      </div>     
     </div>
  </div>
</template>
  
<script>
export default {
    data(){
        return{
            bd:[{title:"项目描述",img_url:"/static/img/application/aplibody/1.png",text:"中建一局集团通过前期大量的调研和软件系统对比分析，于 2016 年底采购广联达安全质量管理系统，并在 2016 年年底在华南公司试点和局部推广。一局集团在 2017 年后全集团推广，每个项目都必须使用该系统，各级管理者和安全质量生产人员均使用，应用效果和反响良好，至今所有的项目都未发生任何事故。"},
            {
                title:"解决方案",img_url:"/static/img/application/aplibody/2.png",text:"移动端的采集数据可以实时提交到电脑端，电脑端对移动端采集的数据自动统计分析，方便了相关领导在电脑前就可以了解到现场的情况。"
            }]
        }
    },
    methods:{
        scrollright:function(){
            var ul =document.querySelector(".img-list ul"); 
            var mgl = 0;   
              var li =document.querySelectorAll(".img-list ul li"); 
            var timer = setInterval(function(){
          
            
                mgl-=10;
                ul.style="margin-left:"+mgl+"px";
                if(mgl<-300){
                mgl=0;
                ul.style="margin-left:"+mgl+"px";
                clearInterval(timer);
                ul.appendChild(li[0]);
                }
            },10)
        },
         scrollleft:function(){
            var ul =document.querySelector(".img-list ul"); 
            var mgl = -300;   
            var li =document.querySelectorAll(".img-list ul li"); 
            ul.style="margin-left:-300px";
            ul.insertBefore(li[li.length-1],ul.childNodes[0]);
            var timer = setInterval(function(){
            
            
             
                mgl+=10;
                ul.style="margin-left:"+mgl+"px";
                if(mgl>0){
                mgl=0;
                ul.style="margin-left:"+mgl+"px";
                clearInterval(timer);
                
                }
            },10)
        },
    }
}
</script>
  
<style scoped>
.al_park02 {
    text-align: center;
    margin-top: 58px;
}
.al_park02 h3 {
    font-size: 30px;
    color: #434343;
    font-weight: normal;
}
.al_park02 ul {
    padding: 20px 0;
    margin-bottom: 38px;
}
.al_park02 ul li {
    display: inline-block;
    color: #666;
    font-size: 14px;
    padding: 0 20px;
}
.al_park02 ul li font {
    color: #666;
    padding-right: 5px;
}
.xmms {
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 87px;
}
.park02 {
    width: 1000px;
    margin: 0 auto;
    text-align: center;
}
.park02 h3 {
    width: 100%;
    border-bottom: 1px #e1e1e1 solid;
    font-weight: normal;
    padding-bottom: 12px;
}
.park02 h3 font {
    color: #434343;
    font-size: 30px;
    padding: 0 13px 6px 13px;
    border: none;
    border-bottom: 3px #207be6 solid;
}
.xs {
    overflow: hidden;
    height: 300px;
    padding-top: 50px;
}
.x_ms {
    width: 100%;
    display: table;
}
a {
    text-decoration: none;
}
.x_ms .x_list {
    width: 570px;
    display: table-cell;
    vertical-align: middle;
}
.x_ms .x_list p {
    font-size: 16px;
    color: #626262;
    line-height: 26px;
    padding: 5px 0;
}
.x_ms img {
    border: 1px #e1e1e1 solid;
    width: 398px;
    height: 238px;
}
.hx {
    width: 1000px;
    margin: 0 auto;
    padding-bottom: 89px;
}
.img-scroll {
    position: relative;
    width: 1000px;
    margin: 45px auto 0 auto;
}
.img-scroll .prev {
    width: 0;
    height: 0;
    border-width: 28px 13px 28px 0;
    border-style: solid;
    border-color: transparent #656565 transparent transparent;
    position: absolute;
    top: 65px;
    cursor: pointer;
}
.img-scroll .prev {
    left: 0px;
}
.img-scroll .prev #a {
    width: 0;
    height: 0;
    border-width: 28px 13px 28px 0;
    border-style: solid;
    border-color: transparent #fff transparent transparent;
    position: absolute;
    top: -28px;
    left: 1px;
}
.img-scroll .next {
    width: 0;
    height: 0;
    border-width: 28px 0 28px 13px;
    border-style: solid;
    border-color: transparent transparent transparent #656565;
    position: absolute;
    top: 65px;
    cursor: pointer;
}
.img-scroll .next {
    right: 0px;
}
.img-scroll .next #b {
    width: 0;
    height: 0;
    border-width: 28px 0 28px 13px;
    border-style: solid;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    top: -28px;
    left: -14px;
}
.img-list {
    POSITION: relative;
    WIDTH: 890px;
    MARGIN-LEFT: 40px;
    overflow: hidden;
}
.img-list ul {
    WIDTH: 9999px;
   
}
.img-list li {
    TEXT-ALIGN: center;
    WIDTH: 270px;
    DISPLAY: inline;
    FLOAT: left;
    line-height: 30px;
    padding-right: 40px;
    margin-left: 40px;
    background: url(/static/img/application/aplibody/line.png) no-repeat right;
}
.img-list li h3 {
    font-size: 22px;
    color: #434343;
    font-weight: normal;
}
.img-list li p {
    text-align: left;
    font-size: 16px;
    color: #434343;
    padding-top: 10px;
}
</style>