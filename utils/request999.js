// 网络请求的工具类
import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
// axios.defaults.withCredentials = true;// 允许跨域携带cookie

// 创建一个axios实例, 这个实例有请求拦截的校验
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 
})
// 请求拦截
service.interceptors.request.use(config => {
  if (store.getters.token) {
    // config.headers['X-Token'] = getToken()
    config.headers['token'] = getToken()
  }
  return config
},
error => {
  console.log('请求发起错误')
  // 请求错误时做的事情
  console.log(error)
  return Promise.reject(error)
  // return Promise.reject('请求超时!')
}
)

// 响应拦截   如果您想获得http信息，如头信息或状态  return  response => response
service.interceptors.response.use(response => {
  const res = response.data
  if (res.code !== 0) {
    if (res.msg == '请求失败!') {
      Message({
        message: '网络异常!' || 'Error',
        type: 'error',
        duration: 4 * 1000
      })
    }
    else {
      Message({
        message: res.msg || '网络错误!' || 'Error',
        type: 'error',
        duration: 4 * 1000
      })
    }

    // 无token, token过期401,   901用户已经登录
    if (res.code === 401) {
      MessageBox.confirm('您已经登出，您可以取消登出以留在此页面，或再次登录  ', '确认登出?', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      })
    }
    console.log('数据响应成功 但code不是200')
    return Promise.reject(new Error(res.message || 'Error'))
  } else {
    return res
  }
},
error => {
  console.log('err' + error)
  Message({
    message: error.message,
    type: 'error',
    duration: 4 * 1000
  })
  return Promise.reject(error)
}
)

// 2 这个axios实例 没有请求拦截 token的校验
export const unimpeded = axios.create({
  timeout: 10000
})
unimpeded.interceptors.request.use(config => {
  return config
})

unimpeded.interceptors.response.use(response => {
  const res = response.data
  return res
})

export default service
