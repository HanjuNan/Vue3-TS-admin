import SvgIcon from "@/components/SvgIcon/index.vue"
import Pagination from "@/components/Pagination/index.vue"

const allGlobalComponent = {SvgIcon, Pagination}


// 对外暴露一个插件对象
export default {
    // 注册项目全部的全局组件
    install(app) {
        Object.keys(allGlobalComponent).forEach(key => {
            // 注册为全局组件
            app.component(key, allGlobalComponent[key])
        })
    }
}