import { constantRoute } from '@/routers/routes';
import { defineStore } from 'pinia';
import { loginIn, loginOut, getUserInfo } from '@/api/user/index';
import { SET_STROAGE, GET_STROAGE, REMOVE_STROAGE } from '@/utils/token';
const userStore = defineStore('User', {
  state: () => {
    return {
      token: '',
      menuRoutes: constantRoute,
      username: '',
      avatar: '',
      buttons: [],
    };
  },
  actions: {
    async userLogin(data: any) {
      const res: any = await loginIn(data);
      if (res?.code === 200) {
        this.token = res?.data.token || '';
        SET_STROAGE('token', this.token as string);
        return 'ok';
      } else {
        return Promise.reject(new Error(res?.data));
      }
    },

    async getUserInfo(data: any) {
      const res: any = await getUserInfo(data);
      if (res.code === 200) {
        this.username = res.username;
        this.avatar = res.avatar;
        this.buttons = res.buttons;
        return 'ok';
      } else {
        return Promise.reject(new Error('获取用户信息失败'));
      }
    },

    async userLogout(data: any) {
      const res: any = await loginOut();
      if (res.code === 200) {
        this.token = '';
        this.username = '';
        this.avatar = '';
        this.buttons = [];
        REMOVE_STROAGE('token');
        return { code: 200 };
      } else {
        Promise.reject(new Error(res.data));
      }
    },
  },
  getters: {},
});

export default userStore;
