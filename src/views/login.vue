<template>
    <div>
    {{msg}}
    </div>
    <el-button>123</el-button>

</template>

<script lang="ts">
import { useStore } from 'vuex';
export default {
   
    props:{
        msg:String
    },
    setup(props:Object,context:any){
        const store = useStore();
        console.log(store.getters.getUserName)
    }   
}
</script> 