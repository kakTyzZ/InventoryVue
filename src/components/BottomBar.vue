<script setup>
import Skeleton from "./Skeleton.vue"


</script>


<template>
    <div class="bottomBarContainer">
      <Skeleton height="36" radius="12" width="700"/>
    </div>
</template>

<style scoped lang="scss">
.bottomBarContainer{
  margin-top: 24px;
  max-width: 785px;
  width: 100%;
  height: 72px;
  border-radius: 12px;
  border:1px solid #4D4D4D;
}


</style>