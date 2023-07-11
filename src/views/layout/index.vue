<template>
  <div class="common-layout">
    <el-container>
      <el-aside>
        <SideBar></SideBar>
      </el-aside>
      <el-container>
        <el-header>
          <Heder></Heder>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBar from './sideBar/index.vue';
import Heder from './header/index.vue';
</script>

<style scoped lang="scss">
.common-layout {
  width: 100%;
  height: 100vh;

  .el-aside {
    width: 300px;
    height: 100vh;
  }

  .el-header {
    height: 100px;
    width: 100%;
    background: yellowgreen;
  }

  .el-main {
    height: calc(100vh - 100px);
    background: #f99;
    padding: 24px;
  }
}
</style>
