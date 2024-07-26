<script setup lang=ts>
import { useDraggable } from 'vue-draggable-plus'
import {useInventoryStore} from "../store/MainStore.js"
import {ref,onMounted,watch} from "vue"
import DeleteElemScreen from "./DeleteElemScreen.vue"

const store = useInventoryStore()
const el = ref(null)
const currentData = ref<Item[]>([])

interface Item {
  id: number
  content: string
}



useDraggable(el, currentData, {
  animation: 150,
  onStart() {
    console.log('start')
  },
  onUpdate() {
    
  }
})
function changeColors() {
  store.changeTheme()
}

function setCurrentItem(item:Item) {
  if (item) {
    store.currentElement = item;
  } else {
    store.currentElement = null;
  }
}

watch(() => store.inventoryData, (newData) => {
  currentData.value = newData;
  
});

watch(()=>currentData.value, (newData) =>{
  store.inventoryData = newData
  localStorage.setItem("inventoryData", JSON.stringify(newData))
}
)




onMounted(() => {
  const dataStr = localStorage.getItem("inventoryData")
  const data = dataStr ? JSON.parse(dataStr) : null
  const localColorStateStr = localStorage.getItem("colorState")
  const localColorState = localColorStateStr ? JSON.parse(localColorStateStr) : null
  if (data) {
    currentData.value = data
  } else {
    currentData.value = store.inventoryData
  }
  if(localColorState){
    store.colorState = localColorState
    console.log(store.colorState);
    changeColors()
  }
  
})



</script>


<template>
       <div
       
       ref="el" class="inventory">
        <div class="item" v-for="item  in currentData" :key="item.id">
        
        <img @click="setCurrentItem(item)" :src="item.content" alt="">
        <div v-if="item.content"
        class="inventoryNumber"
        >{{ item.id }}</div>
        </div>
        <Transition name="slide-fade">
          <DeleteElemScreen v-if="store.currentElement"/>
        </Transition>
        
        </div>
</template>



<style lang="scss">
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(350px);
  opacity: 0;
}
.inventory{
  position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    background-color: var(--bg-color);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius:12px ;
    max-height: 500px;
    .inventoryNumber{
      position: absolute;
      right: 0;
      bottom: 0;
      color:var(--text-color);
      font-size: 16px;
      padding: 1px 5px;
      background-color: var(--bg-color);
      border: 1px solid var(--secondary-color);
      border-top-left-radius: 5px;
      border-right-width: 0px;
    }
    
    
    .item{
      position: relative;
        border:1px solid var(--secondary-color);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        
    }
    .item:nth-child(1){
      border-top-left-radius: 12px;
    }
    .item:nth-child(5){
      border-top-right-radius: 12px;
    }.item:nth-child(21){
      border-bottom-left-radius: 12px;
    }.item:nth-child(25){
      border-bottom-right-radius: 12px;
    }
}
</style>

