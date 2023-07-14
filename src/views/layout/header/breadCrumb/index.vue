<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in state.breadData" :key="item?.name">
        {{ item?.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const state = reactive({
  breadData: [
    { name: '用户', path: '/user' },
    { name: '权限管理', path: '/user/mal' },
  ],
});
</script>
<style lang="scss" scoped>
.breadcrumb-wrapper {
  display: flex;
  align-items: center;
}
</style>
