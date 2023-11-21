<template>
  <div>
    <!-- <h1 classs="title">我是图标</h1> -->
    <!-- 引用全局svg组件 -->
    <!-- <svg-icon name="collapse" color="blue" style="width: 16px; height:16px"></svg-icon> -->
    <!-- 应用图标库 -->
    <!-- <my-icon name="iconsearch"></my-icon> -->
    <router-view></router-view>
    <!-- <input v-model="value" /> -->
    <!-- <h3>第二种写法</h3> -->
    <!-- <div style="height: 20px"></div>
    <input :value="value1" @input="value1 = $event?.target?.value" /> -->
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
const value = ref('');
const value1 = ref('');

watch(value, (value) => console.log('输出value', value));
watch(value1, (value) => console.log('输出value1', value));
</script>
<style lang="scss">
.title {
  color: $color;
}
</style>
