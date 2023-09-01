import { createApp } from "vue";
import App from "./App.vue";

// 引入Element Plus和对应样式
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 配置element-plus国际化
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
// svg插件需要的配置代码
import "virtual:svg-icons-register";
// 获取应用实例
const app = createApp(App);

app.use(ElementPlus, {
  locale: zhCn,
});

// 引入自定义插件: 注册整个项目的全局组件
import globalComponentPlugin from "./components/index.ts"
// 安装自定义插件: 注册整个项目的全局组件
app.use(globalComponentPlugin)

//引入模板的全局样式
import "@/styles/index.scss"



//  测试代码
import axios from "axios"
axios({
  url: '/api/user/login',
  method: "post",
  data: {
    username: 'admin',
    password: '111111',
  }
})
console.log("aaaa")



// 将app挂在到#app上
app.mount("#app");
