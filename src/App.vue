<script setup lang="ts">
import Inventory from "./components/Inventory.vue";
import BottomBar from "./components/BottomBar.vue";
import SideBar from "./components/SideBar.vue";
import {useInventoryStore} from "./store/MainStore.js"

const store = useInventoryStore()

function changeColors() {
  store.changeTheme()
}

function clearLocalStorage(){
  localStorage.clear()
  document.location.reload()
}

</script>

<template>
  <div 
  class="container">
    <div class="top">
      <SideBar/>
      <Inventory/>
    </div>
    <div class="bottom">
      <BottomBar/>

    </div>
    <div class="appButtonContainer">
      <button
      class="btn"
      @click="changeColors"
      >Change Colors</button>

      <button
      class="btn"
      @click="clearLocalStorage"
      >Очистить localStorage</button>
    </div>
    
  </div>
    
</template>

<style  lang="scss">
:root{
    --primary-color: #000000!important;
    --secondary-color: #4D4D4D!important;
    --text-color: #FFFFFF!important;
    --bg-color: rgb(33, 30, 30)!important;
    --skeleton-color: #3C3C3C, #444444, #333333!important;
    
    
  }

.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  max-width: 1024px;
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 32px;
  background-color: var(--bg-color);
  .top{
    display: flex;
    gap: 24px;
    
  }
  .bottom{
    display: flex;
    justify-content:center;
  }
  .appButtonContainer{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    .btn{
      padding: 8px 36px;
      border-radius: 8px;
      background-color: var(--bg-color);
      color: var(--text-color);
      max-width: 300px;
      cursor: pointer;
    }
  }
}


</style>
