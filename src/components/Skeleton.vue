<script setup>

const props = defineProps({
  height: String,
  radius: String,
  width: String,
})

</script>


<template>
    <div class="skeletonContainer">
    
    <div class="content">
      <div
      :style="{'height': props.height + 'px', 'borderRadius': props.radius + 'px', 'maxWidth': props.width + 'px'}"
      class="p"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skeletonContainer {
  width: 100%;
  height: 100%;
  .content{
    display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      text-align: center;
      
      
    }
  
  .p {
    width: 100%;
    background: #eee;
    background: linear-gradient(110deg, #3C3C3C, #444444, #333333);
    background-size: 200% 100%;
    animation: 1s shine linear infinite;
    margin: 0;
  }
}

@keyframes shine {
  to {
    background-position-x: -200%;
  }
}
</style>