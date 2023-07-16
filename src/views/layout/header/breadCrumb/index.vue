<template>
  <div class="breadcrumb-wrapper">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in $route.matched"
        v-show="item?.meta?.title"
        :key="item?.path"
        :to="item.path"
      >
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span style="padding-left: 12px; cursor: pointer">
          {{ item?.meta.title }}
        </span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute();
console.log('路由', $route.matched);

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
