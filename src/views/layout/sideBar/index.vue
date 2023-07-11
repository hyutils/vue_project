<template>
  <duv class="leftSideBar">
    <el-menu
      default-active="/three"
      class="el-menu-vertical-demo"
      active-text-color="#ffd04b"
      background-color="#00152b"
      text-color="#fff"
    >
      <template v-for="(item, index) in menuItem">
        <el-sub-menu :key="index" v-if="item.children" :index="item.path">
          <template #title>{{ item.title }}</template>
          <el-menu-item
            v-for="child in item.children"
            :key="child.path"
            :index="child.path"
          >
            {{ child.title }}
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :key="item.path" :index="item.path">
          {{ item.title }}
        </el-menu-item>
      </template>
    </el-menu>
    <svg-icon name="collapse" color="#fff" class="collapseIcon" />
  </duv>
</template>

<script setup lang="ts">
import { menuItem } from './data';
import { Menu as IconMenu } from '@element-plus/icons-vue';
import { defineComponent, PropType, ref } from 'vue';
</script>

<style>
.el-menu-vertical-demo {
  height: 100%;
}

.leftSideBar {
  position: relative;
}
.collapseIcon {
  position: absolute;
  bottom: 24px;
  right: 24px;
  cursor: pointer;
}
</style>
