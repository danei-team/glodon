<template>
  <div class="home-sec">
    <dt1></dt1>
    <dt2></dt2>
    <dt3></dt3>
    <dt4></dt4>
    <dt5></dt5>
  </div>
</template>
  
<script>
import dt1 from './homeSec_dt1.vue'
import dt2 from './homeSec_dt2.vue'
import dt3 from './homeSec_dt3.vue'
import dt4 from './homeSec_dt4.vue'
import dt5 from './homeSec_dt5.vue'

export default {
  components:{
    dt1,
    dt2,
    dt3,
    dt4,
    dt5
  },
  mounted(){

  }
}
</script>
  
<style scoped>
*{margin: 0;padding: 0;}
.clearfix::after{content: '';display: block;clear: both;}
.home-sec{width: 100%;min-width: 1200px;position: relative;top:60px;background: #f0f0f0;}
a{text-decoration: none}
a:hover{text-decoration: none}
</style>