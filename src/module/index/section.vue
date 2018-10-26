<template>
  <section>
    这是中间
    <router-view></router-view>

  </section>  
</template>
  
<script>
import cell from '../../components/solution/cell.vue'
import soMain from '../../components/solution/soMain.vue'
export default {
  mounted(){
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  
    
  },
  components:{
    cell,
    soMain
=======
    this.$router.push('home');
>>>>>>> d28b9aabc79830a23c44e71da7ddf0f24d4ebb9a
=======
    this.$router.push('home');
>>>>>>> d28b9aabc79830a23c44e71da7ddf0f24d4ebb9a
=======
    //this.$router.push('home');
>>>>>>> parent of b6abb79... ydk_18:25
  }
}
</script>

<style scoped>
  section{
   margin-top:60px; 
   background:#ffffff;
  }
</style>