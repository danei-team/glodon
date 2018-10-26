<template>
  <div class="x_type">
    <h3>方案类型:</h3>
    <ul>
        <li v-for="(item,index) in cellItem" :key="index"><router-link to="#" v-text="item.text"></router-link></li>
    </ul>
  </div>
</template>
  
<script>
export default {
    data(){
        return{
            cellItem:[{text:"全部方案"},{text:"政府机构"},{text:"房地产企业"},{text:"施工企业"},{text:"高等院校"},{text:"金融业务"},{text:"国际市场"}]
        }
    }
}
</script>
  
<style scoped>
.x_type {
    width: 1180px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    
}
.x_type ul {
    float: left;
    padding-top: 10px;
    width: 1100px;
}
.x_type ul li {
    float: left;
    margin: 0;
    padding: 0;
}
.x_type h3 {
    font-size: 14px;
    color: #666;
    font-weight: normal;
    float: left;
    width: 80px;
    line-height: 50px;
}
.x_type ul li a {
    font-size: 14px;
    color: #666;
    height: 26px;
    line-height: 26px;
    border: 1px #fff solid;
    display: block;
    margin-right: 2px;
    padding: 0 9px;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
    -webkit-border-radius: 3px;
    text-decoration: none;
}
.x_type ul li.dj a {
    color: #207be6;
    border: 1px #e2e2e2 solid;
}
.x_type ul li:first-child a{
     color: #207be6;
    border: 1px #e2e2e2 solid;
}
.x_type ul li:hover a{
    color: #207be6;
    border: 1px #e2e2e2 solid;
}
</style>