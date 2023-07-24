/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from 'vue';
// import './style.css'
import App from '@/App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import '@/assets/fonts/iconfont.css'; // 引入自定义图标样式文件
// 引入icon svg插件需要配置代码
import 'virtual:svg-icons-register';
// 注册全局icon
import allComponent from '@/components/index';
// 自定义图标库
import MyIcon from '@/components/MyIcon/MyIcon.vue';
// 引入全局样式
import '@/styles/index.scss';
// 路由
import router from '@/routers/index';
// pinia
import pinia from './store';
// 路由守卫
import './promiss';

const app = createApp(App);
app.component('MyIcon', MyIcon);
app.use(pinia);
app.use(allComponent);
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(router);
app.mount('#app');
