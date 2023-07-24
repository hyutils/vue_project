<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login-form" :model="loginForm">
          <h1>hello</h1>
          <h2>请输入用户名和密码</h2>
          <el-form-item>
            <el-input
              :prefix-icon="User"
              v-model="loginForm.username"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              :prefix-icon="Lock"
              type="password"
              v-model="loginForm.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="login" type="primary" class="login-btn">
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { ElMessage } from 'element-plus';
import useUserStore from '@/store/modules/user';
const userStore = useUserStore();
const loginForm = reactive({ username: 'admin', password: '123456' });
let $router = useRouter();
let $route = useRoute();
const login = async () => {
  //
  try {
    await userStore.userLogin(loginForm);
    let redirect: string = $route.query.redirect as string;
    $router.push({ path: redirect || '/' });
    $router.push('/');
    ElMessage({
      type: 'success',
      message: '登录成功',
    });
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
}
.login-form {
  position: relative;
  width: 80%;
  top: 30vh;
  padding: 40px;
  background: url('@/assets/images/login_form.png') no-repeat;
  background-size: cover;

  h1 {
    color: #fff;
    font-size: 40px;
  }
  h2 {
    color: #fff;
    font-size: 20px;
    margin: 16px 0px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
