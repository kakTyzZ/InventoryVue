<script setup lang="ts">
import {ref} from "vue"
import {useInventoryStore}  from "../store/MainStore.ts"
import Skeleton from "./Skeleton.vue"
import Cross from "./Cross.vue"
const store = useInventoryStore()

const confirmState = ref(false)

function deleteEl(){
    store.deleteElement()
}

</script>


<template>
    <div class="deleteElemScreen">
        <div
        class="bgWithOpacity"></div>
        <div
        v-if="confirmState" class="confirm">
            <div class="inputContainer">
                <input type="text" placeholder="Введите количество">
            </div>
            <div class="buttonContainer">
                <button
                @click="confirmState = false"
                class="cancelBtn">Отмена</button>
                <button
                @click="deleteEl"
                class="confirmBtn">Подтвердить</button>
            </div>
        </div>
        <div class="innerContainer">
            <div @click="store.currentElement = null" class="crossContainer">
                <Cross/>
            </div>
            <div class="imgContainer" v-if="store.currentElement && store.currentElement.content">
                <img class="img" :src="store.currentElement.content" alt="">
             </div>
            <div class="line"></div>
            <div class="topSkeletonContainer"    >

                <Skeleton height="30" radius="8" width="211"/>

            </div>
            <div class='middleSkeletonContainer'>
           
                <Skeleton height="10" radius="8" width="211"/>
                <Skeleton height="10" radius="8" width="211"/>
                <Skeleton height="10" radius="8" width="211"/>
                <Skeleton height="10" radius="8" width="180"/>
                <Skeleton v-if="!confirmState" height="10" radius="8" width="80"/>
            
            </div>
            <div v-if="!confirmState">
               <div class="line"></div>
                <div class="buttonContainer">
                    <button
                    @click="confirmState = true"
                    >Удалить предмет</button>
                </div> 
            </div>
            
                
        </div>
    </div>
        
    
</template>

<style scoped lang="scss">
.deleteElemScreen{
    position: absolute;
    max-width: 250px;
    width: 100%;
    max-height: 500px;
    height: 100%;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
    right:0;
    background-color: var(--secondary-color);
    .confirm{
        box-sizing: border-box;
        position: absolute;
        height: 133px;
        bottom: 0;
        width: 100%;
        background-color: var(--bg-color);
        border-bottom-right-radius: 12px;
        border:3px solid var(--secondary-color);
        z-index: 10;
        .inputContainer {
            display: flex;
            justify-content: space-around;
            margin: 20px 0;
            
            input{
                width: 80%;
                height: 40px;
                border-radius: 4px;
                background: none;
                outline: none;
                padding-left: 10px;
                border:1px solid var(--secondary-color);
                color:var(--secondary-color);
                font-size: 16px;
            }
        }
        .buttonContainer {
            display: flex;
            justify-content: center;
            
            gap: 10px;
        }
        .cancelBtn {
            display: flex;
            text-align: center;
            justify-content: center;
            border-radius: 8px;
            max-width: 88px;
            background-color: var(--text-color);
            height: 33px;
            width: 100%;
            color: var(--bg-color);
            align-items: center;
        }
        .confirmBtn {
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            height: 33px;
            border-radius: 8px;
            max-width: 112px;
            width: 100%;
            background-color:#FA7272;
            color:white;
        }
    }
    .bgWithOpacity{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: var(--bg-color);
    }
    .innerContainer{
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: column;
        .crossContainer{
            display: flex;
            justify-content: end;
            padding: 8px;
        }
       
        .imgContainer{
            width: 100%;
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            .img{
            max-width: 130px;
            max-height: 130px;
            width: 100%;
            height: 100%;
            }
        }
        .topSkeletonContainer{
            margin-top: 16px;
            margin-bottom: 24px;
        }
        .middleSkeletonContainer{
            margin-bottom: 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }
        
        .line{
            width: 80%;
            height: 1px;
            background-color: var(--secondary-color);
            margin: 12px auto;
        }
        .buttonContainer{
            display: flex;
            justify-content: center;
            margin-bottom: 18px;
            button{
                background-color: #FA7272;
                border:none;
                border-radius: 8px;
                max-width: 220px;
                width: 100%;
                height: 39px;
                cursor: pointer;
            }
        }
    }
}
</style>