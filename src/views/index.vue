<template>
    <div class="wu-home">
        <div class="nav-btn">
            <i class="iconfont">&#xe747;</i>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name:"index",
    setup(){
        return {

        }
    }
}
</script>

<style scoped>
    .wu-home{
        width: 100vw;
        height:100vh;
        background: url('../assets/images/bg.jpg') no-repeat;
        background-size: 100% 100%;
    }
    .nav-btn{
        position:absolute;
        width: 3vw;
        height: 3vw;
        left: 10vw;
        top: 5vh;
    }
</style>