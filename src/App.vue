<template>
  <div>
    <!-- <h1 classs="title">我是图标</h1> -->
    <!-- 引用全局svg组件 -->
    <!-- <svg-icon name="collapse" color="blue" style="width: 16px; height:16px"></svg-icon> -->
    <!-- 应用图标库 -->
    <!-- <my-icon name="iconsearch"></my-icon> -->
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.title {
  color: $color;
}
</style>
