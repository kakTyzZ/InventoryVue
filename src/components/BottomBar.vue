<script setup lang="ts">
import Skeleton from "./Skeleton.vue"
import Cross from "./Cross.vue"
</script>


<template>
    <div 
    class="bottomBarContainer">
      <Skeleton height="36" radius="12" width="700"/>
      <Cross class="cross" />
    </div>
</template>

<style scoped lang="scss">
.bottomBarContainer{
  position: relative;
  margin-top: 24px;
  max-width: 785px;
  width: 100%;
  height: 72px;
  border-radius: 12px;
  border:1px solid var(--secondary-color);
  .cross{
    position: absolute;
    top: 8px;
    right:8px;
  }
}


</style>