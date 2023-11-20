import request from '@/utils/request';

enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
  LOGOUT_URL = '/user/logout',
}
const loginIn = (data: any) => {
  return request.post(API.LOGIN_URL, data);
};

const getUserInfo = (data: any) => {
  return request.get(API.USERINFO_URL);
};

const loginOut = () => {
  return request.get(API.LOGOUT_URL);
};
export { loginIn, getUserInfo, loginOut };
