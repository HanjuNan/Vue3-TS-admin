import { createApp } from "vue";
import App from "./App.vue";

// 引入Element Plus和对应样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 获取应用实例
const app = createApp(App)


app.use(ElementPlus, {
    locale: zhCn,
})
// 将app挂在到#app上
app.mount('#app')
