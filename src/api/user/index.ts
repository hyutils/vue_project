import request from "@/utils/request";

enum API {
    LOGIN_URL = '/user/login',
    USERINFO_URL = '/user/info',
    LOGOUT_URL = '/admin/acl/index/logout',
  }
const loginIn = (data:any) =>{
    return request.post( API.LOGIN_URL,data)
}

const getUserInfo = (data:any) =>{
    return request.get(API.USERINFO_URL)
}

const loginOut = () =>{
    return request.post(API.LOGOUT_URL)
}
export {
    loginIn,
    getUserInfo,
    loginOut
}