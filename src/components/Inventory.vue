<script setup>
import { useDraggable } from 'vue-draggable-plus'
import {useInventoryStore} from "../store/MainStore.js"
import {ref,onMounted,watch} from "vue"
import DeleteElemScreen from "./DeleteElemScreen.vue"

const store = useInventoryStore()
const el = ref(null)
const currentData = ref([])



const draggable = useDraggable(el, currentData, {
  animation: 150,
  onStart() {
    console.log('start')
  },
  onUpdate() {
    console.log("update", currentData.value)
    localStorage.setItem("inventoryData", JSON.stringify(currentData.value))
    
  }
})

watch(() => store.inventoryData, (newData) => {
  currentData.value = newData;
});


onMounted(() => {
  const data = JSON.parse(localStorage.getItem("inventoryData"))
  console.log('onMounted', data)
  if (data) {
    console.log('inside')
    currentData.value = data
  } else {
    currentData.value = store.inventoryData
  }
})

</script>


<template>
       <div ref="el" class="inventory">
        <div class="item" v-for="item  in currentData" :key="item.id">
        
        <img :src="item.content" alt="">
        
        </div>
        <DeleteElemScreen/>
        </div>
</template>



<style lang="scss">
.inventory{
  position: relative;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
    background-color: rgb(255,255,255,0.1);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100%;
    border-radius:12px ;
    max-height: 500px;
    
    .item{
        border:1px solid #4D4D4D;
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


<!-- <VueDraggable
                
                class="inventory"
                ref="el"
               
                v-model="store.inventoryData"
                
                >
                <div class="item" v-for="i in store.inventoryData" >
                    {{ i.content }}
                </div>
                </VueDraggable> -->