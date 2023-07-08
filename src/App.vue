<template>
  <div>
    <h1 class="title">我是图标</h1>
    <!-- 引用全局svg组件 -->
    <svg-icon name="collapse" color="blue" style="width: 16px; height:16px"></svg-icon>
    <!-- 应用图标库 -->
    <!-- <my-icon name="iconsearch"></my-icon> -->
    <svg>
    <use href="#icon-collapse" fill="blue"></use>
  </svg>
  </div>
</template>
<script setup lang="ts">
  import { onMounted } from 'vue';
  import { loginIn } from '@/api/user/index'
  onMounted(async()=>{
    const aaa = await loginIn({username:"admin", password:'123456'});
    console.log("登录", aaa);
    
  })
</script>
<style lang="scss">
.title{
  color: $color;
}
</style>
