<script setup lang="ts">
import Inventory from "./components/Inventory.vue";
import BottomBar from "./components/BottomBar.vue";
import SideBar from "./components/SideBar.vue";
</script>

<template>
  <div 
  :style="{'backgroundColor': 'black'}"
  class="container">
    <div class="top">
      <SideBar/>
      <Inventory/>
    </div>
    <div class="bottom">
      <BottomBar/>
    </div>
  </div>
    
</template>

<style lang="scss">

.container{
  box-sizing: border-box;
  max-width: 1024px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  .top{
    display: flex;
    gap: 24px;
  }
  .bottom{

  }
}


</style>
