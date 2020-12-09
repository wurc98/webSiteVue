<template>
  <div class="wu-home" @click="state.flag = false">
    <div class="nav-btn" @click.stop="openList">
      <i class="iconfont">&#xe747;</i>
    </div>
    <transition name="fade">
      <div class="nav-list" v-if="state.flag" @click.stop>
        <div class="nav-list-item" v-for="(item,index) in state.navList" :key="index+item.title">
            {{item.title}}
            <i class="iconfont">{{item.icon}}</i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
export default {
  name: "index",
  setup() {
    const state = reactive({
      flag: false,
      navList: [{title:"博客",icon:"&#xe603;"},{title:"聊天室",icon:"&#xe603;"},{title:"日志",icon:"&#xe603;"},{title:"",icon:"&#xe708;"}],
    });
    const openList = () => {
      state.flag = !state.flag;
    };
    return {
      openList,
      state,
    };
  },
};
</script>

<style scoped>
.wu-home {
  width: 100vw;
  height: 100vh;
  background: url("../assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.nav-btn {
  position: absolute;
  width: 3vw;
  height: 3vw;
  left: 10vw;
  top: 5vh;
}
.nav-list {
  position: absolute;
  width: 30vw;
  height: 12vw;
  background: rgb(62 64 61 / 0.93);
  top: 50%;
  left: 50%;
  margin-left: -15vw;
  margin-top: -6vw;
  display: flex;
  flex-wrap: wrap;
}

.nav-list-item{
    width: 15vw;
    height: 6vw;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
