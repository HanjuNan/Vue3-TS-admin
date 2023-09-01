# Veu3 + TS后台项目

## 项目初始化

全局安装pnpm
npm i -g pnpm

使用pnpm初始化项目
pnpm create vite

启动时自动打开浏览器的配置
在package.json的scripts中配置
"scripts": {
"dev": "vite --open",
},

规范开发,eslint配置,安装eslint
pnpm i eslint -D

生成eslint.cjs配置文件
npx eslint --init

1.1 vue3环境代码校验插件安装
pnpm install -D eslint-plugin-import eslint-plugin-vue eslint-plugin-node eslint-plugin-prettier eslint-config-prettier eslint-plugin-node @babel/eslint-parser

1.2 修改.eslintrc.cjs配置文件
module.exports = {
....
}

1.3 创建.eslintignore忽略文件
dist
node_modules

1.4 添加运行脚本
package.json新增两个运行脚本
"scripts": {
"lint": "eslint src",
"fix": "eslint src --fix",
}

配置prettier:格式化工具
eslint和prettier一个保证js代码质量,一个保证代码美观

1.1 安装
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier

1.2 .prettierrc.json配置规则

1.3 .prettierignore忽略文件

配置stylelint
格式化css代码,检查csss语法错误等

1.1 .styelinttrc.cjs配置文件

1.2 .stylelintignore忽略文件

1.3 在package.json文件中运行脚本

配置husky
需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，然后执行`pnpm run format`来自动的格式化我们的代码。

1.1 安装husky
pnpm install -D husky

1.2 执行
npx husky-init

配置commitlint
对于我们的commit信息，也是有统一规范的，不能随便写,要让每个人都按照统一的标准来执行，我们可以利用**commitlint**来实现。
1.1 安装
pnpm add @commitlint/config-conventional @commitlint/cli -D

1.2 配置
添加配置文件，新建`commitlint.config.cjs`(注意是cjs)，然后添加下面的代码：

1.3 在package.json中配置script命令
配置结束，现在当我们填写`commit`信息的时候，前面就需要带着下面的`subject`
'feat',//新特性、新功能
'fix',//修改bug
'docs',//文档修改
'style',//代码格式修改, 注意不是 css 修改
'refactor',//代码重构
'perf',//优化相关，比如提升性能、体验
'test',//测试用例修改
'chore',//其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert',//回滚到上一个版本
'build',//编译相关的修改，例如发布版本、对项目构建或者依赖的改动

1.4 配置husky
npx husky add .husky/commit-msg

当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx'
符合类型的才可以，**需要注意的是类型的后面需要用英文的 :，并且冒号后面是需要空一格的，
这个是不能省略的**

强制使用pnpm包管理工具

1.创建文件
在根目录创建`scritps/preinstall.js`文件，添加下面的内容

2.配置命令
"preinstall": "node ./scripts/preinstall.js"

## 项目集成

集成element-plus

1. 安装
   pnpm install element-plus @element-plus/icons-vue

2. 引入和配置
   import ElementPlus from 'element-plus';
   import 'element-plus/dist/index.css'
   //@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
   import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
   app.use(ElementPlus, {
   locale: zhCn
   })

src配置别名

1. 在vite.config.js文件中配置
   resolve: {
   alias: {
   "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
   }
   }
2. TypeScript 编译配置
   // tsconfig.json
   {
   "compilerOptions": {
   "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
   "paths": { //路径映射，相对于baseUrl
   "@/_": ["src/_"]
   }
   }
   }

环境变量的配置
开发环境、测试环境、生产环境
.env.development .env.product .env.test

import.meta.env获取环境变量

配置4SVG图标配置
svg文件比Img小很多,放在项目中几乎不占用资源
https://github.com/vbenjs/vite-plugin-svg-icons

1. 安装SVG依赖插件
   pnpm install vite-plugin-svg-icons -D

2. vite.config.ts中配置
3. 入口文件导入 import 'virtual:svg-icons-register'


封装SvgIcon组件,并注册为全局组件
在@/componnets文件夹下创建一个index.ts文件
在index.ts中暴露出一个对象,里面有个Install的方法,封装组件全局注册
并且将暴露的对象在main.ts中使用app.use进行插件注册


集成sass
在组件内使用scss语法,需要加上lang="scss"
<style scoped lang="scss"></style>

但是你会发现在src/styles/index.scss全局样式文件中没有办法使用$变量.
因此需要给项目中引入全局变量$.

1.1在styles文件夹下创建一个variable.scss文件！
1.2在vite.config.ts文件配置
css: {
   preprocessorOptions: {
   scss: {
   javascriptEnabled: true,
   additionalData: '@import "./src/styles/variable.scss";',
   },
   },
},


mock数据
1.1 安装
pnpm install -D vite-plugin-mock mockjs

1.2 在vite.config.js配置文件启用插件
import { viteMockServe } from 'vite-plugin-mock'

plugins: [
   vue(),
   viteMockServe({
   localEnabled: command === 'serve',
   }),
],

1.3 在mock文件夹下,创建user.ts文件用于模型用户信息请求数据
export default [
// 用户登录接口
{
   url: '/api/user/login',//请求地址
   method: 'post',//请求方式
   response: ({ body }) => {
   //获取请求体携带过来的用户名与密码
   const { username, password } = body;
   //调用获取用户信息函数,用于判断是否有此用户
   const checkUser = createUserList().find(
   (item) => item.username === username && item.password === password,
   )
   //没有用户返回失败信息
   if (!checkUser) {
   return { code: 201, data: { message: '账号或者密码不正确' } }
   }
   //如果有返回成功信息
   const { token } = checkUser
   return { code: 200, data: { token } }
   },
   },
]


1.1 安装axios
pnpm install axios

1.2 axios二次封装
目的:
1.使用请求拦截器,可以在请求拦截器中处理一些业务(开始进度条、请求头携带公共参数)
2.使用响应拦截器,可以在响应拦截器中处理一些业务(进度条结束、简化服务器返回的数据、处理网络错误)

















