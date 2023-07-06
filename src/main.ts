/* eslint-disable @typescript-eslint/ban-ts-comment */
import { createApp } from 'vue'
// import './style.css'
import App from '@/App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

// 引入icon svg插件需要配置代码
import 'virtual:svg-icons-register'
// 注册全局icon
import allComponent from '@/components/index'
const app = createApp(App)

app.use(allComponent)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(ElementPlus)
app.mount('#app')
createApp(App).mount('#app')
