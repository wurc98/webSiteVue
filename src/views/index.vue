<template>
  <div class="wu-home" @click="state.flag = false">
    <div class="nav-btn" @click.stop="openList">
      <i class="iconfont">&#xe747;</i>
    </div>
    <show-time class="show-time"></show-time>
    <transition name="fade">
      <div class="nav-list" v-if="state.flag" @click.stop>
        <div class="nav-list-item" :class="{animate__animated:state.isAnimation, animate__headShake:state.isAnimation}" @mouseenter="isAnimation=true" @mouseleave="onmouseEnter" @ v-for="(item,index) in state.navList" :key="index+item.title">
            <p>{{item.title}}</p>
            <i class="iconfont" v-html="item.icon"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { ref, reactive } from "vue";
import ShowTime from './svg/showTime.vue'
export default {
  name: "index",
  components:{
    ShowTime
  },
  setup() {
    const state = reactive({
      flag: false,
      isAnimation:false,
      navList: [{title:"博客",icon:"&#xe603;"},{title:"聊天室",icon:"&#xe688;"},{title:"日志",icon:"&#xe600;"},{title:"",icon:"&#xe708;"}],
    });
    const openList = () => {
      state.flag = !state.flag;

    };
    const onmouseEnter=()=>{
      state.isAnimation = true
    }
    return {
      openList,
      state,
      onmouseEnter,
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
  height: 24vw;
  background: rgb(62 64 61 / 0.93);
  top: 50%;
  left: 50%;
  margin-left: -15vw;
  margin-top: -12vw;
  display: flex;
  flex-wrap: wrap;
}

.nav-list-item{
    width: 15vw;
    height: 12vw;
    color:white;
    text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.show-time{

}
</style>
