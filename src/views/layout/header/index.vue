<script setup lang="ts">
import BreadCrumb from './breadCrumb/index.vue';
import Setting from './setting/index.vue';
</script>

<template>
  <div class="header-wrapper">
    <BreadCrumb></BreadCrumb>
    <Setting />
  </div>
</template>

<style scoped>
.header-wrapper {
  display: flex;
  height: 100%;
  padding: 0 24px;
  border-bottom: 1px solid #f8f8f8ff;
  align-items: center;
  justify-content: space-between;
}
</style>
