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






























