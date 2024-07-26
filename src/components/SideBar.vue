<script setup>
import Skeleton from "./Skeleton.vue"


</script>


<template>
    <div class="container">
        <img class="img" src="/pic1.png" alt="">
        <Skeleton height="26" radius="8" width="190"/>
        <div class="innerContainer">
            <Skeleton height="10" radius="4" width="155"/>
            <Skeleton height="10" radius="4" width="190"/>
            <Skeleton height="10" radius="4" width="170"/>
            <Skeleton height="10" radius="4" width="160"/>
            <Skeleton height="10" radius="4" width="140"/>
        </div>
        
        <Skeleton height="10" radius="4" width="80"/>
    </div>
</template>

<style scoped lang="scss">
.container{
    display: flex;
    flex-direction: column;
    max-width: 236px;
    width: 100%;
    height: 500px;
    padding: 18px 14px;
    border-radius: 12px;
    border:1px solid #4D4D4D;
    justify-content: center;
    text-align: center;
    
    .img{
        max-width: 240px;
        max-height: 208px;
        width: 100%;
        height: 100%;
        border-radius: 8px;
        margin-bottom: 20px;
        
    }
    .innerContainer{
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 24px 0;
        width: 100%;
        height: 100%;
        
    }
}


</style>