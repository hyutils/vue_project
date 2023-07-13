<template>
  <div class="headerWrapper">
    <div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in state.breadData" :key="item?.name">
          {{ item?.name }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="avatarWrapper">
      <el-avatar :icon="UserFilled" />
      <el-dropdown trigger="click" style="margin-left: 12px">
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { UserFilled } from '@element-plus/icons-vue';

const state = reactive({
  breadData: [
    { name: '用户', path: '/user' },
    { name: '权限管理', path: '/user/mal' },
  ],
});
</script>

<style scoped>
.headerWrapper {
  display: flex;
  height: 100%;
  padding: 0 24px;
  border-bottom: 1px solid #f8f8f8ff;
  align-items: center;
  justify-content: space-between;

  .avatarWrapper {
    display: flex;
    align-items: center;
  }

  .el-dropdown-link {
    transform: translateY(5px);
    cursor: pointer;
  }
}
</style>
