<script setup lang="ts">
import SideBar from './sideBar/index.vue';
import Heder from './header/index.vue';
import { reactive } from 'vue';

const state = reactive({
  sideWidth: 200,
});

const onCollpase = () => {
  const width = state.sideWidth;
  state.sideWidth = width === 200 ? 80 : 200;
};
</script>

<template>
  <div class="layout-wrapper">
    <el-container>
      <el-aside :width="`${state.sideWidth}px`">
        <SideBar :onCollpase="onCollpase" />
      </el-aside>
      <el-container :style="{ width: `calc(100% - ${state.sideWidth}px)` }">
        <el-header>
          <Heder />
        </el-header>
        <el-main class="mainConner">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped lang="scss">
.layout-wrapper {
  width: 100%;
  height: 100vh;

  .el-aside {
    height: 100vh;
    overflow-x: hidden;
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
