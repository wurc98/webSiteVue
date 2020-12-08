<template>
  <wu-index></wu-index>
</template>
<script lang="ts">
import WuTop from './components/top.vue'
import WuIndex from './views/index.vue'
export default {
  name: 'App',
  components:{
    WuTop,
    WuIndex
  },
  setup(){
    return {
    }
  }
}
</script>
