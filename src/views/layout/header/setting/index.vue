<template>
  <div class="setting-wrapper">
    <div style="margin-right: 16px">
      <el-button :icon="Search" circle />
      <el-button :icon="Monitor" circle />
      <el-button :icon="Setting" circle />
    </div>
    <div class="avatar-wrapper">
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
            <el-dropdown-item divided @click="logOut">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { UserFilled } from '@element-plus/icons-vue';
import { Monitor, Search, Setting } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import userStore from '@/store/modules/user';
const useUserStore = userStore();
const $router = useRouter();
const logOut = async () => {
  const res: any = await useUserStore.userLogout({});
  console.log('退出登录', res);

  if (res.code === 200) $router.push('/login');
};
</script>
<style scoped lang="scss">
.setting-wrapper {
  display: flex;
  align-items: center;
}
.avatar-wrapper {
  display: flex;
  align-items: center;
}

.el-dropdown-link {
  // transform: translateY(3px);
  cursor: pointer;
}
</style>
