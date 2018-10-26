<template>
<div class="solution">
    <banner></banner>
    <cell></cell>
    <soMain></soMain>
 </div>
</template>
  
<script>
import cell from './cell.vue'
import soMain from './soMain.vue'
import banner from './banner.vue'
export default {

  components:{
    cell,
    soMain,
    banner
  }
}
</script>

<style scoped>
 
</style>