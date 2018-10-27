<template>
<div class="application">
<banner></banner>
<cell></cell>
<almain></almain>
</div>
</template>

<script>
import banner from './banner.vue'
import cell from './cell.vue'
import almain from './almain.vue'
export default {
  data(){
    return{

    }
  },
    components:{
        banner,
        cell,
        almain
       
    }

}
</script>

<style scoped>

</style>