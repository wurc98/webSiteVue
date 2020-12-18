<template>
  <div class="wu-home">
    <wu-top></wu-top>
    <wu-left></wu-left>
    <wu-right></wu-right>
    <wu-container>
      <router-view></router-view>
    </wu-container>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import wuTop from '../components/top.vue';
import wuLeft from './leftTag/leftTag.vue';
import wuRight from './rightTag/rightTag.vue';
export default {
  name: "index",
  components: {
    wuTop,
    wuLeft,
    wuRight
  },
  setup() {
    //导航栏状态
    return {
    };
  },
};
</script>

<style scoped>
.wu-home {
  width: 100vw;
  height: 100vh;
}
</style>
