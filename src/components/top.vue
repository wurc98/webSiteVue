<template>
    <div class="wu-logo">
      <div v-if="state.isLogo" class="logo"></div>
      <svg v-else class="icon nav-list-item" aria-hidden="true">
        <use :xlink:href="state.icon" />
      </svg>
    </div>
    <el-menu
      :default-active="state.activeIndex"
      class="el-menu-demo top-nav"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="(item, index) in state.navList"
        :key="index + item"
        :index="index"
        @click="onNav(index)"
        >{{ item.title }}</el-menu-item
      >
    </el-menu>
</template>
<script lang="ts">
import { ref, reactive } from "vue";
//导航栏
const nav = () => {
  const state = reactive({
    isLogo: true,
    activeIndex: 0,
    icon: "",
    navList: [
      { title: "首页", icon: "" },
      { title: "vue", icon: "#iconVue" },
      { title: "react", icon: "#iconReact" },
      { title: "java", icon: "#iconjava" },
      { title: "数据库", icon: "#iconico_Mysgl" },
      { title: "程序基础", icon: "#iconchengxutubiao" },
      { title: "英语", icon: "#iconyingyu" },
    ],
  });
  const onNav = (index: number) => {
    console.log(index);
    if (index) {
      state.isLogo = false;
      state.icon = state.navList[index].icon;
      return;
    }
    state.isLogo = true;
  };

  return {
    state,
    onNav,
  };
};

export default {
  name: "index",
  components: {
  },
  setup() {
    //导航栏状态
    const navData = nav();
    return {
      ...navData,
    };
  },
};
</script>

<style scoped>
.wu-home {
  width: 100vw;
  height: 100vh;
}
.wu-logo {
  position: absolute;
  width: 30vw;
  height: 9vh;
  z-index: 2;
}
.logo {
  width: 90%;
  height: 100%;
  margin-left: 10%;
  font-size: 4vw;
  background: url("../assets/images/logo.png") no-repeat;
  background-size: 100% 100%;
}
.top-nav {
  display: flex;
  justify-content: center;
}
.nav-list-item {
  width: 30%;
  font-size: 4vw;
}
</style>