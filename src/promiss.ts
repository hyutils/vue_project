import router from './routers';
import userStore from './store/modules/user';
import pinia from './store';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { GET_STROAGE } from './utils/token';
const userInfo = userStore(pinia);
router.beforeEach(async (to: any, from: any, next: any) => {
  const token = GET_STROAGE('token') || userInfo.token;
  const username = userInfo.username;
  nprogress.start();
  if (token) {
    if (to.path === '/login') {
      next('/');
    } else {
      if (username) {
        next(to);
      } else {
        try {
          await userInfo.getUserInfo({});
          next();
        } catch (err) {
          await userInfo.userLogout({});
          next({ path: '/login' });
        }
      }
    }
  } else {
    if (to.path == '/login') {
      console.log('12345');

      next();
    } else {
      console.log('直接到登录');
      next({ path: '/login' });
    }
  }
});
router.afterEach((to: any, from: any) => {
  document.title = to.meta.title;
  nprogress.done();
});
