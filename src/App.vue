<template>
  <Login msg="wellcom to webSite!" @test="add"></Login>
</template>

<script lang="ts">

import {effect} from "@vue/reactivity"
import Login from "./views/login.vue"
export default {
  name: 'App',
  components:{
    Login
  },
  setup(){

    function add(a:number){
      console.log(a)
    }
    return {
      add
    }
  }
}
</script>
