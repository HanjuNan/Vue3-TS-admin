
// 进行axios二次封装: 使用请求拦截器与响应拦截器
import { ElMessage } from "element-plus";
import axios from "axios";
// 第一步: 利用axios对象的create方法,去创建axios实例(可以进行一些其他配置)
let request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000
})

// 第二步: request实例添加请求与响应拦截器
request.interceptors.request.use(config => {
    return config
})

// 第三步: 配置响应拦截器
request.interceptors.response.use((response) => {
    console.log("response = ",response)
    return response.data;
}, (err) => {
    let message = ''
    let status = err.response.status
    switch(status) {
        case 401:
            message = 'token过期';
            break;
        case 403:
            message = '无权访问';
            break;
        case 404:
            message = '请求地址错误';
            break;
        case 500:
            message = '服务器错误';
            break;
    }
    // 提示的错误信息
    ElMessage({
        type: 'error',
        message
    })
    return Promise.reject(err)
})


export default request