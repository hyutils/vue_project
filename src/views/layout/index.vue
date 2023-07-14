<template>
  <div class="layout-wrapper">
    <el-container>
      <el-aside :width="`${state.sideWidth}px`">
        <SideBar :sideWidth="state.sideWidth" :onCollpase="onCollpase" />
      </el-aside>
      <el-container :style="{ width: `calc(100% - ${state.sideWidth}px)` }">
        <el-header>
          <Heder />
        </el-header>
        <el-main class="mainConner">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import SideBar from './sideBar/index.vue';
import Heder from './header/index.vue';
import { reactive } from 'vue';

const state = reactive({
  sideWidth: 200,
});

const onCollpase = () => {
  const width = state.sideWidth;
  state.sideWidth = width === 200 ? 100 : 200;
};
</script>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  height: 100vh;

  .el-aside {
    height: 100vh;
  }

  .el-header {
    height: 52px;
    padding: 0 !important;
    width: 100%;
  }

  .mainConner {
    height: calc(100vh - 100px);
    padding: 24px;
  }
}
</style>
