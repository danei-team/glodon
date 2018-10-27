<template>
<div class="application">
<banner></banner>
<cell></cell>
<allist></allist>
</div>
</template>

<script>
import banner from './banner.vue'
import cell from './cell.vue'
import allist from './allist.vue'
export default {
  data(){
    return{

    }
  },
    components:{
        banner,
        cell,
        allist
    }

}
</script>

<style scoped>

</style>