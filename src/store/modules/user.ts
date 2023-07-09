import { constanRoute } from '@/routers/routes';
import { defineStore } from 'pinia';
import { loginIn, loginOut, getUserInfo } from '@/api/user/index';
import { setToken, getToken, removeToken } from '@/utils/token';
const userStore = defineStore('User', {
  state: () => {
    return {
      token: '',
      menuRoutes: constanRoute,
      username: '',
      avatar: '',
      buttons: [],
    };
  },
  actions: {
    async userLogin(data: any) {
      const res: any = await loginIn(data);
      if (res?.code === 200) {
        this.token = res?.data || '';
        setToken('token', this.token as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(res?.data));
      }
    },
  },
  getters: {},
});

export default userStore;
